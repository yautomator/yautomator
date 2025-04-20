<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import type { LayoutProps } from './$types';

	let { data, children }: LayoutProps = $props();
	let { orgType } = page.params;

	const handleSelectOrganization = (organization: any) => {
		goto(`/startup/${page.params.startupId}/organizations/${orgType}/${organization._id}`);
	};

	console.log(page.data.organizations);
</script>

<div class="flex h-full">
	<!-- Left panel: List of accelerators -->
	<div class="w-1/3 border-r-1 border-gray-200 overflow-y-auto">
		{#each page.data.organizations.filter((organization: any) => organization.organizationType.toLowerCase() === orgType) as organization (organization._id)}
			<button
				class="w-full p-4 cursor-pointer border-b-1 border-gray-200"
				class:bg-gray-100={page.params.organizationId === organization._id}
				onclick={() => handleSelectOrganization(organization)}
			>
				<h3 class="font-medium text-gray-900">{organization.name}</h3>
			</button>
		{/each}
	</div>

	<!-- Right panel: Content from child routes -->
	<div class="w-2/3 overflow-y-auto">
		{@render children()}
	</div>
</div>
