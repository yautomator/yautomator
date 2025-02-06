<script>
	import Founders from '$lib/Components/Founders/Founders.svelte';
	import { Plus } from 'lucide-svelte';
	import { founders } from '$lib/States/founders.svelte';

	import { getContext } from 'svelte';
	import { layout } from '$lib/States/layout.svelte';
	import NoFounders from '$lib/Components/Founders/NoFounders.svelte';
	import Startup from '$lib/Components/Icons/Startup.svelte';
	import AddFounder from '$lib/Components/Modals/AddFounder.svelte';
	import Button from '$lib/Components/Buttons/Button.svelte';
	import LucideIcon from '$lib/Components/Icons/LucideIcon.svelte';

	const { setHeader } = getContext('layout');

	setHeader(header);

	const openAddFounderModal = () => {
		layout.showAddFounderModal = true;
	};
</script>

<AddFounder />

{#snippet header()}
	<div class="header">
		<Button onClick={openAddFounderModal} background="#1c1d20">
			<LucideIcon icon={Plus} />
			<span>Add founder</span>
		</Button>
	</div>
{/snippet}

<section>
	{#if founders.length === 0}
		<NoFounders />
	{:else}
		<Founders />
	{/if}
</section>

<style>
	section {
		height: 100%;
		gap: 10px;
		overflow: scroll;
	}

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
