<script lang="ts">
	export let label: string;
	export let color: string;
</script>

<div class="label">
	<div style:background-color={color}></div>
	<span>{label}</span>
</div>

<style>
	.label {
		padding: 0px 8px;
		flex-grow: 0;
		background-color: var(--main-background-color);
		display: flex;
		place-items: center;
		justify-content: space-between;
		gap: 10px;
		border: 0.5px solid var(--border-color);
		border-radius: 5px;
		height: 100%;

		div {
			width: 9px;
			height: 9px;
			border-radius: 50%;
			flex-shrink: 0;
		}

		span {
			text-wrap: nowrap;
		}
	}
</style>
