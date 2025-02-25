<script lang="ts">
	type ButtonProps = {
		children?: any;
		type?: 'button' | 'submit';
		form?: string;
		onclick?: () => void;
		disabled?: boolean;
	};

	let { children, type, form, onclick, disabled }: ButtonProps = $props();
</script>

<button {onclick} {type} {form} {disabled}>
	{@render children?.()}
</button>

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
		padding: 8px;

		box-shadow:
			lch(0 0 0 / 0.06) 0px 4px 4px -1px,
			lch(0 0 0 / 0.12) 0px 1px 1px;

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
