<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	interface SidebarFooterProps extends HTMLAttributes<HTMLDivElement> {
		children: Snippet;
	}

	const { children, ...props }: SidebarFooterProps = $props();
</script>

<div {...props}>
	{@render children()}
</div>
