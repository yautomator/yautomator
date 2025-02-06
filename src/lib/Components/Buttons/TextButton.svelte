<script lang="ts">
	export let label: string;
	export let icon;
	export let type: 'button' | 'submit' | 'reset' | null = 'button';
	export let form: string | null = null;
	export let onClick: () => void;
</script>

<button on:click={onClick} {type} {form}>
	<svelte:component this={icon} size={14} />
	<span>{label}</span>
</button>

<style>
	button {
		border: none;
		background: none;
		color: var(--main-text-color);
		display: flex;
		gap: 10px;
		place-items: center;
		justify-content: space-between;
		border-radius: 5px;
		transition: background-color 0.2s;
		font: inherit;
		padding: 5px 8px;

		&:hover {
			background-color: #1e1e20;
		}
	}
</style>
