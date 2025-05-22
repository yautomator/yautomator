<script lang="ts">
	import { page } from '$app/state';
	import { Filter } from '$lib/components/filter';
	import { Organization } from '$lib/components/organization';
	import { Search } from '$lib/components/search';
	import { Sidepanel } from '$lib/components/sidepanel';
	import type { Organization as OrganizationType, Startup } from '$lib/utils/common';
	import type { LayoutProps } from '../$types';

	let { children, data }: LayoutProps = $props();

	let selectedFilter = $state('all');

	const selectedStartup = $derived.by(() => {
		return page.data.startups?.find((startup: Startup) => startup._id === page.params.startupId);
	});

	const filters = [
		{ id: 'all', label: 'All' },
		{ id: 'ACCELERATOR', label: 'Accelerators' },
		{ id: 'INCUBATOR', label: 'Incubators' },
		{ id: 'VC', label: 'VCs' },
		{ id: 'LAUNCH', label: 'Launch' }
	];

	let filteredOrganizations = $derived.by(() => {
		if (selectedFilter === 'all') return data.organizations;

		return data.organizations.filter(
			(org: OrganizationType) => org.organizationType === selectedFilter
		);
	});

	function handleFilterClick(filterId: string) {
		selectedFilter = filterId;
	}
</script>

<div class="flex h-full">
	<Sidepanel.Root>
		<Sidepanel.Title>Organizations</Sidepanel.Title>

		<Search.Root placeholder="Search for an organization" />

		<Filter.Root>
			{#each filters as filter}
				<Filter.Item {filter} onClick={handleFilterClick} isActive={selectedFilter === filter.id} />
			{/each}
		</Filter.Root>

		<Organization.Root>
			{#each filteredOrganizations as organization (organization._id)}
				<Organization.Item {organization} {selectedStartup} />
			{/each}
		</Organization.Root>
	</Sidepanel.Root>

	{@render children()}
</div>
