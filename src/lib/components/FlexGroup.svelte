<script lang="ts">
	let { children } = $props();
</script>

<div>
	{@render children?.()}
</div>

<style>
	div {
		display: flex;
		gap: 12px;
	}

	@media (max-width: 999px) {
		div {
			flex-direction: column;
		}
	}
</style>
