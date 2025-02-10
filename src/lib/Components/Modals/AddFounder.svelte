<script lang="ts">
	import Breadcrumb from '../Breadcrumb.svelte';
	import Startup from '../Icons/Startup.svelte';
	import Base from './Base.svelte';
	import Button from '../Buttons/Button.svelte';
	import FloatingInput from '../Inputs/FloatingInput.svelte';
	import FloatingTextarea from '../Inputs/FloatingTextarea.svelte';
	import FlexGroup from '../FlexGroup.svelte';
	import FileDropInput from '../Inputs/FileDropInput.svelte';
	import { founders } from '$lib/States/founders.svelte';
	import { layout } from '$lib/States/layout.svelte';
	import type { Founder } from '$lib/Common';
	import { enhance, applyAction } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';

	let founder = $state<Founder>({
		name: '',
		surname: '',
		role: '',
		countryOfLiving: '',
		linkedinProfileUrl: '',
		email: '',
		summary: '',
		cvUrl: null
	});

	$effect(() => {
		if (layout.selectedFounder) founder = { ...layout.selectedFounder };
	});

	const handleNewFounderResponse: SubmitFunction = ({ formElement, formData, action, cancel }) => {
		return async ({ result }) => {
			console.log(result)
			if (result.type === "success" && result.data?.newFounder) {
				founders.push(result.data.newFounder);
			}
		};
	};
</script>

<Base>
	{#snippet header()}
		<Breadcrumb>
			{#snippet base()}
				<Startup />
			{/snippet}
			{#snippet current()}
				<span>{layout.selectedFounder ? 'Edit' : 'New'} founder</span>
			{/snippet}
		</Breadcrumb>
	{/snippet}

	<form
		id="founder"
		method="POST"
		use:enhance={handleNewFounderResponse}
		enctype="multipart/form-data"
		autocomplete="off"
	>
		<FlexGroup>
			<FloatingInput type="text" label="Name" name="name" bind:value={founder.name}  />
			<FloatingInput
				type="text"
				label="Surname"
				name="surname"
				bind:value={founder.surname}
			/>
		</FlexGroup>

		<FlexGroup>
			<FloatingInput
				type="text"
				label="Country"
				name="country"
				bind:value={founder.countryOfLiving}
			/>
			<FloatingInput
				label="LinkedIn URL"
				name="linkedinUrl"
				bind:value={founder.linkedinProfileUrl}
				type="url"
			/>
		</FlexGroup>

		<FlexGroup>
			<FloatingInput type="text" label="Role" name="role" bind:value={founder.role} />
			<FloatingInput type="email" label="Email" name="email" bind:value={founder.email} />
		</FlexGroup>

		<FloatingTextarea label="Summary" name="summary" bind:value={founder.summary} />
		<FileDropInput name="cv" />

	</form>

	{#snippet footer()}
	<Button onClick={() => {}} type="submit" form="founder" background="#5e6ad2">
		<span>{layout.selectedFounder ? 'Save' : 'Add'} founder</span>
	</Button>
	{/snippet}
</Base>

<style>
	form {
		display: flex;
		flex-direction: column;
		gap: 12px;
	}
</style>
