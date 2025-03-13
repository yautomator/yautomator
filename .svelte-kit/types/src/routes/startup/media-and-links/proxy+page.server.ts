// @ts-nocheck
import { env } from '$env/dynamic/private';
import { s3 } from '$lib/utils/aws/s3';
import type { Actions, RequestEvent } from '@sveltejs/kit';

type CreateStartupDto = {
	websiteUrl: string;
	pitchDeckUrl: string | null;
	pitchDeckName: string | null;
};

export const actions = {
	default: async ({ request }: RequestEvent) => {
		const formData = await request.formData();

		const pitchDeckFile = formData.get('pitchDeck') as File | null;
		let pitchDeckUrl: string | null = null;
		let pitchDeckName: string | null = null;

		if (pitchDeckFile instanceof File && pitchDeckFile.size) {
			pitchDeckUrl = await s3.uploadFile(pitchDeckFile, env.AWS_CV_BUCKET_NAME);
			pitchDeckName = pitchDeckFile.name;
		}

		const newStartupData: CreateStartupDto = {
			websiteUrl: formData.get('websiteUrl') as string,
			pitchDeckUrl: pitchDeckUrl,
			pitchDeckName: pitchDeckName
		};

		const startupId = formData.get('id') as string;

		console.log(newStartupData);
		const response = await fetch(`${env.BASE_API_URL}/startup/${startupId}`, {
			method: 'PATCH',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(newStartupData)
		});

		const startup = await response.json();

		if (!response.ok) {
			throw new Error('Failed to update startup information', { cause: startup });
		}

		return { startup };
	}
} satisfies Actions;
;null as any as Actions;