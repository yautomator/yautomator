<script lang="ts">
	import { enhance } from '$app/forms';
	import { modals } from '$lib/States/modals.svelte';
	import type { SubmitFunction } from '@sveltejs/kit';
	import { Plus, X } from 'lucide-svelte';
	import NProgress from 'nprogress';
	import { onMount } from 'svelte';
	import Breadcrumb from '../Breadcrumb.svelte';
	import IconButton from '../Buttons/IconButton.svelte';
	import PrimaryButton from '../Buttons/PrimaryButton.svelte';
	import FlexGroup from '../FlexGroup.svelte';
	import StartupIcon from '../Icons/Startup.svelte';
	import Select from '../Inputs/Country.svelte';
	import FileDropInput from '../Inputs/FileDropInput.svelte';
	import FloatingInput from '../Inputs/FloatingInput.svelte';
	import FloatingTextarea from '../Inputs/FloatingTextarea.svelte';
	import Base from './Base.svelte';

	let isLoading = $state(false);
	let ref = $state<HTMLDialogElement>();

	const handleNewFounderResponse: SubmitFunction = () => {
		isLoading = true;
		NProgress.start();

		return async ({ result, update }) => {
			if (result.type === 'success') {
				modals.addFounderModal?.close();
				await update();
			} else {
				alert('Failed to add founder. Please try again.');
			}

			NProgress.done();
			isLoading = false;
		};
	};

	onMount(() => {
		modals.addFounderModal = ref;
	});

	const close = () => {
		modals.addFounderModal?.close();
	};

	let selectedCountry = $state('');
</script>

<Base bind:ref>
	{#snippet header()}
		<Breadcrumb>
			{#snippet base()}
				<StartupIcon />
			{/snippet}
			{#snippet current()}
				<span>New founder</span>
			{/snippet}
		</Breadcrumb>

		<IconButton onclick={close}>
			<X size={15} />
		</IconButton>
	{/snippet}

	<form
		id="founder"
		method="POST"
		enctype="multipart/form-data"
		use:enhance={handleNewFounderResponse}
		action="?/create"
	>
		<FlexGroup>
			<FloatingInput type="text" placeholder="First name" name="firstName" />
			<FloatingInput type="text" placeholder="Last name" name="lastName" />
		</FlexGroup>

		<FlexGroup>
			<Select placeholder="Country of living" />
			<FloatingInput placeholder="LinkedIn URL" name="linkedinProfileUrl" type="url" />
		</FlexGroup>

		<FlexGroup>
			<FloatingInput type="text" placeholder="Role" name="role" />
			<FloatingInput type="email" placeholder="Email" name="email" />
		</FlexGroup>

		<FloatingTextarea placeholder="Summary" name="summary" />
		<FileDropInput name="cv" />
	</form>

	{#snippet footer()}
		<PrimaryButton type="submit" form="founder" disabled={isLoading}>
			<Plus size={14} strokeWidth={2.5} />
			<span>Add founder</span>
		</PrimaryButton>
	{/snippet}
</Base>

<style>
	form {
		display: flex;
		flex-direction: column;
		gap: 12px;
	}
</style>
