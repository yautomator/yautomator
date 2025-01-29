<script lang="ts">
	import Breadcrumb from '../lib/Components/Breadcrumb.svelte';
	import Sidebar from '../lib/Components/Sidebar/Sidebar.svelte';
	import '../globals.css';
	import { ChevronRight, Plus } from 'lucide-svelte';
	import Centralizer from '$lib/Components/Centralizer.svelte';
	import Label from '$lib/Components/Label.svelte';
	import TextButton from '$lib/Components/TextButton.svelte';
	import Founders from '$lib/Components/FoundersList.svelte';
	import FlexGroup from '$lib/Components/FlexGroup.svelte';
	import { founders, emptyFounder } from '$lib/States/founders.svelte';
	import { onDestroy, onMount, setContext } from 'svelte';
	import type { Snippet } from 'svelte';

	let header = $state<Snippet[]>([]);
	let footer = $state<Snippet[]>([]);

	setContext('layout', {
		setHeader(snippet: Snippet) {
			header.push(snippet);
			return onDestroy(() => {
				header.pop();
			});
		},
		setFooter(snippet: Snippet) {
			footer.push(snippet);
			return onDestroy(() => {
				footer.pop();
			});
		}
	});

	let { children }: { children: Snippet } = $props();
</script>

<Sidebar />

<header>
	<Centralizer>
		<div class="header-content">
			{#if header.length}
				{@render header[header.length - 1]?.()}
			{/if}
		</div>
	</Centralizer>
</header>

<main>
	<Centralizer>
		<div class="main-content">
			{@render children()}
		</div>
	</Centralizer>
</main>

<footer>
	<Centralizer>
		<div class="footer-content">
			{#if footer.length}
				{@render footer[header.length - 1]?.()}
			{/if}
		</div>
	</Centralizer>
</footer>

<style>
	header {
		grid-area: header;
		border-bottom: 1px solid var(--border-color);
		height: 50px;
		background-color: var(--main-background-color);
		position: sticky;
		top: 0;
	}

	footer {
		grid-area: footer;
		border-top: 1px solid var(--border-color);
		background-color: var(--main-background-color);
		position: sticky;
		height: 50px;
		bottom: 0;
	}

	aside {
		grid-area: rightbar;
	}

	main {
		grid-area: main;
	}

	.header-content,
	.footer-content,
	.main-content {
		width: 50%;
	}

	.header-content,
	.footer-content {
		display: flex;
		place-items: center;
	}

	.header-content {
		justify-content: space-between;
	}

	.footer-content {
		justify-content: flex-end;
	}
</style>
