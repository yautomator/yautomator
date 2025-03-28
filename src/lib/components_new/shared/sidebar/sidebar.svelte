<script lang="ts">
	import type { Snippet } from 'svelte';

	type SidebarProps = {
		children: Snippet;
	};

	let { children }: SidebarProps = $props();
</script>

<aside>
	{@render children?.()}
</aside>

<style>
	aside {
		grid-area: sidebar;
		border-right: 1px solid var(--border-color);
		display: flex;
		flex-direction: column;
		background-color: var(--sidebar-background-color);
	}
</style>
