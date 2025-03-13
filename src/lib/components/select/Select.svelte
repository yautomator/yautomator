<script lang="ts">
	import { getCountries, type Country } from '$lib/utils/geolocation';
	import { ChevronDown, ChevronUp } from 'lucide-svelte';
	import SelectItem from './SelectItem.svelte';

	interface SelectProps {
		placeholder: string;
		value: Country | null;
		name: string;
	}

	let { placeholder, value, name }: SelectProps = $props();

	let isOpen = $state(false);

	const handleCountryChange = (country: Country) => {
		value = country;
		isOpen = false;
	};
</script>

<div>
	<button
		class:selected={value}
		class="container__button"
		type="button"
		onclick={() => (isOpen = !isOpen)}
	>
		<span>
			{#if value}
				<value.flag size={15} />
				{value.name}
			{:else}
				{placeholder}
			{/if}
		</span>

		{#if isOpen}
			<ChevronUp size={16} />
		{:else}
			<ChevronDown size={16} />
		{/if}
	</button>

	<ul class:isOpen>
		<input type="hidden" {name} value={value?.iso} />

		{#each getCountries() as country}
			<SelectItem onclick={() => handleCountryChange(country)}>
				<country.flag size={15} />
				{country.name}
			</SelectItem>
		{/each}
	</ul>
</div>

<style>
	div {
		position: relative;
	}

	button {
		width: 100%;
		background: var(--input-background-color);
		border: 1px solid var(--border-color);
		border-radius: 4px;
		padding: 12px;

		display: flex;
		place-items: center;

		font-size: 0.8125rem;
		color: var(--secondary-text-color);

		&.selected {
			color: var(--main-text-color);
		}

		:global(svg) {
			stroke: var(--secondary-text-color);
			margin-left: auto;
		}

		span {
			text-align: left;
			display: flex;
			gap: 12px;
		}
	}

	ul {
		display: none;
		position: absolute;
		width: 100%;
		left: 0;
		top: calc(100% + 4px);

		list-style: none;
		text-align: left;
		max-height: 200px;
		overflow-y: auto;
		border-radius: 8px;
		padding: 4px;

		background: var(--select-item-background-color);
		border: 1px solid var(--modal-border-color);

		&.isOpen {
			display: block;
		}

		&::-webkit-scrollbar {
			display: none;
		}
	}
</style>
