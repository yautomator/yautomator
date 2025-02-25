<script lang="ts">
	type InputProps = {
		value?: string;
		required?: boolean;
		name: string;
		type: string;
		placeholder: string;
	};

	let { value = $bindable(), ...props }: InputProps = $props();
</script>

<input {...props} autocomplete="off" bind:value />

<style>
	input {
		width: 100%;
		padding: 12px;
		border: 1px solid var(--border-color);
		border-radius: 4px;
		background: var(--input-background-color);
		color: var(--main-text-color);
		outline: none;
		transition: all 0.2s;
		font-size: 0.8125rem;

		&:-webkit-autofill,
		&:-webkit-autofill:hover,
		&:-webkit-autofill:focus,
		&:-webkit-autofill:active {
			-webkit-background-clip: text;
			-webkit-text-fill-color: var(--main-text-color);
			box-shadow: inset 0 0 20px 20px var(--input-background-color);
		}
	}
</style>
