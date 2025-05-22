<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
	}

	let { children }: Props = $props();
</script>

<h1 class="text-[1.4rem] font-medium text-gray-100 py-[13px] px-[20px]">
	{@render children()}
</h1>
