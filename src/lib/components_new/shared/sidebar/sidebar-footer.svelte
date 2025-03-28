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
		padding-inline: var(--sidebar-footer-padding);
		height: var(--sidebar-footer-height);
		justify-content: space-between;
		border-top: 1px solid var(--border-color);
		margin-top: auto;
	}
</style>
