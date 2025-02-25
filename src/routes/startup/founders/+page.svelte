<script lang="ts">
	import { enhance } from '$app/forms';
	import { TableAlignment } from '$lib/Common';
	import IconButton from '$lib/Components/Buttons/IconButton.svelte';
	import SecondaryButton from '$lib/Components/Buttons/SecondaryButton.svelte';
	import LucideIcon from '$lib/Components/Icons/LucideIcon.svelte';
	import AddFounder from '$lib/Components/Modals/AddFounder.svelte';
	import EditFounder from '$lib/Components/Modals/EditFounder.svelte';
	import Table from '$lib/Components/Table/Table.svelte';
	import TableColumnLabel from '$lib/Components/Table/TableColumnLabel.svelte';
	import TableRow from '$lib/Components/Table/TableRow.svelte';
	import TableRowData from '$lib/Components/Table/TableRowData.svelte';
	import { modals } from '$lib/States/modals.svelte';
	import { CircleCheck, CircleDashed, FileCheck, FileQuestion, Plus, Trash } from 'lucide-svelte';
	import NProgress from 'nprogress';
	import { getContext, type Snippet } from 'svelte';
	import type { PageProps, SubmitFunction } from './$types';

	let { data }: PageProps = $props();
	let { setHeader } = getContext<{ setHeader: (header: Snippet) => void }>('layout');

	setHeader(header);

	const openAddFounderModal = () => {
		modals.addFounderModal?.showModal();
	};

	let isLoadingDelete = $state(false);

	const handleDeleteFounder: SubmitFunction = () => {
		isLoadingDelete = true;
		NProgress.start();

		return async ({ result, update }) => {
			if (result.type === 'success') {
				await update();
			} else {
				alert('Failed to delete founder. Please try again.');
			}

			isLoadingDelete = false;
			NProgress.done();
		};
	};
</script>

<AddFounder />
<EditFounder />

{#snippet header()}
	<div class="header">
		<SecondaryButton onclick={openAddFounderModal}>
			<Plus size={14} strokeWidth={2.5} />
			<span>Add founder</span>
		</SecondaryButton>
	</div>
{/snippet}

{#if data.founders}
	<Table data={data.founders}>
		{#snippet header()}
			<TableColumnLabel>Name</TableColumnLabel>
			<TableColumnLabel>CV</TableColumnLabel>
			<TableColumnLabel>Linkedin URL</TableColumnLabel>
			<TableColumnLabel>Role</TableColumnLabel>
			<TableColumnLabel />
		{/snippet}

		{#snippet body()}
			{#each data.founders as founder (founder)}
				<TableRow>
					<TableRowData>{founder.firstName} {founder.lastName}</TableRowData>
					<TableRowData>
						<LucideIcon
							icon={founder.cvUrl ? FileCheck : FileQuestion}
							color={founder.cvUrl ? undefined : '#9f9837'}
						/>
					</TableRowData>
					<TableRowData>
						<LucideIcon
							icon={founder.linkedinProfileUrl ? CircleCheck : CircleDashed}
							color={founder.linkedinProfileUrl ? undefined : '#9f9837'}
						/>
					</TableRowData>
					<TableRowData>{founder.role}</TableRowData>
					<TableRowData align={TableAlignment.RIGHT}>
						<form method="POST" action="?/delete" use:enhance={handleDeleteFounder}>
							<input type="hidden" name="id" value={founder._id} />
							<IconButton disabled={isLoadingDelete} type="submit">
								<Trash size={15} />
							</IconButton>
						</form>
					</TableRowData>
				</TableRow>
			{/each}
		{/snippet}
	</Table>
{:else}
	<p class="no-founders">No founders found</p>
{/if}

<style>
	.header {
		display: flex;
		width: 100%;
		justify-content: flex-end;
		place-items: center;
		padding: 7px 30px;

		div {
			display: flex;
			place-items: center;
		}
	}
</style>
