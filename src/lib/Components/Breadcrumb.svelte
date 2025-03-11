<script lang="ts">
	import { ChevronRight } from 'lucide-svelte';
	import type { Snippet } from 'svelte';

	type BreadcrumbProps = {
		base: Snippet;
		current: Snippet;
	};

	let { base, current }: BreadcrumbProps = $props();
</script>

<div>
	{@render base?.()}
	<ChevronRight size={14} />
	{@render current?.()}
</div>

<style>
	div {
		display: flex;
		gap: 4px;
		place-items: center;

		font-size: 0.8125rem;
		color: var(--main-text-color);
		font-weight: 500;

		:global(svg) {
			stroke: var(--secondary-text-color);
		}
	}
</style>
