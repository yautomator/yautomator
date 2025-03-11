<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLTdAttributes } from 'svelte/elements';

	interface TableRowDataProps extends HTMLTdAttributes {
		children?: Snippet;
	}

	let { children, ...nativeProps }: TableRowDataProps = $props();
</script>

<td {...nativeProps}>
	<span>{@render children?.()}</span>
</td>

<style>
	td {
		position: relative;
		padding: 12px;
		font-size: 0.8125rem;

		&::before {
			content: '&nbsp;';
			visibility: hidden;
		}

		span {
			position: absolute;
			left: 12px;
			right: 0;
			white-space: nowrap;
			overflow: hidden;
		}
	}
</style>
