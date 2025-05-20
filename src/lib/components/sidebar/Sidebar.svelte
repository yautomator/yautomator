<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
	}

	let { children }: Props = $props();
</script>

<aside class="border-r-1 border-border w-[68px] bg-[#1d1f1f]">
	<nav>
		<ul class="flex flex-col gap-1 items-center">
			{@render children()}
		</ul>
	</nav>
</aside>
