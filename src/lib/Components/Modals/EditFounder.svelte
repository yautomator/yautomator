<script lang="ts">
	import { modals } from '$lib/states/modals.svelte';
	import type { SubmitFunction } from '@sveltejs/kit';

	import { enhance } from '$app/forms';
	import { page } from '$app/state';
	import { layout } from '$lib/states/layout.svelte';
	import { getCountryByIso } from '$lib/utils/geolocation';
	import { UserPen } from 'lucide-svelte';
	import nProgress from 'nprogress';
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

	let formId = 'edit-founder';
	let isLoadingUpdate = $state(false);
	let isLoadingDelete = $state(false);
	let modalRef = $state<HTMLDialogElement>();

	const close = () => modals.editFounderModal?.close();

	const reassignSelectedStartup = () => {
		// Iterate through the startups and find the one with the same _id
		layout.selectedStartup = page.data.startups.find(
			(startup: any) => startup._id === layout.selectedStartup?._id
		);
	};

	const handleEditFounderResponse: SubmitFunction = () => {
		isLoadingUpdate = true;
		nProgress.start();

		return async ({ result, update }) => {
			if (result.type === 'success') {
				await update({ reset: false });
				reassignSelectedStartup();
			} else {
				alert('Failed to edit founder. Please try again.');
			}

			isLoadingUpdate = false;
			nProgress.done();
		};
	};

	const handleDeleteFounderResponse: SubmitFunction = () => {
		isLoadingDelete = true;
		nProgress.start();

		return async ({ result, update }) => {
			if (result.type === 'success') {
				close();
				await update({ reset: false });
				reassignSelectedStartup();
			} else {
				alert('Failed to delete founder. Please try again.');
			}

			isLoadingDelete = false;
			nProgress.done();
		};
	};

	onMount(() => (modals.editFounderModal = modalRef));
</script>

<Base bind:modalRef>
	{#snippet header()}
		<Breadcrumb>
			{#snippet base()}
				<SelectedStartupIcon />
			{/snippet}

			{#snippet current()}
				<span>Edit founder</span>
			{/snippet}
		</Breadcrumb>
	{/snippet}

	<form
		id={formId}
		method="POST"
		enctype="multipart/form-data"
		action="?/update"
		use:enhance={handleEditFounderResponse}
	>
		<input type="hidden" name="id" value={layout.selectedFounder?._id} />
		<input type="hidden" name="startupId" value={layout.selectedStartup?._id} />

		<FlexGroup>
			<label>
				First name
				<Input
					type="text"
					placeholder="John"
					name="firstName"
					value={layout.selectedFounder?.firstName}
					required
				/>
			</label>

			<label>
				Last name
				<Input
					type="text"
					placeholder="Doe"
					name="lastName"
					value={layout.selectedFounder?.lastName}
				/>
			</label>
		</FlexGroup>

		<FlexGroup>
			<label>
				Country
				<Select
					placeholder="Select country"
					name="country"
					value={getCountryByIso(layout.selectedFounder?.country)}
				/>
			</label>

			<label>
				LinkedIn
				<Input
					placeholder="https://www.linkedin.com/in/john-doe"
					name="linkedin"
					type="url"
					value={layout.selectedFounder?.linkedin}
				/>
			</label>
		</FlexGroup>

		<FlexGroup>
			<label>
				Role
				<Input
					type="text"
					placeholder="Engineer"
					name="role"
					value={layout.selectedFounder?.role}
				/>
			</label>

			<label>
				Email
				<Input
					type="email"
					placeholder="john.doe@example.com"
					name="email"
					value={layout.selectedFounder?.email}
					required
				/>
			</label>
		</FlexGroup>

		<label>
			Summary
			<Textarea
				placeholder="John Doe is a versatile figure commonly used in documentation and instructional materials."
				name="summary"
				value={layout.selectedFounder?.summary}
			/>
		</label>

		<label>
			Upload resume
			<FileUpload
				placeholder="Click to browse"
				name="cv"
				accept=".pdf, .doc, .docx"
				selectedFileName={layout.selectedFounder?.cvName}
			/>
		</label>
	</form>

	{#snippet footer()}
		<form method="POST" action="?/delete" use:enhance={handleDeleteFounderResponse}>
			<input type="hidden" name="id" value={layout.selectedFounder?._id} />
			<SecondaryButton type="submit" disabled={isLoadingDelete}>
				<span>Delete founder</span>
			</SecondaryButton>
		</form>

		<PrimaryButton type="submit" form={formId} disabled={isLoadingUpdate}>
			<UserPen size={14} strokeWidth={2.5} />
			<span>Update founder</span>
		</PrimaryButton>
	{/snippet}
</Base>

<style>
	label {
		width: 100%;

		font-size: 0.8125rem;
		font-weight: 500;

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
