<script lang="ts">
	import type { Snippet } from 'svelte';

	type SidebarProps = { header?: Snippet; body?: Snippet; footer?: Snippet };

	let { header, body, footer }: SidebarProps = $props();
</script>

<nav>
	<div>
		{@render header?.()}
		{@render body?.()}
	</div>

	{@render footer?.()}
</nav>

<style>
	div {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}
	nav {
		grid-area: leftbar;
		height: 100vh;
		padding: 14px;
		position: sticky;
		top: 0;
		overflow: auto;

		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
</style>
