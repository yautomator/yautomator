<script lang="ts">
	import { Icons } from '$lib/Common';
	import Icon from './Icon.svelte';
</script>

<label for="cv">
	<input type="file" id="cv" hidden />
	<Icon src={Icons.Attachment} size="20px"></Icon>
	<span>Upload CV</span>
</label>

<style>
	label {
		border: 1px dashed var(--border-color);
		border-radius: 5px;
		cursor: pointer;
		padding: 10px;

		display: flex;
		justify-content: center;
		flex-shrink: 0;
		gap: 10px;
		place-items: center;
		font-size: 0.8125rem;
	}

	input::file-selector-button {
		background: none;
		border: none;
		color: white;
	}
</style>
