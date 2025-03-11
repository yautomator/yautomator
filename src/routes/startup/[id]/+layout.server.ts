import { env } from '$env/dynamic/private';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => {
	const response = await fetch(`${env.BASE_API_URL}/startup/`);

	const startups = await response.json();

	if (!response.ok) {
		throw new Error('Failed to load startups', { cause: startups });
	}

	return { startups };
};
