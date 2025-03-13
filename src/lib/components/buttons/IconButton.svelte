<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	interface IconButtonProps extends HTMLButtonAttributes {
		children: Snippet;
	}

	let { children, ...nativeProps }: IconButtonProps = $props();
</script>

<button {...nativeProps}>{@render children?.()}</button>

<style>
	button {
		border: 0.5px solid transparent;
		color: var(--main-text-color);
		display: flex;
		place-items: center;
		gap: 8px;
		justify-content: center;
		border-radius: 4px;
		background: none;
		transition: background 0.2s;
		height: 100%;
		padding: 6px;

		&:hover {
			background-color: var(--secondary-button-background-color);

			:global(svg) {
				stroke: white;
			}
		}

		&:disabled {
			background: none;
			cursor: not-allowed;
		}
	}
</style>
