<script lang="ts">
	import LucideIcon from '../Icons/LucideIcon.svelte';

	export let icon;
	export let onClick: (e?: MouseEvent) => void;
</script>

<button on:click={onClick}>
	<LucideIcon {icon} size={14} />
</button>

<style>
	button {
		border: none;
		background: none;
		padding: 8px;
		display: flex;
		color: var(--main-text-color);
		place-items: center;
		border-radius: 5px;
		transition: background-color 0.2s;

		&:hover {
			background-color: #1e1e20;
		}
	}

	button:hover :global(svg) {
		stroke: white;
	}
</style>
