import { env } from '$env/dynamic/private';
import { s3 } from '$lib/utils/aws/s3';
import type { RequestEvent } from '@sveltejs/kit';

export const apply = async ({ request, params }: RequestEvent) => {
	const formData = await request.formData();
	const startupId = params.id;
	const organizationId = formData.get('organizationId') as string;

	const response = await fetch(`${env.BASE_API_URL}/organizations/${organizationId}`);
	const organization = await response.json();

	const KEYS_TO_REMOVE = ['organizationId'];

	const answers = Array.from(formData.entries()).filter(([key]) => !KEYS_TO_REMOVE.includes(key));

	const payload = answers.map(async ([questionId, answer]) => {
		const question = organization.applicationQuestions.find((q: any) => q._id === questionId);

		if (!question) {
			throw new Error(`Question ${questionId} not found`);
		}

		let processedAnswer;

		if (question.type === 'upload' && answer instanceof File && answer.size) {
			processedAnswer = await s3.uploadFile(answer, env.AWS_APPLICATION_FILES_BUCKET_NAME);
		} else if (question.type === 'checkbox') {
			processedAnswer = answer === 'on';
		} else {
			processedAnswer = answer.toString();
		}

		return { questionId, answer: processedAnswer };
	});

	const applicationResponse = await fetch(
		`${env.BASE_API_URL}/startup/${startupId}/applications/${organizationId}`,
		{
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ payload })
		}
	);

	if (!applicationResponse.ok) {
		const error = await applicationResponse.json();
		throw new Error('Failed to submit application', { cause: error });
	}

	return { success: true };
};
