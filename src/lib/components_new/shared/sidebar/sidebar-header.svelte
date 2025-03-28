<script lang="ts">
	import type { Snippet } from 'svelte';

	type SidebarHeaderProps = {
		children: Snippet;
	};

	const { children }: SidebarHeaderProps = $props();
</script>

<div>
	{@render children()}
</div>

<style>
	div {
		display: flex;
		place-items: center;
		padding-inline: var(--sidebar-header-padding);
		height: var(--sidebar-header-height);
		justify-content: space-between;
		border-bottom: 1px solid var(--border-color);
	}
</style>
