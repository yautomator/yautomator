<script lang="ts">
	import type { Snippet } from 'svelte';

	type SidebarProps = { children: Snippet };

	let { children }: SidebarProps = $props();
</script>

<nav class="">
	{@render children()}
</nav>
