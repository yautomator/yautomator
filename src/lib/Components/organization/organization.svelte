<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
	}

	let { children }: Props = $props();
</script>

<ul class="overflow-y-auto flex flex-col gap-1">
	{@render children()}
</ul>
