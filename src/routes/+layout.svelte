<script lang="ts">
	import Breadcrumb from '../lib/Components/Breadcrumb.svelte';
	import Sidebar from '../lib/Components/Sidebar/Sidebar.svelte';
	import '../globals.css';
	import { ChevronRight, Plus } from 'lucide-svelte';
	import Centralizer from '$lib/Components/Centralizer.svelte';
	import Label from '$lib/Components/Label.svelte';
	import TextButton from '$lib/Components/Buttons/TextButton.svelte';
	import FlexGroup from '$lib/Components/FlexGroup.svelte';
	import { founders, emptyFounder } from '$lib/States/founders.svelte';
	import { layout } from '$lib/States/layout.svelte';
	import BaseModal from '$lib/Components/Modals/Base.svelte';
	import { onDestroy, onMount, setContext } from 'svelte';
	import type { Snippet } from 'svelte';
	import Startup from '$lib/Components/Icons/Startup.svelte';

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

<div>
	<header>
		{#if header.length}
			{@render header[header.length - 1]?.()}
		{/if}
	</header>

	<main>
		{@render children()}
	</main>
</div>

<style>
	div {
		display: grid;
		grid-template-areas:
			'header'
			'main';

		grid-template-rows: 40px calc(100vh - 70px);
		border-radius: 4px;
		border: 0.5px solid var(--border-color);
		background-color: var(--main-background-color);
		margin: 8px 8px 8px 0px;
		overflow: hidden;
	}

	header {
		grid-area: header;
		border-bottom: 0.5px solid var(--border-color);
		height: 40px;
		display: flex;
	}

	main {
		grid-area: main;
		overflow: auto;
	}
</style>
