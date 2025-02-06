import type { Founder } from '$lib/Common';

export const layout = $state({
	showAddFounderModal: false,
	selectedFounder: null as Founder | null
});
