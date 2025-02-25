<script lang="ts">
	import { ChevronRight } from 'lucide-svelte';

	let { base, current } = $props();
</script>

<div>
	{@render base?.()}
	<ChevronRight size={14} />
	{@render current?.()}
</div>

<style>
	div {
		display: flex;
		place-items: center;
		gap: 5px;
		font-size: 0.8125rem;

		:global(svg) {
			stroke: var(--secondary-text-color);
		}
	}
</style>
