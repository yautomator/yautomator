<script lang="ts">
	import type { Snippet } from 'svelte';

	type SidebarProps = { children: Snippet };

	let { children }: SidebarProps = $props();
</script>

<nav>
	{@render children()}
</nav>

<style>
	nav {
		grid-area: leftbar;
		height: 100vh;
		position: sticky;
		top: 0;
		overflow: auto;

		display: flex;
		flex-direction: column;
	}
</style>
