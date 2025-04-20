import { env } from '$env/dynamic/private';
import { s3 } from '$lib/utils/aws/s3';
import type { Actions, RequestEvent } from '@sveltejs/kit';

type CreateFounderDto = {
	firstName: string;
	lastName: string;
	role: string;
	email: string;
	summary: string;
	country: string;
	linkedin: string;
	cvUrl: string | null;
	cvName: string | null;
};

export const actions = {
	create: async ({ request }: RequestEvent): Promise<{ success: boolean }> => {
		const formData = await request.formData();

		const cvFile = formData.get('cv') as File | null;
		let cvUrl: string | null = null;
		let cvName: string | null = null;

		if (cvFile instanceof File && cvFile.size) {
			cvUrl = await s3.uploadFile(cvFile, env.AWS_CV_BUCKET_NAME);
			cvName = cvFile.name;
		}

		const newFounderData: CreateFounderDto = {
			firstName: formData.get('firstName') as string,
			lastName: formData.get('lastName') as string,
			role: formData.get('role') as string,
			country: formData.get('country') as string,
			linkedin: formData.get('linkedin') as string,
			email: formData.get('email') as string,
			summary: formData.get('summary') as string,
			cvUrl: cvUrl,
			cvName: cvName
		};

		const startupId = formData.get('startupId') as string;

		const response = await fetch(`${env.BASE_API_URL}/startup/${startupId}/founders/`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(newFounderData)
		});

		if (!response.ok) {
			const error = await response.json();
			throw new Error('Failed to create new founder', { cause: error });
		}

		return { success: true };
	},

	update: async ({ request }: RequestEvent): Promise<{ success: boolean }> => {
		const formData = await request.formData();

		const cvFile = formData.get('cv') as File | null;
		let cvUrl: string | null = null;
		let cvName: string | null = null;

		if (cvFile instanceof File && cvFile.size) {
			cvUrl = await s3.uploadFile(cvFile, env.AWS_CV_BUCKET_NAME);
			cvName = cvFile.name;
		}

		const newFounderData: CreateFounderDto = {
			firstName: formData.get('firstName') as string,
			lastName: formData.get('lastName') as string,
			role: formData.get('role') as string,
			country: formData.get('country') as string,
			linkedin: formData.get('linkedin') as string,
			email: formData.get('email') as string,
			summary: formData.get('summary') as string,
			cvUrl: cvUrl,
			cvName: cvName
		};

		const founderId = formData.get('id') as string;
		const startupId = formData.get('startupId') as string;
		const response = await fetch(`${env.BASE_API_URL}/startup/${startupId}/founders/${founderId}`, {
			method: 'PATCH',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(newFounderData)
		});

		if (!response.ok) {
			const error = await response.json();
			throw new Error('Failed to edit founder', { cause: error });
		}

		return { success: true };
	},

	delete: async ({ request }: RequestEvent): Promise<{ success: boolean }> => {
		const formData = await request.formData();

		const founderId = formData.get('id') as string;
		const startupId = formData.get('startupId') as string;

		const response = await fetch(`${env.BASE_API_URL}/startup/${startupId}/founders/${founderId}`, {
			method: 'DELETE'
		});

		if (!response.ok) {
			const error = await response.json();
			throw new Error('Failed to delete founder', { cause: error });
		}

		return { success: true };
	}
} satisfies Actions;
