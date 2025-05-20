<script lang="ts">
	import type { LayoutProps } from '../$types';
	import { Organization } from '$lib/components/organization';
	import { Filter } from '$lib/components/filter';
	import { Search } from '$lib/components/search';
	let { children, data }: LayoutProps = $props();

	interface Organization {
		_id: string;
		name: string;
		description: string;
		organizationType: string;
		applied: boolean;
		fundingAmount: string;
		equityTaken: string;
		deadline: string;
	}

	let selectedFilter = $state('all');

	const filters = [
		{ id: 'all', label: 'All' },
		{ id: 'ACCELERATOR', label: 'Accelerators' },
		{ id: 'INCUBATOR', label: 'Incubators' },
		{ id: 'VC', label: 'VCs' },
		{ id: 'LAUNCH', label: 'Launch' }
	];

	let filteredOrganizations = $derived(
		selectedFilter === 'all'
			? data.organizations
			: data.organizations.filter((org: Organization) => org.organizationType === selectedFilter)
	);

	function handleFilterClick(filterId: string) {
		selectedFilter = filterId;
	}
</script>

<div class="flex h-full">
	<div class="border-r-1 border-border flex flex-col gap-1 w-[40%]">
		<h1 class="text-[1.4rem] font-medium text-gray-100 py-[13px] px-[20px]">Organizations</h1>

		<Search.Root placeholder="Search for an organization" />

		<Filter.Root>
			{#each filters as filter}
				<Filter.Item {filter} onClick={handleFilterClick} isActive={selectedFilter === filter.id} />
			{/each}
		</Filter.Root>

		<Organization.Root>
			{#each filteredOrganizations as organization (organization._id)}
				<Organization.Item {organization} />
			{/each}
		</Organization.Root>
	</div>

	{@render children()}
</div>
