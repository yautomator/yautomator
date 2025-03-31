<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	interface SidebarItemListProps extends HTMLAttributes<HTMLUListElement> {
		children: Snippet;
	}

	let { children, ...props }: SidebarItemListProps = $props();
</script>

<ul {...props}>
	{@render children?.()}
</ul>
