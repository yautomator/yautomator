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
		color: var(--main-text-color);
		display: flex;
		place-items: center;
		justify-content: space-between;
		border-radius: 4px;
		transition: background 0.2s;
		padding: 5px;
	}
</style>
