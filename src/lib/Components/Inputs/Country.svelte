<script lang="ts">
	import { ChevronDown, ChevronUp } from 'lucide-svelte';

	let isOpen = $state(false);
	let selectedCountry: Country | null = $state(null);

	let { placeholder } = $props();

	type Country = {
		name: string;
		code: string;
	};

	const countries: Country[] = [
		{ name: 'Brazil', code: 'BR' },
		{ name: 'United States', code: 'US' },
		{ name: 'Canada', code: 'CA' },
		{ name: 'United Kingdom', code: 'GB' },
		{ name: 'Germany', code: 'DE' },
		{ name: 'France', code: 'FR' },
		{ name: 'Australia', code: 'AU' }
	];

	const handleCountryChange = (country: Country) => {
		selectedCountry = country;
		isOpen = false;
	};
</script>

<div class="container">
	<button class="container__button" type="button" onclick={() => (isOpen = !isOpen)}>
		<span class:selected={selectedCountry}>{selectedCountry?.name ?? placeholder}</span>

		{#if isOpen}
			<ChevronUp size={16} />
		{:else}
			<ChevronDown size={16} />
		{/if}
	</button>
	<div class="container__list__wrapper">
		<ul class="container__list" class:isOpen>
			{#each countries as country}
				<li class="container__list__item">
					<button type="button" onclick={() => handleCountryChange(country)}>{country.name}</button>
				</li>
			{/each}
		</ul>
	</div>
</div>

<style>
	.container {
		position: relative;
		display: flex;
		flex-grow: 1;
		flex: 1;
	}

	.container__button {
		flex-grow: 1;
		border: none;
		background: var(--input-background-color);
		border: 1px solid var(--border-color);
		border-radius: 4px;
		display: flex;
		place-items: center;
		justify-content: space-between;
		padding: 12px;

		span {
			font-size: 0.8125rem;
			color: var(--secondary-text-color);
		}

		span.selected {
			color: var(--main-text-color);
		}

		:global(svg) {
			stroke: var(--secondary-text-color);
		}
	}

	.container__list__wrapper {
		overflow: hidden;
	}
	.container__list {
		display: none;
		position: absolute;
		top: calc(100% + 4px);
		background: var(--select-item-background-color);
		list-style: none;
		width: 100%;
		left: 0;
		text-align: left;
		border: 1px solid var(--modal-border-color);
		max-height: 200px;
		overflow-y: auto;
		border-radius: 8px;

		&.isOpen {
			display: block;
		}

		box-shadow:
			lch(0 0 0 / 0.188) 0px 3px 8px,
			lch(0 0 0 / 0.188) 0px 2px 5px,
			lch(0 0 0 / 0.188) 0px 1px 1px;

		&::-webkit-scrollbar {
			display: none;
		}
	}

	.container__list__item {
		font-size: 0.75rem;
		cursor: pointer;
		display: flex;

		button {
			width: 100%;
			text-align: left;
			background: none;
			border: none;
			padding: 12px;
			font-size: 0.75rem;
			cursor: pointer;
			color: var(--main-text-color);

			border-bottom: 1px solid var(--border-color);
		}
	}
</style>
