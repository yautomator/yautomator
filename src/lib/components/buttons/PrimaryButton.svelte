<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	interface PrimaryButtonProps extends HTMLButtonAttributes {
		children: Snippet;
	}

	let { children, ...nativeProps }: PrimaryButtonProps = $props();
</script>

<button {...nativeProps}>{@render children?.()}</button>

<style>
	button {
		width: fit-content;
		background: var(--primary-button-background-color);
		border: 0.5px solid var(--primary-button-hover-background-color);
		border-radius: 4px;
		transition: background 0.2s;
		color: var(--main-text-color);
		padding: 8px;

		display: flex;
		place-items: center;
		gap: 8px;
		font-size: 0.75rem;
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

		&:disabled {
			background: #008cea3f;
			border: 0.5px solid #0091ec3f;
			cursor: wait;
		}
	}
</style>
