<script lang="ts">
	import { ChevronDown } from 'lucide-svelte';
	import type { Snippet } from 'svelte';
	import SidebarItemList from './SidebarList.svelte';

	let { children, label }: { children?: Snippet; label: string } = $props();

	let isOpen = $state(true);
</script>

<div>
	<li>
		<button onclick={() => (isOpen = !isOpen)}>
			<span>
				{label}
			</span>
			<ChevronDown size={14} />
		</button>
	</li>

	{#if isOpen}
		<SidebarItemList>
			{@render children?.()}
		</SidebarItemList>
	{/if}
</div>

<style>
	div {
		margin-top: 16px;
		display: flex;
		flex-direction: column;
		gap: 4px;
	}

	button {
		background: none;
		border: none;
		display: flex;
		place-items: center;
		width: 100%;
		padding: 4px;
		gap: 4px;
		font-size: 1.2rem;

		:global(svg) {
			stroke: var(--secondary-text-color);
		}

		span {
			color: var(--secondary-text-color);
		}
	}
</style>
