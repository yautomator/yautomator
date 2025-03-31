<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	interface SidebarGroupProps extends HTMLAttributes<HTMLDivElement> {
		children: Snippet;
	}

	let { children, ...props }: SidebarGroupProps = $props();
</script>

<div {...props}>
	{@render children?.()}
</div>
