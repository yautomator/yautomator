<script lang="ts">
	import type { HTMLTextareaAttributes } from 'svelte/elements';

	let { ...nativeProps }: HTMLTextareaAttributes = $props();
</script>

<textarea {...nativeProps}></textarea>

<style>
	textarea {
		padding: 12px;
		background: var(--input-background-color);
		outline: none;
		transition: all 0.2s;
		resize: none;

		font-size: 0.8125rem;
		color: var(--main-text-color);

		border: 1px solid var(--border-color);
		border-radius: 5px;
	}
</style>
