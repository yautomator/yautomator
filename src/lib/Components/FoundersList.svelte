<script lang="ts">
	import Founder from './Founder.svelte';
	import NoFounders from './NoFounders.svelte';
	import { founders } from '$lib/States/founders.svelte';

	const onFounderDelete = (index: number) => founders.splice(index, 1);

	const handleSubmit = (e: SubmitEvent) => {
		e.preventDefault();
	};
</script>

<section>
	{#if founders.length === 0}
		<NoFounders />
	{:else}
		<form id="founders-form" on:submit={handleSubmit}>
			{#each founders as founder, index (founder)}
				<Founder {index} {founder} {onFounderDelete} />
			{/each}
		</form>
	{/if}
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		padding: 30px 0px;
		gap: 10px;
	}

	form {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 30px;
	}
</style>
