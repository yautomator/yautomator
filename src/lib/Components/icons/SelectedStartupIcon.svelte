<script lang="ts">
	import StartupIcon from '$lib/components/icons/StartupIcon.svelte';
	import { layout } from '$lib/states/layout.svelte';
</script>

{#if layout.selectedStartup}
	<StartupIcon
		name={layout.selectedStartup.abbreviation}
		backgroundColor={layout.selectedStartup.color}
	/>
{/if}
