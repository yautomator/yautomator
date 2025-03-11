<script lang="ts">
	import { enhance } from '$app/forms';
	import { page } from '$app/state';

	import { layout } from '$lib/states/layout.svelte';
	import { modals } from '$lib/states/modals.svelte';
	import { getCurrentCountry } from '$lib/utils/geolocation';
	import type { SubmitFunction } from '@sveltejs/kit';
	import { Plus } from 'lucide-svelte';
	import NProgress from 'nprogress';
	import { onMount } from 'svelte';
	import Breadcrumb from '../Breadcrumb.svelte';
	import PrimaryButton from '../buttons/PrimaryButton.svelte';
	import SecondaryButton from '../buttons/SecondaryButton.svelte';
	import FlexGroup from '../FlexGroup.svelte';
	import SelectedStartupIcon from '../icons/SelectedStartupIcon.svelte';
	import FileUpload from '../inputs/FileUpload.svelte';
	import Input from '../inputs/Input.svelte';
	import Textarea from '../inputs/Textarea.svelte';
	import Select from '../select/Select.svelte';
	import Base from './Base.svelte';

	let isLoading = $state(false);
	let modalRef = $state<HTMLDialogElement>();
	let formId = 'add-founder';
	let country = getCurrentCountry();

	const reassignSelectedStartup = () => {
		// Iterate through the startups and find the one with the same _id
		layout.selectedStartup = page.data.startups.find(
			(startup: any) => startup._id === layout.selectedStartup?._id
		);
	};

	const handleNewFounderResponse: SubmitFunction = () => {
		isLoading = true;
		NProgress.start();

		return async ({ result, update }) => {
			if (result.type === 'success') {
				close();
				await update({ reset: false });
				reassignSelectedStartup();
			} else {
				alert('Failed to add founder. Please try again.');
			}

			NProgress.done();
			isLoading = false;
		};
	};

	const close = () => {
		modals.addFounderModal?.close();
	};

	onMount(() => {
		modals.addFounderModal = modalRef;
	});
</script>

<Base bind:modalRef>
	{#snippet header()}
		<Breadcrumb>
			{#snippet base()}
				<SelectedStartupIcon />
			{/snippet}

			{#snippet current()}
				<span>New founder</span>
			{/snippet}
		</Breadcrumb>
	{/snippet}

	<form
		id={formId}
		method="POST"
		enctype="multipart/form-data"
		action="?/create"
		use:enhance={handleNewFounderResponse}
	>
		<input type="hidden" name="startupId" value={layout.selectedStartup?._id} />

		<FlexGroup>
			<label>
				First name
				<Input type="text" placeholder="John" name="firstName" required />
			</label>

			<label>
				Last name
				<Input type="text" placeholder="Doe" name="lastName" />
			</label>
		</FlexGroup>

		<FlexGroup>
			<label>
				Country
				<Select placeholder="Select country" name="country" value={country} />
			</label>

			<label>
				LinkedIn
				<Input placeholder="https://www.linkedin.com/in/john-doe" name="linkedin" type="url" />
			</label>
		</FlexGroup>

		<FlexGroup>
			<label>
				Role
				<Input type="text" placeholder="Engineer" name="role" />
			</label>

			<label>
				Email
				<Input type="email" placeholder="john.doe@example.com" name="email" required />
			</label>
		</FlexGroup>

		<label>
			Summary
			<Textarea
				placeholder="John Doe is a versatile figure commonly used in documentation and instructional materials."
				name="summary"
			/>
		</label>

		<label>
			Upload resume
			<FileUpload name="cv" accept=".pdf, .doc, .docx" />
		</label>
	</form>

	{#snippet footer()}
		<SecondaryButton onclick={close}>
			<span>Cancel</span>
		</SecondaryButton>

		<PrimaryButton type="submit" form={formId} disabled={isLoading}>
			<Plus size={14} strokeWidth={2.5} />
			<span>Add founder</span>
		</PrimaryButton>
	{/snippet}
</Base>

<style>
	label {
		font-weight: 450;
		width: 100%;
		font-size: 0.8125rem;

		display: flex;
		flex-direction: column;
		gap: 6px;
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 18px;
	}
</style>
