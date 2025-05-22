import type { Actions } from '@sveltejs/kit';

import { env } from '$env/dynamic/private';
import { s3 } from '$lib/utils/aws/s3';
import type { RequestEvent } from '@sveltejs/kit';

export const actions = {
	apply: async ({ request, params }: RequestEvent) => {
		const formData = await request.formData();

		const startupId = params.startupId;
		const orgId = params.orgId;
		const applicationId = formData.get('applicationId');

		const response = await fetch(`${env.BASE_API_URL}/organizations/${orgId}`);
		const organization = await response.json();

		const KEYS_TO_REMOVE = ['applicationId'];
		const answers = Array.from(formData.entries()).filter(([key]) => !KEYS_TO_REMOVE.includes(key));

		const responses: Record<string, string | boolean> = {};

		await Promise.all(
			answers.map(async ([questionId, answer]) => {
				const question = organization.applicationQuestions.find(
					(q: Organization.ApplicationQuestion) => q._id === questionId
				);

				if (!question) return;

				let processedAnswer;

				if (question.type === 'upload' && answer instanceof File && answer.size) {
					processedAnswer = await s3.uploadFile(answer, env.AWS_APPLICATION_FILES_BUCKET_NAME);
				} else if (question.type === 'checkbox') {
					processedAnswer = answer === 'on';
				} else {
					processedAnswer = answer.toString();
				}

				responses[questionId] = processedAnswer;
			})
		);

		const applicationSaveResponse = await fetch(
			`${env.BASE_API_URL}/startup/${startupId}/applications/${applicationId}`,
			{
				method: 'PATCH',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(responses)
			}
		);

		if (!applicationSaveResponse.ok) {
			const error = await applicationSaveResponse.json();
			throw new Error('Failed to save application', { cause: error });
		}

		const submitApplicationResponse = await fetch(
			`${env.BASE_API_URL}/startup/${startupId}/applications/${applicationId}/submit`,
			{
				method: 'POST',
				headers: { 'Content-Type': 'application/json' }
			}
		);

		if (!submitApplicationResponse.ok) {
			const error = await submitApplicationResponse.json();
			throw new Error('Failed to submit application', { cause: error });
		}

		return { success: true };
	},

	application: async ({ params }: RequestEvent) => {
		const startupId = params.startupId;
		const orgId = params.orgId;

		const response = await fetch(
			`${env.BASE_API_URL}/startup/${startupId}/organizations/${orgId}/ai`,
			{
				method: 'POST'
			}
		);

		const application = await response.json();
		return { application };
	}
} satisfies Actions;
