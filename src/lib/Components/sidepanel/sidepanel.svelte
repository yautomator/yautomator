<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
	}

	let { children }: Props = $props();
</script>

<div class="border-r-1 border-border flex flex-col gap-1 w-1/2">
	{@render children()}
</div>
