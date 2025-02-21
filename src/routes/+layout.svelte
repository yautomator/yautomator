<script lang="ts">
	import { navigating } from '$app/state';
	import NProgress from 'nprogress';
	import 'nprogress/nprogress.css';
	import type { Snippet } from 'svelte';
	import { onDestroy, setContext } from 'svelte';
	import '../globals.css';
	import Sidebar from '../lib/Components/Sidebar/Sidebar.svelte';

	let header = $state<Snippet[]>([]);

	setContext('layout', {
		setHeader(snippet: Snippet) {
			header.push(snippet);
			return onDestroy(() => {
				header.pop();
			});
		}
	});

	NProgress.configure({ showSpinner: false });

	let { children }: { children: Snippet } = $props();

	$effect(() => {
		if (navigating.to) {
			NProgress.start();
		}
		if (!navigating.to) {
			NProgress.done();
		}
	});
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

		grid-template-rows: 40px calc(100vh - 58px);
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
