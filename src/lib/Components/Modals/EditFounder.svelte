<script lang="ts">
	import { enhance } from '$app/forms';
	import type { Founder } from '$lib/Common';
	import { founders } from '$lib/States/founders.svelte';
	import { layout } from '$lib/States/layout.svelte';
	import { modals } from '$lib/States/modals.svelte';
	import type { SubmitFunction } from '@sveltejs/kit';

	import { onMount } from 'svelte';
	import Breadcrumb from '../Breadcrumb.svelte';
	import Button from '../Buttons/Button.svelte';
	import FlexGroup from '../FlexGroup.svelte';
	import Startup from '../Icons/Startup.svelte';
	import FileDropInput from '../Inputs/FileDropInput.svelte';
	import FloatingInput from '../Inputs/FloatingInput.svelte';
	import FloatingTextarea from '../Inputs/FloatingTextarea.svelte';
	import Base from './Base.svelte';

	let founder = $state<Founder>({
		_id: '',
		firstName: '',
		lastName: '',
		role: '',
		countryOfLiving: '',
		linkedinProfileUrl: '',
		email: '',
		summary: '',
		cvUrl: null
	});

	let isLoading = $state(false);
	let ref = $state<HTMLDialogElement>();

	$effect(() => {
		if (layout.selectedFounder) founder = { ...layout.selectedFounder };
	});

	onMount(() => {
		modals.editFounderModal = ref;
	});

	const handleEditFounderResponse: SubmitFunction = ({ formElement, formData, action, cancel }) => {
		isLoading = true;

		return async ({ result }) => {
			if (result.type === 'success' && result.data?.newFounder) {
				founders.push(result.data.newFounder);
				founder = {} as Founder;
			} else {
				alert('Failed to edit founder. Please try again.');
			}
			isLoading = false;
		};
	};
</script>

<Base bind:ref>
	{#snippet header()}
		<Breadcrumb>
			{#snippet base()}
				<Startup />
			{/snippet}
			{#snippet current()}
				<span>Edit founder</span>
			{/snippet}
		</Breadcrumb>
	{/snippet}

	<form
		id="founder"
		method="POST"
		use:enhance={handleEditFounderResponse}
		enctype="multipart/form-data"
	>
		<FlexGroup>
			<FloatingInput
				type="text"
				label="First name"
				name="firstName"
				bind:value={founder.firstName}
			/>
			<FloatingInput type="text" label="Last name" name="lastName" bind:value={founder.lastName} />
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
		<Button type="submit" form="founder" background="#5e6ad2" disabled={isLoading}>
			{#if isLoading}
				<span>Loading...</span>
			{:else}
				<span>Save changes</span>
			{/if}
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
