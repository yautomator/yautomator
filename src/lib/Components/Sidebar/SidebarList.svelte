<script lang="ts">
	let { children } = $props();
</script>

<ul>
	{@render children?.()}
</ul>

<style>
	ul {
		list-style: none;
		display: flex;
		flex-direction: column;
	}
</style>
