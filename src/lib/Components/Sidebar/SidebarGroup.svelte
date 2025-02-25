<script lang="ts">
	import type { Snippet } from 'svelte';
	import SidebarList from './SidebarList.svelte';

	let { children, label }: { children?: Snippet; label: string } = $props();

	let isOpen = $state(true);
</script>

<span>
	{label}
</span>

<SidebarList>
	{@render children?.()}
</SidebarList>

<style>
	span {
		padding: 16px 0px 6px 6px;
		color: var(--secondary-text-color);
		font-size: 0.75rem;
		font-weight: 500;
	}
</style>
