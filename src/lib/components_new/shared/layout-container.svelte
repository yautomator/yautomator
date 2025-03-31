<script lang="ts">
	import type { Snippet } from 'svelte';

	type LayoutContainerProps = {
		children: Snippet;
	};

	const { children }: LayoutContainerProps = $props();
</script>

<div class="h-screen flex bg-gray-950">
	{@render children()}
</div>
