<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { Button } from 'bits-ui';
	import { daysUntil, intToCurrency } from '$lib/utils/common';

	interface Props {
		organization: any;
	}

	let { organization }: Props = $props();

	const handleSelectOrganization = (organization: any) => {
		goto(`/startup/${page.params.startupId}/organizations/${organization._id}`);
	};
</script>

<li class="flex px-[10px]">
	<Button.Root
		class="w-full flex items-center justify-between p-3 cursor-pointer hover:bg-[#242626] gap-4 rounded-[10px] data-[active=true]:bg-[#292a2a]"
		onclick={() => handleSelectOrganization(organization)}
		data-active={page.params.orgId === organization._id}
	>
		<div class="flex items-center gap-4">
			<img src={organization.logo} alt={organization.name} class="w-12 h-12 rounded-full" />
			<div>
				<h3 class="text-gray-100">{organization.name}</h3>
				<h4 class="text-xs text-red-400 mt-0.5">
					{#if organization.deadline}
						Deadline in {daysUntil(organization.deadline)} days
					{/if}
				</h4>
			</div>
		</div>

		<div class="flex flex-col items-end gap-1">
			{#if organization.applied}
				<span class="text-xs text-green-100"> Applied </span>
			{:else}
				<span class="text-xs text-gray-200 px-2 py-1 bg-neutral-600 rounded-full">
					Not Applied
				</span>
			{/if}

			<span class="text-xs text-gray-400 mt-1 text-right">
				{#if organization.acceleratorDetails?.fundingAmount && organization.acceleratorDetails?.equityTaken}
					{intToCurrency(organization.acceleratorDetails?.fundingAmount)} for {organization
						.acceleratorDetails?.equityTaken}%
				{:else}
					N/A
				{/if}
			</span>
		</div>
	</Button.Root>
</li>
