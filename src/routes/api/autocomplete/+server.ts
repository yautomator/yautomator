import { json } from '@sveltejs/kit';

export async function POST({ request }) {
	const { organizationId } = await request.json();

	const response = await fetch(
		`https://api.yautomator.com/startup/67e432ea28a4acecbc029aca/organizations/${organizationId}/ai`,
		{
			method: 'POST',
			body: JSON.stringify({ organizationId })
		}
	);

	const data = await response.json();
	return json(data);
}
