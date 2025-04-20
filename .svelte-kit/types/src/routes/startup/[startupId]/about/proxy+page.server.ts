// @ts-nocheck
import { env } from '$env/dynamic/private';
import type { Actions } from './$types';

type CreateStartupDto = {
	name: string;
	description: string;
	foundedDate: string;
	location: string;
	incorporation: boolean;
};

export const actions = {
	default: async ({ request }: import('./$types').RequestEvent) => {
		const formData = await request.formData();
		const incorporation = formData.get('incorporation');

		const newStartupData: CreateStartupDto = {
			name: formData.get('name') as string,
			description: formData.get('description') as string,
			foundedDate: formData.get('foundedDate') as string,
			location: formData.get('location') as string,
			incorporation: incorporation === 'on'
		};

		const startupId = formData.get('id') as string;

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
};
;null as any as Actions;