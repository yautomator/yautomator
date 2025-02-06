<script lang="ts">
	import chroma from 'chroma-js';

	export let icon: any;
	export let color: string;

	let backgroundColor = chroma(color).alpha(0.3).hex();
</script>

<div style:background-color={backgroundColor}>
	<svelte:component this={icon} size={14} {color} />
</div>

<style>
	div {
		display: flex;
		place-items: center;
		padding: 2px;
		border-radius: 3px;
	}
</style>
