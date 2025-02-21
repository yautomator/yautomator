<script lang="ts">
	import { enhance } from '$app/forms';
	import { modals } from '$lib/States/modals.svelte';
	import type { SubmitFunction } from '@sveltejs/kit';
	import { X } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import Breadcrumb from '../Breadcrumb.svelte';
	import Button from '../Buttons/Button.svelte';
	import IconButton from '../Buttons/IconButton.svelte';
	import FlexGroup from '../FlexGroup.svelte';
	import Startup from '../Icons/Startup.svelte';
	import FloatingInput from '../Inputs/FloatingInput.svelte';
	import Base from './Base.svelte';

	let isLoading = $state(false);
	let ref = $state<HTMLDialogElement>();
	let formRef: HTMLFormElement;

	const handleNewFounderResponse: SubmitFunction = () => {
		isLoading = true;

		return async ({ result, update }) => {
			if (result.type === 'success') {
				formRef.reset();
				modals.addFounderModal?.close();
				await update();
			} else {
				alert('Failed to add founder. Please try again.');
			}

			isLoading = false;
		};
	};

	onMount(() => {
		modals.addFounderModal = ref;
	});

	const close = () => {
		modals.addFounderModal?.close();
	};
</script>

<Base bind:ref>
	{#snippet header()}
		<Breadcrumb>
			{#snippet base()}
				<Startup />
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
		bind:this={formRef}
		use:enhance={handleNewFounderResponse}
		action="?/create"
	>
		<FlexGroup>
			<FloatingInput type="text" label="First name" name="firstName" />
			<FloatingInput type="text" label="Last name" name="lastName" />
		</FlexGroup>

		<!-- <FlexGroup>
			<FloatingInput type="text" label="Country of living" name="countryOfLiving" />
			<FloatingInput label="LinkedIn URL" name="linkedinProfileUrl" type="url" />
		</FlexGroup> -->

		<FlexGroup>
			<FloatingInput type="text" label="Role" name="role" />
			<FloatingInput type="email" label="Email" name="email" />
		</FlexGroup>

		<!-- <FloatingTextarea label="Summary" name="summary" />
		<FileDropInput name="cv" /> -->
	</form>

	{#snippet footer()}
		<Button type="submit" form="founder" background="#5e6ad2" disabled={isLoading}>
			{#if isLoading}
				<span>Loading...</span>
			{:else}
				<span>Add founder</span>
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
