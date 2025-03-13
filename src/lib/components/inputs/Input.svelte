<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';

	let { ...nativeProps }: HTMLInputAttributes = $props();
</script>

<input type="text" {...nativeProps} />

<style>
	input {
		color-scheme: dark;

		padding: 12px;
		border: 1px solid var(--border-color);
		border-radius: 5px;
		background: var(--input-background-color);
		color: var(--main-text-color);
		outline: none;
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
