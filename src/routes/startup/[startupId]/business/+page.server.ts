import { env } from '$env/dynamic/private';
import type { Actions } from './$types';

type CreateStartupDto = {
	industry: string;
	teamSize: number;
	fundingStage: string;
	revenue: number;
	number_of_users: number;
	tagline: string;
};

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();

		const newStartupData: CreateStartupDto = {
			industry: formData.get('industry') as string,
			teamSize: parseInt(formData.get('teamSize') as string),
			fundingStage: formData.get('fundingStage') as string,
			revenue: parseInt(formData.get('revenue') as string),
			number_of_users: parseInt(formData.get('number_of_users') as string),
			tagline: formData.get('tagline') as string
		};

		const startupId = formData.get('id') as string;

		const response = await fetch(`${env.BASE_API_URL}/startup/${startupId}`, {
			method: 'PATCH',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(newStartupData)
		});

		console.log(JSON.stringify(newStartupData));
		const startup = await response.json();

		if (!response.ok) {
			throw new Error('Failed to update startup information', { cause: startup });
		}

		return { startup };
	}
};
