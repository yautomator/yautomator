<script lang="ts">
	type TextareaProps = {
		value?: string;
		required?: boolean;
		name: string;
		placeholder: string;
	};

	let { value = $bindable(), ...props }: TextareaProps = $props();
</script>

<textarea {...props} bind:value></textarea>

<style>
	textarea {
		width: 100%;
		padding: 12px;
		border: 1px solid var(--border-color);
		border-radius: 4px;
		background: var(--input-background-color);
		color: var(--main-text-color);
		outline: none;
		transition: all 0.2s;
		resize: none;
		font-size: 0.8125rem;
	}
</style>
