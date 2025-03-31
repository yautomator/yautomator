<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	interface SidebarGroupLabelProps extends HTMLAttributes<HTMLHeadingElement> {
		children: Snippet;
	}

	let { children, ...props }: SidebarGroupLabelProps = $props();
</script>

<h4 {...props}>
	{@render children?.()}
</h4>
