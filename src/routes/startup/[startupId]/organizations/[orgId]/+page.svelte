<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { Clickable } from '$lib/components/clickable';
	import { SelectedOrganization } from '$lib/components/selected-organization';
	import { Button } from 'bits-ui';

	const selectedOrganization = $derived.by(() => {
		return page.data.organizations?.find(
			(org: Organization.Entity) => org._id === page.params.orgId
		);
	});

	const selectedStartup = $derived.by(() => {
		return page.data.startups?.find(
			(startup: Startup.Entity) => startup._id === page.params.startupId
		);
	});

	const handleClose = () => {
		const organizationsUrl = `/startup/${page.params.startupId}/organizations`;
		goto(organizationsUrl);
	};
</script>

{#if selectedOrganization}
	<div class="flex flex-col w-full">
		<header class="h-[65px] p-4 py-5 flex items-center gap-4 border-b-1 border-border">
			<div class="max-w-7xl mx-auto w-full flex items-center gap-4">
				<img
					src={selectedOrganization.logo}
					alt={selectedOrganization.name}
					class="w-[40px] h-[40px] rounded-full"
				/>
				<h3 class="text-gray-100">{selectedOrganization.name}</h3>

				<div class="flex items-center ml-auto gap-1">
					<Clickable.Icon icon="mage:link" href={selectedOrganization.url} />
					<Clickable.Icon icon="mingcute:close-line" onclick={handleClose} />
				</div>
			</div>
		</header>

		<div class="h-full flex flex-col gap-4 p-5">
			<div class="max-w-7xl mx-auto w-full flex flex-col gap-4">
				<h4 class="text-gray-200 text-justify">{selectedOrganization.description}</h4>

				<SelectedOrganization.Table {selectedOrganization} {selectedStartup} />

				<Button.Root
					class="cursor-pointer w-full bg-[#4e1c90] text-gray-100 p-2 rounded-full border-1 border-[#8234e9] flex justify-center items-center gap-2 px-4"
					><iconify-icon
						class="text-gray-100 cursor-pointer rounded-full"
						icon="mage:rocket-fill"
						width="20"
						height="20"
					></iconify-icon>
					Apply to {selectedOrganization.name}
				</Button.Root>
			</div>
		</div>
	</div>
{:else}
	<div class="flex items-center justify-center h-full text-gray-500 p-6">
		<p>Organization not found</p>
	</div>
{/if}
