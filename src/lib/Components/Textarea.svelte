<script lang="ts">
	export let placeholder: string;
	export let value: string;
	export let required: boolean;
</script>

<textarea {placeholder} bind:value {required}></textarea>

<style>
	textarea {
		padding: 0.65em;
		flex-grow: 1;
		border-radius: 5px;
		background-color: var(--input-background-color);
		border: 1px solid var(--border-color);
		box-shadow:
			lch(0 0 0 / 0.06) 0px 4px 4px -1px,
			lch(0 0 0 / 0.12) 0px 1px 1px 0px;
		color: var(--main-text-color);
		outline: none;
		resize: none;
	}
</style>
