<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLTableAttributes } from 'svelte/elements';

	interface TableProps extends HTMLTableAttributes {
		columns: Snippet;
		rows: Snippet;
	}

	let { columns, rows, ...nativeProps }: TableProps = $props();
</script>

<table {...nativeProps}>
	<thead>
		<tr>
			{@render columns()}
		</tr>
	</thead>
	<tbody>
		{@render rows()}
	</tbody>
</table>

<style>
	table {
		width: 100%;
		border-collapse: collapse;

		thead {
			height: 20px;
			font-size: 0.75rem;
			color: var(--secondary-text-color);
			border-bottom: 0.5px solid var(--border-color);
		}
	}
</style>
