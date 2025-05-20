<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
	}

	let { children }: Props = $props();
</script>

<div class="flex gap-2 mx-[20px] mb-2">
	{@render children()}
</div>
