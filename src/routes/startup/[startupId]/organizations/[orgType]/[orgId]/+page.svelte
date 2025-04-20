<script lang="ts">
	import { page } from '$app/state';
	import ApplyModal from '$lib/components_new/modals/apply/apply.svelte';
	import { Button } from 'bits-ui';

	let openApplyModal = $state(false);
	let selectedOrganization = $derived.by(() => {
		return page.data.organizations?.find((org: any) => org._id === page.params.orgId);
	});

	const handleApply = () => (openApplyModal = true);
</script>

{#if selectedOrganization}
	<ApplyModal bind:open={openApplyModal} {selectedOrganization} />

	<div class="flex flex-col gap-6 p-6">
		<header class="border-b-1 border-gray-200 pb-4">
			<h2 class="text-xl font-semibold">{selectedOrganization.name}</h2>
			<p class="text-gray-600">{selectedOrganization.description || 'No description available'}</p>
		</header>

		<div class="grid grid-cols-2 gap-4">
			<div>
				<h3 class="font-medium">Website</h3>
				<p>{selectedOrganization.url || 'N/A'}</p>
			</div>
			<div>
				<h3 class="font-medium">Location</h3>
				<p>{selectedOrganization.locations ? selectedOrganization.locations[0] : 'N/A'}</p>
			</div>
			<div>
				<h3 class="font-medium">Guided Cost</h3>
				<p>${selectedOrganization.guidedCost || 0}</p>
			</div>
			<div>
				<h3 class="font-medium">One Click Cost</h3>
				<p>${selectedOrganization.oneClickCost || 0}</p>
			</div>
		</div>

		<div class="mt-4">
			<Button.Root
				class="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
				onclick={handleApply}
			>
				Apply Now
			</Button.Root>
			<Button.Root
				class="border-1 border-gray-300 ml-2 py-2 px-4 rounded hover:bg-gray-100"
				href={selectedOrganization.applicationUrl}
			>
				Apply Externally
			</Button.Root>
		</div>
	</div>
{:else}
	<div class="flex items-center justify-center h-full text-gray-500 p-6">
		<p>Organization not found</p>
	</div>
{/if}
