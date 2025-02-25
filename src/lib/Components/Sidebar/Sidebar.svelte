<script lang="ts">
	import type { Snippet } from 'svelte';

	type SidebarProps = { header?: Snippet; body?: Snippet; footer?: Snippet };

	let { header, body, footer }: SidebarProps = $props();
</script>

<nav>
	<section>
		{@render header?.()}
	</section>

	<section>
		{@render body?.()}
	</section>

	<section>
		{@render footer?.()}
	</section>
</nav>

<style>
	nav {
		grid-area: leftbar;
		height: 100vh;
		padding: 14px;
		position: sticky;
		top: 0;
		overflow: auto;

		display: flex;
		flex-direction: column;
		gap: 14px;

		section {
			display: flex;
			flex-direction: column;
			gap: 14px;
		}

		section:last-child {
			margin-top: auto;
		}
	}
</style>
