<script lang="ts">
	import { afterNavigate, beforeNavigate } from '$app/navigation';
	import Selector from '$lib/Components/Sidebar/Selector.svelte';
	import Sidebar from '$lib/Components/Sidebar/Sidebar.svelte';
	import SidebarGroup from '$lib/Components/Sidebar/SidebarGroup.svelte';
	import SidebarLinkItem from '$lib/Components/Sidebar/SidebarLinkItem.svelte';
	import SidebarList from '$lib/Components/Sidebar/SidebarList.svelte';
	import { Box, DollarSign, Egg, Rocket, Target, Telescope, Users } from 'lucide-svelte';
	import NProgress from 'nprogress';
	import 'nprogress/nprogress.css';
	import type { Snippet } from 'svelte';
	import { onDestroy, setContext } from 'svelte';
	import '../globals.css';

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

	beforeNavigate(() => {
		NProgress.start();
	});

	afterNavigate(() => {
		NProgress.done();
	});
</script>

<Sidebar>
	{#snippet header()}
		<Selector />
	{/snippet}

	{#snippet body()}
		<SidebarList>
			<SidebarLinkItem href="/startup/my-startup">
				<Box size={15} strokeWidth={2} />
				My issues
			</SidebarLinkItem>
			<SidebarLinkItem href="/startup/founders">
				<Users size={15} strokeWidth={2} />
				Founders
			</SidebarLinkItem>
			<SidebarLinkItem href="/startup/product">
				<Target size={15} strokeWidth={2} />
				Drafts
			</SidebarLinkItem>

			<SidebarGroup label="Apply to organizations">
				<SidebarLinkItem href="/organizations/accelerators">
					<Rocket size={15} strokeWidth={2} />
					Accelerators
				</SidebarLinkItem>
				<SidebarLinkItem href="/organizations/incubators">
					<Egg size={15} strokeWidth={2} />
					Incubators
				</SidebarLinkItem>
				<SidebarLinkItem href="/organizations/venture-capital">
					<DollarSign size={15} strokeWidth={2} />
					Venture capital
				</SidebarLinkItem>
				<SidebarLinkItem href="/organizations/product-hunt">
					<Telescope size={15} strokeWidth={2} />
					Product Hunt
				</SidebarLinkItem>
			</SidebarGroup>
		</SidebarList>
	{/snippet}
</Sidebar>

<div class="content">
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
	.content {
		grid-area: content;

		display: grid;
		grid-template-areas:
			'header'
			'main';

		grid-template-rows: 40px 1fr;
		border: 0.5px solid var(--border-color);
		background-color: var(--main-background-color);
		overflow: hidden;
		margin: 8px 8px 8px 0px;
		border-radius: 4px;
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
