<script lang="ts">
	import { page } from '$app/state';
	import Breadcrumb from '$lib/components/Breadcrumb.svelte';
	import Container from '$lib/components_new/shared/Container.svelte';

	const { data } = page;
</script>

<header>
	<Breadcrumb>
		{#snippet base()}
			Organizations
		{/snippet}

		{#snippet current()}
			<span>Launch</span>
		{/snippet}
	</Breadcrumb>
</header>

<main>
	{#each data.organizations.filter((organization: any) => organization.organizationType === 'LAUNCH') as organization}
		<Container>
			<h1>{organization.name}</h1>
		</Container>
	{/each}
</main>

<style>
	header {
		grid-area: header;
		border-bottom: 0.5px solid var(--border-color);
		height: 40px;
		display: flex;
		justify-content: space-between;
		padding: 8px 12px;
	}

	main {
		grid-area: main;
		overflow: auto;
		padding: 12px;
	}
</style>
