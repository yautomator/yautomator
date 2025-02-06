<script lang="ts">
	import { ChevronRight } from 'lucide-svelte';

	let { base, current } = $props();
</script>

<div>
	{@render base?.()}
	<ChevronRight size={10} />
	{@render current?.()}
</div>

<style>
	div {
		display: flex;
		place-items: center;
		gap: 5px;
		font-size: 0.75rem;
	}
</style>
