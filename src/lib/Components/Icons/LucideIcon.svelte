<script lang="ts">
	export let icon: any;
	export let size: number = 15;
	export let color: string = '#97979a';
</script>

<svelte:component this={icon} {size} {color} />
