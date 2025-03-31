<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	interface SidebarBodyProps extends HTMLAttributes<HTMLElement> {
		children?: Snippet;
	}

	let { children, ...props }: SidebarBodyProps = $props();
</script>

<nav {...props}>
	{@render children?.()}
</nav>
