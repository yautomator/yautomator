<script lang="ts">
	import { FileUp } from 'lucide-svelte';
	import type { HTMLInputAttributes } from 'svelte/elements';

	interface FileUploadProps extends HTMLInputAttributes {
		selectedFileName?: string | null;
	}

	let { selectedFileName = null, ...nativeProps }: FileUploadProps = $props();

	const handleChange = (e: Event) => {
		const files = (e.target as HTMLInputElement).files;

		if (files && files.length > 0) {
			const CURRENT_FILE_INDEX = 0;
			selectedFileName = files[CURRENT_FILE_INDEX].name;
		}
	};
</script>

<div>
	<input type="file" {...nativeProps} hidden onchange={handleChange} />
	<FileUp size={20} />

	<span class:fileSelected={selectedFileName}>
		{selectedFileName ?? 'Click to browse'}
	</span>
</div>

<style>
	div {
		border: 1px dashed var(--border-color);
		border-radius: 5px;
		padding: 18px;

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

		span.fileSelected {
			color: var(--main-text-color);
		}
	}
</style>
