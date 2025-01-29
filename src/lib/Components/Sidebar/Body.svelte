<script lang="ts">
	import { ChevronsUpDown } from 'lucide-svelte';
</script>

<ul>
	<slot></slot>
</ul>

<style>
	ul {
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 8px;
	}
</style>
