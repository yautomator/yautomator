<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	interface SidebarProps extends HTMLAttributes<HTMLElement> {
		children: Snippet;
	}

	let { children, ...props }: SidebarProps = $props();
</script>

<aside {...props}>
	{@render children?.()}
</aside>
