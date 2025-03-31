<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLLiAttributes } from 'svelte/elements';

	interface SidebarItemProps extends HTMLLiAttributes {
		children: Snippet;
	}

	let { children, ...props }: SidebarItemProps = $props();
</script>

<li {...props}>
	{@render children?.()}
</li>
