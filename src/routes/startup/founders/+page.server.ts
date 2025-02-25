import { uploadFileToS3 } from "$lib/Utils/s3";
import type { Actions, RequestEvent } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

type CreateFounderDto = {
	firstName: string;
	lastName: string;
	role: string;
	email: string;
	summary: string;
	countryOfLiving: string;
	linkedinProfileUrl: string;
	cvUrl: string | null;
}


export const load: PageServerLoad = async () => {
	const res = await fetch(
		'https://api.yautomator.com/startup/67ae0c3dada511cee0f5613a/founders/'
	)
	const founders = await res.json();
	return { founders };
};

export const actions = {
	create: async ({ request }: RequestEvent): Promise<{ success: boolean }> => {
		console.log('Handling new founder action');

		const formData = await request.formData();
		console.log(formData);
		const cvFile = formData.get('cv') as File | null;

		let cvUrl: string | null = null;

		if (cvFile && cvFile instanceof File && cvFile.size > 0) {
			cvUrl = await uploadFileToS3(cvFile, 'yautomator-cv');
		}

		const newFounderData: CreateFounderDto = {
			firstName: formData.get('firstNameX') as string,
			lastName: formData.get('lastNameX') as string,
			role: formData.get('roleX') as string,
			countryOfLiving: formData.get('countryOfLivingX') as string,
			linkedinProfileUrl: formData.get('linkedinProfileUrlX') as string,
			email: formData.get('emailX') as string,
			summary: formData.get('summaryX') as string,
			cvUrl: cvUrl
		};

		const response = await fetch('https://api.yautomator.com/startup/67ae0c3dada511cee0f5613a/founders/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newFounderData)
		});


		console.log(await response.json());

		if (!response.ok) {
			throw new Error('Failed to create new founder');
		}

		return { success: true };
	},

	edit: async (): Promise<{ success: boolean }> => {
		return { success: true };
	},

	delete: async ({ request }: RequestEvent): Promise<{ success: boolean }> => {
		console.log('Handling delete founder action');

		const formData = await request.formData();
		const founderId = formData.get('id') as string;

		console.log(founderId);
		const response = await fetch(`https://api.yautomator.com/startup/67ae0c3dada511cee0f5613a/founders/${founderId}`, {
			method: 'DELETE'
		});

		console.log(response);
		if (!response.ok) {
			throw new Error('Failed to delete founder');
		}

		return { success: true };
	}

} satisfies Actions;