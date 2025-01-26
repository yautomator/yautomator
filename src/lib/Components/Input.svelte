<script lang="ts">
	export let placeholder: string;
	export let value: string;
	export let required: boolean;
</script>

<input type="text" {placeholder} bind:value {required} />

<style>
	input {
		flex-grow: 1;
		padding: 0.65em;
		border-radius: 5px;
		background-color: var(--input-background-color);
		border: 1px solid var(--border-color);
		box-shadow:
			lch(0 0 0 / 0.06) 0px 4px 4px -1px,
			lch(0 0 0 / 0.12) 0px 1px 1px 0px;
		outline: none;
		color: var(--main-text-color);
	}
</style>
