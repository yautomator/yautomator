<script lang="ts">
	import type { Snippet } from 'svelte';

	type SidebarBodyProps = { children?: Snippet };

	let { children }: SidebarBodyProps = $props();
</script>

<nav>
	<ul>
		{@render children?.()}
	</ul>
</nav>

<style>
	ul {
		display: flex;
		flex-direction: column;
		gap: var(--sidebar-groups-gap);
	}
</style>
