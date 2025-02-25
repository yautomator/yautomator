<script lang="ts">
	import { TableAlignment } from '$lib/Common';

	let { children, align = TableAlignment.LEFT }: { children?: any; align?: TableAlignment } =
		$props();
</script>

<td {align}>
	{@render children?.()}
</td>

<style>
	td {
		height: 48px;
		white-space: nowrap;

		padding-left: 30px;
		font-size: 0.8125rem;

		&:last-child {
			padding-right: 30px;
		}
	}
</style>
