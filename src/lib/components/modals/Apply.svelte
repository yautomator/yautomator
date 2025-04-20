<script lang="ts">
	import { layout } from '$lib/states/layout.svelte';
	import { modals } from '$lib/states/modals.svelte';
	import { Plus } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import Breadcrumb from '../Breadcrumb.svelte';
	import PrimaryButton from '../buttons/PrimaryButton.svelte';
	import SecondaryButton from '../buttons/SecondaryButton.svelte';
	import FlexGroup from '../FlexGroup.svelte';
	import SelectedStartupIcon from '../icons/SelectedStartupIcon.svelte';
	import Input from '../inputs/Input.svelte';
	import Base from './Base.svelte';

	let isLoading = $state(false);
	let modalRef = $state<HTMLDialogElement>();
	let formId = 'apply-organization';

	const close = () => {
		modals.applyModal?.close();
	};

	onMount(() => {
		modals.applyModal = modalRef;
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

	<form id={formId} method="POST" enctype="multipart/form-data" action="?/apply">
		<input type="hidden" name="acceleratorId" value={layout.selectedAccelerator?._id} />

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
	</form>

	{#snippet footer()}
		<SecondaryButton onclick={close}>
			<span>Cancel</span>
		</SecondaryButton>

		<PrimaryButton type="submit" form={formId} disabled={isLoading}>
			<Plus size={14} strokeWidth={2.5} />
			<span>Apply</span>
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
