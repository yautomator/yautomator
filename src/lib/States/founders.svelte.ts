import type { Founder as FounderType } from '$lib/Common';

export const emptyFounder: FounderType = {
	name: '',
	surname: '',
	linkedinProfileUrl: '',
	countryOfLiving: '',
	email: '',
	summary: '',
	role: '',
	cv: null
};

export const founders = $state<FounderType[]>([
	{
		name: 'Emmanouil',
		surname: 'Vachlas',
		linkedinProfileUrl: 'https://linkedin.com/in/emmanouil',
		countryOfLiving: 'Greece',
		email: 'emmanouil@example.com',
		summary: 'Full stack developer with 5 years of experience',
		role: 'Engineer',
		cv: null
	},
	{
		name: 'Lila',
		surname: 'Vachlas Soldatou',
		linkedinProfileUrl: 'https://linkedin.com/in/lila',
		countryOfLiving: 'Greece',
		email: 'lila@example.com',
		summary: 'Product designer with expertise in UI/UX',
		role: 'Engineer',
		cv: null
	},
	{
		name: 'Gustavo',
		surname: 'Barreira Bordin',
		linkedinProfileUrl: 'https://linkedin.com/in/gustavo',
		countryOfLiving: 'Brazil',
		email: 'gustavo@example.com',
		summary: 'Backend developer specialized in distributed systems',
		role: 'Engineer',
		cv: null
	}
]);
