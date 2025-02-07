<script>
	import Founders from '$lib/Components/Founders/Founders.svelte';
	import { founders } from '$lib/States/founders.svelte';
	import { Plus } from 'lucide-svelte';

	import Button from '$lib/Components/Buttons/Button.svelte';
	import NoFounders from '$lib/Components/Founders/NoFounders.svelte';
	import LucideIcon from '$lib/Components/Icons/LucideIcon.svelte';
	import AddFounder from '$lib/Components/Modals/AddFounder.svelte';
	import { layout } from '$lib/States/layout.svelte';
	import { getContext } from 'svelte';

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

{#if founders.length === 0}
	<NoFounders />
{:else}
	<Founders />
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
