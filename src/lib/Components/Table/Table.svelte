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
		font-size: 1.3rem;

		thead {
			height: 30px;
			font-size: 1.2rem;
		}
	}
</style>
