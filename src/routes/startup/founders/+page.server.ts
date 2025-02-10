import type { Actions } from '@sveltejs/kit';
import { uploadFileToS3 } from '$lib/Utils/s3';

type CreateFounderDto = {
	name: string;
	surname: string;
	role: string;
	email: string;
	summary: string;
	countryOfLiving: string;
	linkedinProfileUrl: string;
	cvUrl: string | null;
};

type NewFounderDto = CreateFounderDto & {
	id: string;
};

export const actions = {
	default: async ({ request }): Promise<{ newFounder: NewFounderDto }> => {
		console.log('Handling new founder action');

		const formData = await request.formData();
		const cvFile = formData.get('cv') as File | null;

		let cvUrl: string | null = null;

		if (cvFile && cvFile instanceof File && cvFile.size > 0) {
			cvUrl = await uploadFileToS3(cvFile, 'yautomator-cv');
		}

		const newFounderData: CreateFounderDto = {
			name: formData.get('name') as string,
			surname: formData.get('surname') as string,
			role: formData.get('role') as string,
			countryOfLiving: formData.get('countryOfLiving') as string,
			linkedinProfileUrl: formData.get('linkedinProfileUrl') as string,
			email: formData.get('email') as string,
			summary: formData.get('summary') as string,
			cvUrl: cvUrl
		};

		const newFounder: NewFounderDto = {
			...newFounderData,
			id: '123'
		};

		return { newFounder };
	}
} satisfies Actions;
