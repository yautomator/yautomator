<script lang="ts">
	import Breadcrumb from '$lib/components/Breadcrumb.svelte';
	import SecondaryButton from '$lib/components/buttons/SecondaryButton.svelte';
	import SelectedStartupIcon from '$lib/components/icons/SelectedStartupIcon.svelte';
	import AddFounder from '$lib/components/modals/AddFounder.svelte';
	import EditFounder from '$lib/components/modals/EditFounder.svelte';
	import Table from '$lib/components/table/Table.svelte';
	import TableColumn from '$lib/components/table/TableColumn.svelte';
	import TableRow from '$lib/components/table/TableRow.svelte';
	import TableRowData from '$lib/components/table/TableRowData.svelte';
	import { layout } from '$lib/states/layout.svelte';
	import { modals } from '$lib/states/modals.svelte';
	import { type Founder } from '$lib/utils/common';
	import { CircleCheck, CircleDashed, Plus, UsersRound } from 'lucide-svelte';

	const openAddFounderModal = () => {
		modals.addFounderModal?.showModal();
	};

	const openEditFounderModal = (founder: Founder) => {
		layout.selectedFounder = founder;
		modals.editFounderModal?.showModal();
	};

	let founders = $derived(layout.selectedStartup?.founders);
</script>

<AddFounder />
<EditFounder />

<header>
	<Breadcrumb>
		{#snippet base()}
			<SelectedStartupIcon />
		{/snippet}

		{#snippet current()}
			<span>Founders</span>
		{/snippet}
	</Breadcrumb>

	<SecondaryButton onclick={openAddFounderModal}>
		<Plus size={14} strokeWidth={2.5} />
		<span>Add founder</span>
	</SecondaryButton>
</header>

<main>
	{#if founders?.length}
		<Table>
			{#snippet columns()}
				<TableColumn width="40%">Full name</TableColumn>
				<TableColumn width="10%">Country</TableColumn>
				<TableColumn width="10%">Linkedin</TableColumn>
				<TableColumn width="10%">Role</TableColumn>
				<TableColumn width="10%">Email</TableColumn>
				<TableColumn width="10%">Summary</TableColumn>
				<TableColumn width="10%">CV</TableColumn>
			{/snippet}

			{#snippet rows()}
				{#each founders as founder (founder._id)}
					<TableRow onclick={() => openEditFounderModal(founder)}>
						<TableRowData>
							{founder.firstName}
							{founder.lastName}
						</TableRowData>
						<TableRowData>
							{#if founder.country}
								<CircleCheck size={14} />
							{:else}
								<CircleDashed size={14} color="#eed202" />
							{/if}
						</TableRowData>
						<TableRowData>
							{#if founder.linkedin}
								<CircleCheck size={14} />
							{:else}
								<CircleDashed size={14} color="#eed202" />
							{/if}
						</TableRowData>
						<TableRowData>
							{#if founder.role}
								<CircleCheck size={14} />
							{:else}
								<CircleDashed size={14} color="#eed202" />
							{/if}
						</TableRowData>
						<TableRowData>
							{#if founder.email}
								<CircleCheck size={14} />
							{:else}
								<CircleDashed size={14} color="#eed202" />
							{/if}
						</TableRowData>
						<TableRowData>
							{#if founder.summary}
								<CircleCheck size={14} />
							{:else}
								<CircleDashed size={14} color="#eed202" />
							{/if}
						</TableRowData>
						<TableRowData>
							{#if founder.cvUrl}
								<CircleCheck size={14} />
							{:else}
								<CircleDashed size={14} color="#eed202" />
							{/if}
						</TableRowData>
					</TableRow>
				{/each}
			{/snippet}
		</Table>
	{:else}
		<div>
			<UsersRound size={32} />
			<span
				>No founder found, start adding founders to your startup with the button in the header.</span
			>
		</div>
	{/if}
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

		div {
			width: 100%;
			height: 100%;

			display: flex;
			justify-content: center;
			place-items: center;
			gap: 12px;

			span {
				width: 300px;
				font-size: 0.8125rem;
				color: var(--secondary-text-color);
			}
		}
	}
</style>
