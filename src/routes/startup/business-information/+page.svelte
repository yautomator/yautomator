<script lang="ts">
	import { enhance } from '$app/forms';
	import Breadcrumb from '$lib/components/Breadcrumb.svelte';
	import PrimaryButton from '$lib/components/buttons/PrimaryButton.svelte';
	import FlexGroup from '$lib/components/FlexGroup.svelte';
	import SelectedStartupIcon from '$lib/components/icons/SelectedStartupIcon.svelte';
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
			<span>Business information</span>
		{/snippet}
	</Breadcrumb>
</header>

<main>
	<form method="POST" enctype="multipart/form-data" use:enhance={handleUpdateStartupResponse}>
		<h1>Business information</h1>

		<input type="hidden" name="id" value={layout.selectedStartup?._id} />

		<FlexGroup>
			<label>
				Industry
				<small>Sector your startup primarily operates in</small>
				<Input
					type="text"
					placeholder="FinTech, Healthcare, E-commerce"
					name="industry"
					value={layout.selectedStartup?.industry}
					required
				/>
			</label>
			<label>
				Team size
				<small>Number of full-time and part-time team members</small>
				<Input
					type="number"
					min={0}
					placeholder="5 full-time, 2 part-time"
					name="teamSize"
					value={layout.selectedStartup?.teamSize}
					required
				/>
			</label>
		</FlexGroup>
		<FlexGroup>
			<label>
				Funding stage
				<small>Current funding status and round</small>
				<Input
					type="text"
					placeholder="Pre-seed, Seed, Series A"
					name="fundingStage"
					value={layout.selectedStartup?.fundingStage}
					required
				/>
			</label>

			<label>
				Revenue
				<small>MRR or ARR revenue in dollars</small>
				<Input
					type="number"
					step="0.01"
					placeholder="2000"
					name="revenue"
					value={layout.selectedStartup?.revenue}
					required
				/>
			</label>
		</FlexGroup>

		<label>
			Number of users
			<small>Active users currently using your product</small>
			<Input
				type="number"
				min={0}
				placeholder="850"
				name="number_of_users"
				value={layout.selectedStartup?.number_of_users}
				required
			/>
		</label>

		<label>
			Tagline
			<small>A short, catchy phrase that describes your business</small>
			<Input
				type="text"
				placeholder="Revolutionizing supply chain with blockchain"
				name="tagline"
				value={layout.selectedStartup?.tagline}
				required
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
