<script lang="ts">
	import type { Snippet } from 'svelte';

	type SidebarBodyProps = { children?: Snippet };

	let { children }: SidebarBodyProps = $props();
</script>

<section>
	<ul>
		{@render children?.()}
	</ul>
</section>

<style>
	section {
		padding: 14px;
	}
</style>
