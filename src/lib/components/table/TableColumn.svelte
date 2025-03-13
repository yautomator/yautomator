<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLThAttributes } from 'svelte/elements';

	interface TableColumnProps extends HTMLThAttributes {
		children?: Snippet;
		width?: string;
	}

	let { children, width, ...nativeProps }: TableColumnProps = $props();
</script>

<th {...nativeProps} style:width>{@render children?.()}</th>

<style>
	th {
		font-weight: 450;
		text-align: left;

		&:first-child,
		&:last-child {
			padding-left: 12px;
			padding-right: 12px;
		}

		padding-top: 8px;
		padding-bottom: 8px;
		white-space: nowrap;
	}
</style>
