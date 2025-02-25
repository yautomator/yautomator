<script lang="ts">
	let { children }: { children?: any } = $props();
</script>

<th>
	{@render children?.()}
</th>

<style>
	th {
		border-bottom: 0.5px solid var(--border-color);
		font-weight: 450;
		padding-left: 30px;
		color: #949597;
		text-align: left;
		font-size: 0.75rem;
	}
</style>
