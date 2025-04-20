<script lang="ts">
	import ApplyForm from '$lib/components_new/apply-form/form.svelte';
	import { Button } from 'bits-ui';
	import Modal from '../base.svelte';

	let formAnswers = $state<Record<string, string>>({});
	let isLoading = $state(false);

	let currentStep = $state(0);
	let applicationType = $state<'ai' | 'manual' | null>(null);
	let selectedApplication = $state<string | null>(null);

	const applyFormId = 'accelerator-apply-form';

	const nextStep = () => currentStep++;
	const prevStep = () => currentStep--;
	const goToStep = (step: number) => {
		if (step <= currentStep) {
			currentStep = step;
		}
	};

	const selectApplicationType = (type: 'ai' | 'manual') => {
		applicationType = type;
		nextStep();
	};

	const selectApplication = (id: string | null) => {
		selectedApplication = id;
		nextStep();
	};

	const handleFillWithChatgpt = async () => {
		if (!selectedOrganization) return;
		isLoading = true;

		try {
			const response = await fetch('/api/autocomplete', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					organizationId: selectedOrganization._id
				})
			});

			if (!response.ok) {
				throw new Error('Failed to create application');
			}

			const data = await response.json();

			data.responses.forEach((response: any) => {
				if (response.answer) {
					formAnswers[response._id] = response.answer;
				}
			});
		} catch (error) {
			console.error('Error creating application:', error);
		} finally {
			isLoading = false;
		}
	};

	let { open = $bindable(), selectedOrganization } = $props();
</script>

<Modal bind:open>
	{#snippet header()}
		<header class="flex justify-between items-center p-4 border-b-1 border-gray-200">
			<div class="flex flex-col">
				<h2 class="font-semibold">Apply to {selectedOrganization?.name}</h2>
				<div class="flex items-center mt-1">
					<div class="flex items-center text-xs">
						{#each Array(3) as _, i}
							<div
								class="w-6 h-6 rounded-full flex items-center justify-center mr-1 border-1"
								class:cursor-pointer={i + 1 <= currentStep}
								class:cursor-default={i + 1 > currentStep}
								class:bg-blue-600={i + 1 === currentStep}
								class:text-white={i + 1 === currentStep}
								class:border-blue-600={i + 1 === currentStep}
								class:border-gray-300={i + 1 !== currentStep}
								class:opacity-50={i + 1 > currentStep}
								onclick={() => goToStep(i + 1)}
							>
								{i + 1}
							</div>
							{#if i < 2}
								<div class="w-4 h-px bg-gray-300 mr-1"></div>
							{/if}
						{/each}
					</div>
				</div>
			</div>
			<Button.Root onclick={() => (open = false)}>X</Button.Root>
		</header>
	{/snippet}

	{#snippet children()}
		<div class="p-4 max-h-[70vh] overflow-y-auto">
			{#if currentStep === 1}
				<!-- Step 1: Application Type Selection -->
				<div class="flex flex-col gap-4">
					<h3 class="text-lg font-semibold">How would you like to apply?</h3>

					<div class="grid grid-cols-2 gap-4 mt-2">
						<div
							class="border-1 p-4 rounded cursor-pointer hover:border-blue-600 transition-colors"
							class:border-blue-600={applicationType === 'ai'}
							class:border-gray-200={applicationType !== 'ai'}
							onclick={() => selectApplicationType('ai')}
						>
							<h4 class="font-medium">Using AI Assistant</h4>
							<p class="text-sm text-gray-600 mt-2">
								Let our AI assistant help you fill the application forms.
							</p>
						</div>

						<div
							class="border-1 p-4 rounded cursor-pointer hover:border-blue-600 transition-colors"
							class:border-blue-600={applicationType === 'manual'}
							class:border-gray-200={applicationType !== 'manual'}
							onclick={() => selectApplicationType('manual')}
						>
							<h4 class="font-medium">Manual Application</h4>
							<p class="text-sm text-gray-600 mt-2">Fill all the application forms manually.</p>
						</div>
					</div>
				</div>
			{:else if currentStep === 2}
				<!-- Step 3: Application Form -->
				<ApplyForm id={applyFormId} {selectedOrganization} {formAnswers} />
			{/if}
		</div>
	{/snippet}

	{#snippet footer()}
		<footer class="border-t-1 border-gray-200 p-4 flex justify-between">
			{#if currentStep > 1}
				<Button.Root
					class="border-1 border-gray-300 px-4 py-2 rounded hover:bg-gray-100"
					onclick={prevStep}
				>
					Back
				</Button.Root>
			{:else}
				<div></div>
				<!-- Empty div for spacing -->
			{/if}

			{#if currentStep === 2}
				<!-- Final step buttons -->
				<div class="flex gap-2">
					<Button.Root type="submit" form={applyFormId}>Submit Application</Button.Root>
					<Button.Root onclick={handleFillWithChatgpt} disabled={isLoading}>
						{#if isLoading}
							<div
								class="w-4 h-4 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin"
							></div>
						{/if}
						Use AI
					</Button.Root>
				</div>
			{:else}
				<!-- Next step button for steps 1-2 -->
				<Button.Root
					class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
					onclick={nextStep}
					disabled={(currentStep === 1 && !applicationType) ||
						(currentStep === 2 && selectedApplication === undefined)}
				>
					Continue
				</Button.Root>
			{/if}
		</footer>
	{/snippet}
</Modal>
