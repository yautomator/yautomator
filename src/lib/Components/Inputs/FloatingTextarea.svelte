<script lang="ts">
	export let value: string;
	export let label: string;
	export let required: boolean = false;
	export let name: string;

	$: hasContent = value?.length > 0;
</script>

<div>
	<textarea {name} {required} bind:value id={name}></textarea>
	<label class:floating={hasContent} for={name}>{label}</label>
</div>

<style>
	div {
		position: relative;
	}

	textarea {
		width: 100%;
		padding: 12px;
		border: 1px solid var(--border-color);
		border-radius: 4px;
		background: var(--input-background-color);
		font-size: 0.8125rem;
		color: var(--main-text-color);
		outline: none;
		transition: all 0.2s;
		resize: none;
	}

	label {
		position: absolute;
		left: 12px;
		top: 18px;
		transform: translateY(-50%);
		color: var(--secondary-text-color);
		font-size: 0.8125rem;
		transition: all 0.2s;
		pointer-events: none;
	}

	textarea:focus ~ label,
	label.floating {
		top: 0;
		font-size: 0.75rem;
	}
</style>
