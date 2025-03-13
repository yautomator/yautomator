<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children, label }: { children?: Snippet; label: string } = $props();

	let isOpen = $state(true);
</script>

<div>
	<span>
		{label}
	</span>

	<ul>
		{@render children?.()}
	</ul>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		gap: 2px;

		span {
			color: var(--secondary-text-color);
			font-size: 0.75rem;
			font-weight: 500;
			padding: 4px;
		}
	}

	ul {
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 2px;
		margin-bottom: 16px;
	}
</style>
