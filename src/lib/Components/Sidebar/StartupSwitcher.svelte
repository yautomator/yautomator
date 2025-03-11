<script lang="ts">
	import { page } from '$app/state';
	import StartupIcon from '$lib/components/icons/StartupIcon.svelte';
	import { layout } from '$lib/states/layout.svelte';
	import type { Startup } from '$lib/utils/common';
	import { ChevronsUpDown } from 'lucide-svelte';
	import SelectedStartupIcon from '../icons/SelectedStartupIcon.svelte';

	let show = $state(false);

	const toggleShow = () => (show = !show);

	const toggleStartup = async (startup: Startup) => {
		toggleShow();
		layout.selectedStartup = startup;
	};
</script>

<div>
	<button onclick={toggleShow}>
		{#if layout.selectedStartup}
			<SelectedStartupIcon />
			<span>{layout.selectedStartup.name}</span>
			<ChevronsUpDown size={15} />
		{/if}
	</button>
	<ul class:show>
		{#each page.data.startups as startup}
			<li>
				<button onclick={() => toggleStartup(startup)}>
					<StartupIcon name={startup.abbreviation} backgroundColor={startup.color} />
					{startup.name}
				</button>
			</li>
		{/each}
	</ul>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;

		> button {
			height: 40px;
			border-radius: 4px;
			padding: 12px;
			transition: all 0.2s;

			background: none;
			background: var(--main-background-color);
			border: 0.5px solid var(--border-color);
			color: var(--main-text-color);

			display: flex;
			gap: 8px;
			place-items: center;

			font-weight: 600;
			letter-spacing: -0.00625rem;
			font-size: 0.875rem;
			font-variation-settings: 'opsz' 32;

			:global(svg) {
				margin-left: auto;
				stroke: var(--secondary-text-color);
			}

			&:hover {
				background: var(--main-background-color);
			}
		}

		ul {
			display: none;
			flex-direction: column;
			padding: 4px;
			background: var(--main-background-color);
			border: 0.5px solid var(--border-color);
			margin-top: 8px;
			border-radius: 4px;
			gap: 4px;

			&.show {
				display: flex;
			}

			li {
				display: flex;
				flex-direction: column;

				button {
					height: 40px;
					border-radius: 4px;
					padding: 12px 8px;
					transition: all 0.2s;

					background: none;
					border: none;
					color: var(--main-text-color);

					display: flex;
					place-items: center;
					gap: 8px;

					letter-spacing: -0.00625rem;
					font-size: 0.75rem;

					&:hover {
						background: #151618;
					}
				}
			}
		}
	}
</style>
