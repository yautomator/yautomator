<script lang="ts">
	import { enhance } from '$app/forms';
	import Breadcrumb from '$lib/components/Breadcrumb.svelte';
	import PrimaryButton from '$lib/components/buttons/PrimaryButton.svelte';
	import Container from '$lib/components/Container.svelte';
	import FlexGroup from '$lib/components/FlexGroup.svelte';
	import SelectedStartupIcon from '$lib/components/icons/SelectedStartupIcon.svelte';
	import Input from '$lib/components/inputs/Input.svelte';
	import Switch from '$lib/components/inputs/Switch.svelte';
	import Textarea from '$lib/components/inputs/Textarea.svelte';
	import Select from '$lib/components/select/Select.svelte';
	import { layout } from '$lib/states/layout.svelte';
	import { convertDatetimeToDate } from '$lib/utils/date';
	import { getCurrentCountry } from '$lib/utils/geolocation';
	import NProgress from 'nprogress';
	import type { SubmitFunction } from './$types';

	let isLoading = $state(false);
	let country = getCurrentCountry();

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
			<span>Basic information</span>
		{/snippet}
	</Breadcrumb>
</header>

<main>
	<form method="POST" enctype="multipart/form-data" use:enhance={handleUpdateStartupResponse}>
		<h1>Basic information</h1>

		<input type="hidden" name="id" value={layout.selectedStartup?._id} />

		<FlexGroup>
			<label>
				Startup name
				<small>Official name of your startup or business</small>
				<Input
					type="text"
					placeholder="Acme Technologies"
					name="name"
					value={layout.selectedStartup?.name}
					required
				/>
			</label>
		</FlexGroup>

		<label>
			Description
			<small>Brief overview of what your startup does and its mission</small>
			<Textarea
				placeholder="Acme Technologies is an AI-powered real-time analytics platform that transforms raw data into actionable insights. Our mission is to simplify data complexity, eliminate silos, and empower businesses with seamless, intuitive analytics. By leveraging automation and real-time collaboration, we help companies of all sizes make smarter, faster, and more informed decisions—unlocking their full potential in an increasingly data-driven world. "
				name="description"
				rows={5}
				value={layout.selectedStartup?.description}
				required
			/>
		</label>

		<FlexGroup>
			<label>
				Founded date
				<small>When your startup was officially established</small>
				<Input
					type="date"
					placeholder="Select date"
					name="foundedDate"
					min="1950-01-01"
					value={convertDatetimeToDate(layout.selectedStartup?.foundedDate)}
					required
				/>
			</label>

			<label>
				Location
				<small>Country where your startup operates</small>
				<Select placeholder="Select country" name="location" value={country} />
			</label>
		</FlexGroup>

		<Container>
			<div>
				<label for="incorporation">
					Incorporation Status
					<small>Is your business legally incorporated</small>
				</label>

				<Switch name="incorporation" checked={layout.selectedStartup?.incorporation} />
			</div>
		</Container>

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

			div {
				display: flex;
				place-items: center;
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
