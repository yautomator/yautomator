<script lang="ts">
	import Breadcrumb from '../Breadcrumb.svelte';
	import Startup from '../Icons/Startup.svelte';
	import Base from './Base.svelte';
	import Button from '../Buttons/Button.svelte';
	import FloatingInput from '../Inputs/FloatingInput.svelte';
	import FloatingTextarea from '../Inputs/FloatingTextarea.svelte';
	import FlexGroup from '../FlexGroup.svelte';
	import FileDropInput from '../Inputs/FileDropInput.svelte';
	import { founders } from '$lib/States/founders.svelte';
	import { layout } from '$lib/States/layout.svelte';
	import type { Founder } from '$lib/Common';

	let founder = $state<Founder>({
		name: '',
		surname: '',
		role: '',
		countryOfLiving: '',
		linkedinProfileUrl: '',
		email: '',
		summary: '',
		cv: null as File | null
	});

	$effect(() => {
		if (layout.selectedFounder) founder = { ...layout.selectedFounder };
	});

	const handleSubmit = () => {
		if (layout.selectedFounder) {
			const index = founders.findIndex((f) => f === layout.selectedFounder);
			if (index !== -1) founders[index] = founder;
		} else {
			founders.push(founder);
		}

		layout.showAddFounderModal = false;
		layout.selectedFounder = null;
	};
</script>

<Base>
	{#snippet header()}
		<Breadcrumb>
			{#snippet base()}
				<Startup />
			{/snippet}
			{#snippet current()}
				<span>{layout.selectedFounder ? 'Edit' : 'New'} founder</span>
			{/snippet}
		</Breadcrumb>
	{/snippet}

	<form id="founder" method="POST">
		<FlexGroup>
			<FloatingInput type="text" label="Name" name="name" bind:value={founder.name} required />
			<FloatingInput
				type="text"
				label="Surname"
				name="surname"
				bind:value={founder.surname}
				required
			/>
		</FlexGroup>

		<FlexGroup>
			<FloatingInput
				type="text"
				label="Country"
				name="country"
				bind:value={founder.countryOfLiving}
				required
			/>
			<FloatingInput
				label="LinkedIn URL"
				name="linkedinUrl"
				bind:value={founder.linkedinProfileUrl}
				type="url"
			/>
		</FlexGroup>

		<FlexGroup>
			<FloatingInput type="text" label="Role" name="role" bind:value={founder.role} required />
			<FloatingInput type="email" label="Email" name="email" bind:value={founder.email} required />
		</FlexGroup>

		<FloatingTextarea label="Summary" name="summary" bind:value={founder.summary} required />
		<FileDropInput name="cv" />
	</form>

	{#snippet footer()}
		<Button onClick={() => {}} type="submit" form="founder" background="#5e6ad2">
			<span>{layout.selectedFounder ? 'Save' : 'Add'} founder</span>
		</Button>
	{/snippet}
</Base>

<style>
	form {
		display: flex;
		flex-direction: column;
		gap: 12px;
	}
</style>
