// import { env } from '$env/dynamic/private';
import type { PageServerLoad } from './startup/founders/$types';

export const load: PageServerLoad = async () => {
	// const startupsResponse = await fetch(`${env.BASE_API_URL}/startup/`);
	// const organizationsResponse = await fetch(`${env.BASE_API_URL}/organizations/`);

	// const startups = await startupsResponse.json();
	// const organizations = await organizationsResponse.json();

	// if (!startupsResponse.ok) {
	// 	throw new Error('Failed to load startups', { cause: [] });
	// }

	// if (!organizationsResponse.ok) {
	// 	throw new Error('Failed to load organizations', { cause: [] });
	// }

	return { startups: [], organizations: [] };
};
