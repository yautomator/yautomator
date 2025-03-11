<script lang="ts">
	import type { Snippet } from 'svelte';

	type SidebarHeaderProps = { children?: Snippet };

	let { children }: SidebarHeaderProps = $props();
</script>

<section>
	{@render children?.()}
</section>

<style>
	section {
		padding: 8px;
	}
</style>
