<script lang="ts">
	import { enhance } from '$app/forms';
	import Breadcrumb from '$lib/components/Breadcrumb.svelte';
	import PrimaryButton from '$lib/components/buttons/PrimaryButton.svelte';
	import SelectedStartupIcon from '$lib/components/icons/SelectedStartupIcon.svelte';
	import FileUpload from '$lib/components/inputs/FileUpload.svelte';
	import Input from '$lib/components/inputs/Input.svelte';
	import { layout } from '$lib/states/layout.svelte';
	import type { SubmitFunction } from '@sveltejs/kit';
	import NProgress from 'nprogress';

	let isLoading = $state(false);

	const handleUpdateStartupResponse: SubmitFunction = () => {
		isLoading = true;
		NProgress.start();

		return async ({ result, update }) => {
			if (result.type === 'success') {
				await update({ reset: false });
				layout.selectedStartup = result.data?.startup;
			} else {
				alert('Failed to update startup information. Please try again.');
			}

			NProgress.done();
			isLoading = false;
		};
	};
</script>

<header>
	<Breadcrumb>
		{#snippet base()}
			<SelectedStartupIcon />
		{/snippet}

		{#snippet current()}
			<span>Media & Links</span>
		{/snippet}
	</Breadcrumb>
</header>

<main>
	<form method="POST" enctype="multipart/form-data" use:enhance={handleUpdateStartupResponse}>
		<h1>Media & Links</h1>

		<input type="hidden" name="id" value={layout.selectedStartup?._id} />

		<label>
			Website URL
			<small>Your official website or landing page</small>
			<Input
				type="url"
				placeholder="https://www.example.com"
				name="websiteUrl"
				value={layout.selectedStartup?.websiteUrl}
			/>
		</label>
		<label>
			Pitch Deck

			<FileUpload
				placeholder="Pitch Deck"
				name="pitchDeck"
				selectedFileName={layout.selectedStartup?.pitchDeckName}
			/>
		</label>

		<PrimaryButton type="submit" disabled={isLoading}>
			<span>Save information</span>
		</PrimaryButton>
	</form>
</main>

<style>
	main {
		grid-area: main;
		overflow: auto;
		display: flex;
		justify-content: center;
		padding: 2rem;

		form {
			width: 100%;
			max-width: 800px;
			display: flex;
			flex-direction: column;
			gap: 24px;

			h1 {
				font-size: 1.2rem;
				font-weight: 500;
				margin-bottom: 12px;
			}

			> :global(button) {
				margin-left: auto;
			}

			label {
				font-weight: 450;
				width: 100%;
				font-size: 0.8125rem;
				color: var(--main-text-color);

				display: flex;
				flex-direction: column;
				gap: 6px;

				small {
					font-size: 0.75rem;
					color: var(--secondary-text-color);
				}
			}
		}
	}

	header {
		grid-area: header;
		border-bottom: 0.5px solid var(--border-color);
		height: 40px;
		display: flex;
		justify-content: space-between;
		padding: 8px 12px;
	}
</style>
