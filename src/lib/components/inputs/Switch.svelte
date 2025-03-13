<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';

	let { ...nativeProps }: HTMLInputAttributes = $props();
</script>

<label>
	<input type="checkbox" {...nativeProps} hidden />
	<span></span>
</label>

<style>
	label {
		position: relative;
		display: inline-block;
		width: 40px;
		height: 22px;
	}

	span {
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: var(--border-color);
		transition: 0.2s;
		border-radius: 22px;
	}

	span:before {
		position: absolute;
		content: '';
		height: 16px;
		width: 16px;
		left: 3px;
		bottom: 3px;
		background-color: var(--main-text-color);
		transition: 0.2s;
		border-radius: 50%;
	}

	input:checked + span {
		background-color: var(--primary-button-background-color);
	}

	input:checked + span:before {
		transform: translateX(16px);
	}
</style>
