<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	interface SidebarHeaderProps extends HTMLAttributes<HTMLDivElement> {
		children: Snippet;
	}

	const { children, ...props }: SidebarHeaderProps = $props();
</script>

<div {...props}>
	{@render children()}
</div>
