<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { intToCurrency } from '$lib/utils/currency';
	import { Button } from 'bits-ui';

	interface Props {
		organization: Organization.Entity;
		selectedStartup: Startup.Entity;
	}

	let { organization, selectedStartup }: Props = $props();

	const handleSelectOrganization = (organization: Organization.Entity) => {
		goto(`/startup/${selectedStartup._id}/organizations/${organization._id}`);
	};

	const computeFundingPerEquity = (organization: Organization.Entity) => {
		if (!organization.acceleratorDetails || !organization.acceleratorDetails.equityTaken) {
			return 'N/A';
		}

		const { minAmount, maxAmount } = organization.acceleratorDetails.equityTaken;

		if (!minAmount || !maxAmount) return 'N/A';

		const equityRange = minAmount === maxAmount ? `${minAmount}%` : `${minAmount}-${maxAmount}%`;
		return `${intToCurrency(organization.acceleratorDetails.fundingAmount)} • ${equityRange}`;
	};

	const applicationStatus = $derived.by(() => {
		const application = selectedStartup.applications.find(
			(app) => app.organization === organization._id
		);

		return application?.status;
	});
</script>

<li class="px-[10px]">
	<Button.Root
		class="w-full flex items-center justify-between p-3 cursor-pointer hover:bg-[#2e2f2f] gap-4 rounded-[10px] data-[active=true]:bg-[#2e2f2f]"
		onclick={() => handleSelectOrganization(organization)}
		data-active={page.params.orgId === organization._id}
	>
		<div class="flex items-center gap-4">
			<img src={organization.logo} alt={organization.name} class="w-12 h-12 rounded-full" />

			<div class="flex flex-col text-left gap-1">
				<h3 class="text-gray-100">{organization.name}</h3>
				<h4 class="text-xs text-gray-400 mt-0.5">Deadline in 3 days</h4>
			</div>
		</div>

		<div class="flex flex-col items-end gap-1">
			{#if applicationStatus === 'SUBMITTED'}
				<span class="text-xs text-green-100 px-2 py-1 bg-[#4e1c90] rounded-full"> Applied </span>
			{:else}
				<span class="text-xs text-gray-200 px-2 py-1 bg-neutral-700 rounded-full">
					Not Applied
				</span>
			{/if}

			<span class="text-xs text-gray-400 mt-1 text-right">
				{computeFundingPerEquity(organization)}
			</span>
		</div>
	</Button.Root>
</li>
