// @ts-nocheck
import { env } from '$env/dynamic/private';
import type { LayoutServerLoad } from './$types';

export const load = async () => {
	const startupsResponse = await fetch(`${env.BASE_API_URL}/startup/`);
	const organizationsResponse = await fetch(`${env.BASE_API_URL}/organizations/`);

	if (!startupsResponse.ok) {
		throw new Error('Failed to load startups', { cause: [] });
	}
	if (!organizationsResponse.ok) {
		throw new Error('Failed to load organizations', { cause: [] });
	}

	const startups = await startupsResponse.json();
	const organizations = await organizationsResponse.json();

	return { organizations, startups };
};
;null as any as LayoutServerLoad;