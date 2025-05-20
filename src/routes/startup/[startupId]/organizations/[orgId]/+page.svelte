<script lang="ts">
	import { page } from '$app/state';
	import { Clickable } from '$lib/components/clickable';
	import ApplyModal from '$lib/components/modals/apply/apply.svelte';
	import { Organization } from '$lib/components/organization';
	import type { Accelerator, Startup } from '$lib/utils/common';
	import { Button } from 'bits-ui';

	let openApplyModal = $state(false);

	const selectedOrganization = $derived.by(() => {
		return page.data.organizations?.find((org: Accelerator) => org._id === page.params.orgId);
	});

	const selectedStartup = $derived.by(() => {
		return page.data.startups?.find((startup: Startup) => startup._id === page.params.startupId);
	});

	const handleApply = () => (openApplyModal = true);
</script>

{#if selectedOrganization}
	<ApplyModal bind:open={openApplyModal} {selectedOrganization} {selectedStartup} />

	<div class="flex flex-col w-[60%]">
		<header class="h-[65px] p-4 py-5 flex items-center gap-4 border-b-1 border-border">
			<img
				src={selectedOrganization.logo}
				alt={selectedOrganization.name}
				class="w-[40px] h-[40px] rounded-full"
			/>
			<h3 class="text-gray-100">{selectedOrganization.name}</h3>

			<div class="flex items-center ml-auto gap-1">
				<Clickable.Icon icon="mage:link" />
			</div>
		</header>

		<div class="h-full flex flex-col gap-4 p-5">
			<h4 class="text-gray-200 text-justify">{selectedOrganization.description}</h4>

			<Organization.Table {selectedOrganization} {selectedStartup} />
		</div>

		<footer class="h-[65px] p-5 flex items-center gap-3">
			<Button.Root
				class="cursor-pointer w-full bg-[#4e1c90] text-gray-100 p-2 rounded-full border-1 border-[#8234e9] flex justify-center items-center gap-2 px-4"
				><iconify-icon
					class="text-gray-100 cursor-pointer rounded-full"
					icon="mage:rocket-fill"
					width="20"
					height="20"
				></iconify-icon>
				Apply to {selectedOrganization.name}</Button.Root
			>
		</footer>
	</div>
{:else}
	<div class="flex items-center justify-center h-full text-gray-500 p-6">
		<p>Organization not found</p>
	</div>
{/if}
