<script lang="ts">
	import { founders } from '$lib/States/founders.svelte';
	import { layout } from '$lib/States/layout.svelte';
	import { CircleCheck, CircleDashed, FileCheck, FileQuestion, Trash } from 'lucide-svelte';
	import IconButton from '../Buttons/IconButton.svelte';
	import LucideIcon from '../Icons/LucideIcon.svelte';

	const handleDelete = (e: any, founder: (typeof founders)[number]) => {
		e.stopPropagation();
		const index = founders.findIndex((f) => f === founder);
		if (index !== -1) {
			founders.splice(index, 1);
		}
	};

	const handleFounderClick = (founder: (typeof founders)[number]) => {
		layout.selectedFounder = founder;
		layout.showAddFounderModal = true;
	};
</script>

<table>
	<thead>
		<tr>
			<th class="name-header">Name</th>
			<th class="summary-header">Summary</th>
			<th class="cv-header">CV</th>
			<th class="linkedin-url-header">Linkedin URL</th>
			<th class="role-header">Role</th>
			<th class="country-header">Country</th>
			<th class="action-header"></th>
		</tr>
	</thead>
	<tbody>
		{#each founders as founder}
			<tr on:click={() => handleFounderClick(founder)}>
				<td>{founder.name} {founder.surname}</td>
				<td class="summary-body">
					{#if founder.summary}
						<LucideIcon icon={CircleCheck} />
					{:else}
						<LucideIcon icon={CircleDashed} color="#9f9837" />
					{/if}
				</td>
				<td class="cv-body">
					{#if founder.cv}
						<LucideIcon icon={FileCheck} />
					{:else}
						<LucideIcon icon={FileQuestion} color="#9f9837" />
					{/if}
				</td>
				<td class="linkedin-url-body">
					{#if founder.linkedinProfileUrl}
						<LucideIcon icon={CircleCheck} />
					{:else}
						<LucideIcon icon={CircleDashed} color="#9f9837" />
					{/if}
				</td>
				<td>{founder.role}</td>
				<td>{founder.countryOfLiving}</td>
				<td class="action-body">
					<IconButton icon={Trash} onClick={(e: any) => handleDelete(e, founder)} />
				</td>
			</tr>
		{/each}
	</tbody>
</table>

<style>
	.action-body {
		display: flex;
		justify-content: flex-end;
		place-items: center;
	}

	.summary-body,
	.summary-header,
	.linkedin-url-header,
	.linkedin-url-body,
	.cv-header,
	.cv-body {
		text-align: center;
	}

	table {
		width: 100%;
		border-collapse: collapse;

		thead {
			height: 30px;

			tr th {
				border-bottom: 0.5px solid var(--border-color);
				font-size: 0.75rem;
				font-weight: 350;
				padding-left: 30px;
				color: #949597;
				text-align: left;
			}
		}

		tbody {
			tr {
				cursor: pointer;

				&:hover {
					background-color: #151618;
				}

				td {
					height: 48px;
					font-size: 0.8125rem;
					white-space: nowrap;

					padding-left: 30px;

					&:last-child {
						padding-right: 30px;
					}
				}
			}
		}
	}
</style>
