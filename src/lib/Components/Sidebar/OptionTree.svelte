<script lang="ts">
	import { ChevronsUpDown } from 'lucide-svelte';
	import chroma from 'chroma-js';

	interface SubItem {
		label: string;
		href: string;
	}

	export let label: string;
	export let icon: any;
	export let options: SubItem[] = [];
	export let iconColor: string;

	let expanded = false;
	let iconBackgroundColor = chroma(iconColor).alpha(0.3).hex();
	const toggleExpanded = () => (expanded = !expanded);
</script>

<li>
	<button on:click={toggleExpanded}>
		<div style:background-color={iconBackgroundColor}>
			<svelte:component this={icon} size={14} color={iconColor} />
		</div>
		<span>{label}</span>
		<ChevronsUpDown size={14} />
	</button>
	<ul class:expanded>
		{#each options as option}
			<li>
				<a href={option.href}>
					{option.label}
					<div></div>
				</a>
			</li>
		{/each}
	</ul>
</li>

<style>
	button,
	a {
		width: 100%;
		padding: 0.65em;
		border-radius: 0.3em;
		font-size: 0.8125rem;
		background: none;
		border: none;
		text-align: left;
		color: var(--sidebar-icon-fill);

		display: flex;
		place-items: center;
		gap: 0.6em;

		font-weight: 500;

		span {
			color: var(--main-text-color);
			flex-grow: 1;
		}

		&:hover {
			background-color: var(--button-hover-background-color);
		}

		div {
			display: flex;
			place-items: center;
			padding: 2px;
			border-radius: 3px;
		}
	}

	ul {
		display: block;
		list-style: none;

		li {
			display: flex;
			place-items: center;

			a {
				text-decoration: none;
				padding-left: 2.35em;
				display: flex;
				place-items: center;
				justify-content: space-between;

				div {
					width: 5px;
					height: 5px;
					background-color: #eed202;
					border-radius: 50%;
					margin-right: 4px;
				}
			}
		}
	}

	ul.expanded {
		display: none;
	}
</style>
