<script lang="ts">
	import { FileUp } from 'lucide-svelte';
	import LucideIcon from '../Icons/LucideIcon.svelte';

	export let name: string;

	let isDragging = false;
	let fileInput: HTMLInputElement;
	let fileName: string;

	const handleDragEnter = (e: DragEvent) => {
		e.preventDefault();
		isDragging = true;
	};

	const handleDragLeave = (e: DragEvent) => {
		e.preventDefault();
		isDragging = false;
	};

	const handleDrop = (e: DragEvent) => {
		e.preventDefault();
		isDragging = false;
		const files = e.dataTransfer?.files;
		if (files && files.length > 0) {
			fileInput.files = files;
			fileName = files[0].name;
		}
	};

	const handleClick = () => {
		fileInput.click();
	};

	const handleKeydown = (e: KeyboardEvent) => {
		if (e.key === 'Enter') handleClick();
	};

	const handleChange = (e: Event) => {
		const files = (e.target as HTMLInputElement).files;
		if (files && files.length > 0) {
			fileName = files[0].name;
		}
	};
</script>

<div
	class:isDragging
	on:dragenter={handleDragEnter}
	on:dragover|preventDefault
	on:dragleave={handleDragLeave}
	on:drop={handleDrop}
	on:click={handleClick}
	on:keydown={handleKeydown}
	tabindex="0"
	role="button"
>
	<input
		type="file"
		{name}
		id={name}
		bind:this={fileInput}
		on:change={handleChange}
		hidden
		accept=".pdf, .doc, .docx"
	/>
	<LucideIcon icon={FileUp} size={20} />
	<label for={name} class="hint">{fileName || 'Drop your CV or click to browse'}</label>
</div>

<style>
	div {
		border: 1px dashed var(--border-color);
		border-radius: 4px;
		padding: 24px;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 12px;
		cursor: pointer;
		transition: all 0.2s;
		background: var(--input-background-color);

		&:hover {
			border-color: var(--file-input-hover-border-color);
			background: var(--file-input-hover-background-color);
		}

		label {
			color: var(--secondary-text-color);
			pointer-events: none;
			font-size: 0.8125rem;
		}
	}

	.isDragging {
		border-color: var(--primary-color);
		background: var(--primary-color-hover);
	}
</style>
