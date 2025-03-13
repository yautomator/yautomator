import type { Founder, Startup } from '$lib/utils/common';

type LayoutType = {
	selectedFounder: Founder | null;
	selectedStartup: Startup | null;
};

export const layout = $state<LayoutType>({
	selectedFounder: null,
	selectedStartup: null
});
