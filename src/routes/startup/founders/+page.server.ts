import type { Actions } from '@sveltejs/kit';
import type { Founder } from '$lib/Common';

export const actions: Actions = {
	default: async ({ request }): Promise<{ success: boolean }> => {
		const formData = await request.formData();

		const founderData: Founder = {
			name: formData.get('name') as string,
			surname: formData.get('surname') as string,
			role: formData.get('role') as string,
			countryOfLiving: formData.get('countryOfLiving') as string,
			linkedinProfileUrl: formData.get('linkedinProfileUrl') as string,
			email: formData.get('email') as string,
			summary: formData.get('summary') as string,
			cv: formData.get('cv') as File | null
		};

		return { success: true };
	}
};
