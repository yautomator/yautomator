<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAnchorAttributes } from 'svelte/elements';

	interface SidebarItemProps extends HTMLAnchorAttributes {
		children: Snippet;
		active?: boolean;
	}

	let { children, active }: SidebarItemProps = $props();
</script>

<li class:active>
	{@render children?.()}
</li>

<style>
	li {
		border-radius: var(--sidebar-group-item-border-radius);
		padding: var(--sidebar-group-item-padding);
		display: flex;
		place-items: center;
		gap: var(--sidebar-group-item-inline-gap);
		transition: background-color 0.1s ease-in;
		cursor: pointer;

		&:hover {
			background-color: var(--sidebar-group-item-hover-background-color);
		}

		&.active {
			background-color: var(--sidebar-group-item-active-background-color);
		}
	}
</style>
