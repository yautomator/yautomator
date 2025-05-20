<script lang="ts">
	import ApplyForm from '$lib/components/forms/apply.svelte';
	import { Button } from 'bits-ui';
	import Modal from '../base.svelte';
	import type { Accelerator, Startup } from '$lib/utils/common';
	import Application from './application.svelte';
	import { StepController } from './controller.svelte';

	const STEPS = {
		APPLICATION: 1,
		FILL: 2
	};

	let selectedApplication = $state<any>(null);

	const applyFormId = 'accelerator-apply-form';
	const stepController = new StepController(STEPS.APPLICATION);

	interface Props {
		open: boolean;
		selectedOrganization: Accelerator;
		selectedStartup: Startup;
	}

	let { open = $bindable(), selectedOrganization, selectedStartup }: Props = $props();

	const applications = $derived.by(() =>
		selectedStartup?.applications.filter((app) => app.organization === selectedOrganization._id)
	);

	const closeModal = () => {
		open = false;
		stepController.reset();
	};
</script>

<Modal bind:open>
	{#snippet header()}
		<header class="flex justify-between items-center p-4 border-b-1 border-border">
			<div class="flex flex-col">
				<h2 class="font-semibold">{selectedOrganization?.name}</h2>
			</div>
			<Button.Root onclick={() => (open = false)}>X</Button.Root>
		</header>
	{/snippet}

	{#snippet children()}
		<div class="overflow-y-auto flex flex-col gap-4 p-4">
			{#if stepController.step === STEPS.APPLICATION}
				<Application bind:selectedApplication {applications} {stepController} />
			{:else if stepController.step === STEPS.FILL}
				<ApplyForm {selectedApplication} {selectedOrganization} {closeModal} id={applyFormId} />
			{/if}
		</div>
	{/snippet}

	{#snippet footer()}
		<footer class="border-t-1 border-border p-4 flex justify-between">
			<div class="flex gap-2">
				{#if stepController.step === STEPS.FILL}
					<Button.Root type="submit" form={applyFormId}>Submit Application</Button.Root>
					<Button.Root onclick={stepController.previous}>Back</Button.Root>
				{/if}
			</div>
		</footer>
	{/snippet}
</Modal>
