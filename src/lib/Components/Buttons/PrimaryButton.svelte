<script lang="ts">
	let { children, ...props } = $props();
</script>

<button {...props}>{@render children?.()}</button>

<style>
	button {
		background: var(--primary-button-background-color);
		border: 0.5px solid var(--primary-button-hover-background-color);
		color: var(--main-text-color);
		border-radius: 4px;
		padding: 4px 8px 4px 8px;
		font-size: 0.875rem;
		display: flex;
		place-items: center;
		font-size: 0.75rem;
		gap: 8px;
		transition: background 0.2s;
		font-weight: 500;

		&:hover {
			background: var(--primary-button-hover-background-color);

			:global(svg) {
				stroke: var(--main-text-color);
			}
		}

		:global(svg) {
			stroke: var(--main-text-color);
		}
	}
</style>
