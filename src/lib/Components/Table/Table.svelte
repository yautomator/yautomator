<script lang="ts">
	let { data, header, body } = $props();
</script>

<table>
	<thead>
		<tr>{@render header()}</tr>
	</thead>
	<tbody>
		{@render body()}
	</tbody>
</table>

<style>
	table {
		width: 100%;
		border-collapse: collapse;

		thead {
			height: 30px;
		}
	}
</style>
