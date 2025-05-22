<script lang="ts">
	import type { Accelerator, Startup } from '$lib/utils/common';

	interface Props {
		selectedOrganization: Accelerator;
		selectedStartup: Startup;
	}

	let { selectedOrganization, selectedStartup }: Props = $props();
</script>

<div class="border-1 border-border rounded-lg overflow-hidden">
	<div
		class="flex items-center gap-3 py-3 px-4 text-gray-100 border-b-1 border-border bg-[#2e2f2f]"
	>
		<span class="text-sm text-gray-100 font-medium">Properties</span>
	</div>

	<div class="flex items-center gap-3 py-3 px-4 text-gray-100 border-b-1 border-border">
		<span class="text-sm text-gray-400">Status</span>
		<div class="ml-auto">
			<p>
				{selectedStartup?.applications?.find(
					(application: any) => application.organization === selectedOrganization._id
				)?.status || 'Not applied'}
			</p>
		</div>
	</div>

	{#if selectedOrganization.acceleratorDetails?.fundingAmount}
		<div class="flex items-center gap-3 py-3 px-4 text-gray-100 border-b-1 border-border">
			<span class="text-sm text-gray-400">Funding</span>
			<div class="ml-auto">
				<p>
					${selectedOrganization.acceleratorDetails.fundingAmount.toLocaleString()}
					{#if selectedOrganization.acceleratorDetails.equityTaken}
						<span class="text-gray-400 font-normal">
							for {selectedOrganization.acceleratorDetails.equityTaken
								.minAmount}–{selectedOrganization.acceleratorDetails.equityTaken.maxAmount}%
						</span>
					{/if}
				</p>
			</div>
		</div>
	{/if}

	{#if selectedOrganization.acceleratorDetails?.stageFocus?.length}
		<div class="flex items-center gap-3 py-3 px-4 text-gray-100 border-b-1 border-border">
			<span class="text-sm text-gray-400">Stage Focus</span>
			<div class="ml-auto">
				<p class="text-sm">{selectedOrganization.acceleratorDetails.stageFocus.join(', ')}</p>
			</div>
		</div>
	{/if}

	{#if selectedOrganization.locations?.length}
		<div class="flex items-center gap-3 py-3 px-4 text-gray-100 border-b-1 border-border">
			<span class="text-sm text-gray-400">Locations</span>
			<div class="ml-auto">
				<p class="text-sm">{selectedOrganization.locations.join(', ')}</p>
			</div>
		</div>
	{/if}

	{#if selectedOrganization.apply?.cost}
		<div class="flex items-center gap-3 py-3 px-4 text-gray-100 border-b-1 border-border">
			<span class="text-sm text-gray-400">Cost to Apply</span>
			<div class="ml-auto">
				<p class="text-sm">${selectedOrganization.apply.cost}</p>
			</div>
		</div>
	{/if}

	<div class="flex items-center gap-3 py-3 px-4 text-gray-100 border-b-1 border-border">
		<span class="text-sm text-gray-400">Requires Login</span>
		<div class="ml-auto">
			<p class="text-sm">{selectedOrganization.requiresLogin ? 'Yes' : 'No'}</p>
		</div>
	</div>

	{#if selectedOrganization.applicationQuestions?.length}
		<div class="flex items-center gap-3 py-3 px-4 text-gray-100">
			<span class="text-sm text-gray-400">Questions</span>
			<div class="ml-auto">
				<p class="text-sm">{selectedOrganization.applicationQuestions.length}</p>
			</div>
		</div>
	{/if}
</div>
