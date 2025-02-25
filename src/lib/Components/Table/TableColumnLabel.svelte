<script lang="ts">
	let { children }: { children?: any } = $props();
</script>

<th>
	{@render children?.()}
</th>

<style>
	th {
		border-bottom: 0.5px solid var(--border-color);
		font-weight: 350;
		padding-left: 30px;
		color: #949597;
		text-align: left;
	}
</style>
