import type { Actions } from '@sveltejs/kit';

import { apply } from '$lib/components_new/apply-form/handler';

export const actions = { apply } satisfies Actions;
