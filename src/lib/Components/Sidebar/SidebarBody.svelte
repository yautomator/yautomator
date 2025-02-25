<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children?: Snippet } = $props();
</script>

<ul>
	{@render children?.()}
</ul>

<style>
	ul {
		list-style: none;
		padding: 14px;
	}
</style>
