<script lang="ts">
	let { children }: { children?: any } = $props();
</script>

<tr>
	{@render children?.()}
</tr>

<style>
	tr {
		cursor: pointer;
		width: 100%;

		&:hover {
			background-color: #151618;
		}
	}
</style>
