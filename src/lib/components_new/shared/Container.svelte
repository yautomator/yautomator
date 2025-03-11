<script lang="ts">
	import type { Snippet } from 'svelte';

	type ContainerProps = { children: Snippet };

	let { children }: ContainerProps = $props();
</script>

<div>
	{@render children?.()}
</div>

<style>
	div {
		background-color: lch(8.3 1.867 272);
		border: 1px solid lch(19.66 4.707 272);
		padding: 12px 16px;
		border-radius: 8px;
	}
</style>
