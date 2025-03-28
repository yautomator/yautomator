<script lang="ts">
	import type { Snippet } from 'svelte';

	type SidebarGroupProps = {
		label: string;
		children: Snippet;
	};

	let { label, children }: SidebarGroupProps = $props();
</script>

<div>
	<h4>{label}</h4>
	{@render children?.()}
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		gap: var(--sidebar-group-items-gap);
		padding: var(--sidebar-group-padding);

		h4 {
			font-size: var(--sidebar-group-label-font-size);
			padding: var(--sidebar-group-label-padding);
			color: var(--sidebar-group-label-color);
		}
	}
</style>
