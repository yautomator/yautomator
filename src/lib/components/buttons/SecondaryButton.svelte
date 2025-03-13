<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	interface SecondaryButtonProps extends HTMLButtonAttributes {
		children: Snippet;
	}

	let { children, ...nativeProps }: SecondaryButtonProps = $props();
</script>

<button {...nativeProps}>{@render children?.()}</button>

<style>
	button {
		background: none;
		border: 0.5px solid transparent;
		color: var(--main-text-color);
		border-radius: 4px;
		padding: 6px;
		font-size: 0.875rem;
		display: flex;
		place-items: center;
		font-size: 0.75rem;
		gap: 8px;
		transition: background 0.2s;
		font-weight: 500;

		&:hover {
			background: lch(9.8 3.2 272);
			border: 0.5px solid var(--border-color);

			:global(svg) {
				stroke: var(--main-text-color);
			}
		}

		:global(svg) {
			stroke: var(--secondary-text-color);
		}

		&:disabled {
			background: #008cea3f;
			border: 0.5px solid #0091ec3f;
			cursor: wait;
		}
	}
</style>
