<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	interface TableRowProps extends HTMLButtonAttributes {
		children: Snippet;
		onclick?: () => void;
	}

	let { children, onclick }: TableRowProps = $props();
</script>

<tr {onclick}>
	{@render children?.()}
</tr>

<style>
	tr {
		height: 48px;
		cursor: pointer;

		&:hover {
			background-color: #151618;
		}
	}
</style>
