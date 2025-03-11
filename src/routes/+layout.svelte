<script lang="ts">
	import { afterNavigate, beforeNavigate } from '$app/navigation';
	import Sidebar from '$lib/components/sidebar/Sidebar.svelte';
	import SidebarBody from '$lib/components/sidebar/SidebarBody.svelte';
	import SidebarGroup from '$lib/components/sidebar/SidebarGroup.svelte';
	import SidebarHeader from '$lib/components/sidebar/SidebarHeader.svelte';
	import SidebarLinkItem from '$lib/components/sidebar/SidebarLinkItem.svelte';
	import StartupSwitcher from '$lib/components/sidebar/StartupSwitcher.svelte';
	import { layout } from '$lib/states/layout.svelte';
	import {
		Box,
		BriefcaseBusiness,
		DollarSign,
		Egg,
		Link2,
		Rocket,
		Telescope,
		Users
	} from 'lucide-svelte';
	import NProgress from 'nprogress';
	import 'nprogress/nprogress.css';
	import { onMount } from 'svelte';
	import '../app.css';
	import type { LayoutProps } from './$types';

	let { data, children }: LayoutProps = $props();

	NProgress.configure({ showSpinner: false });

	beforeNavigate(() => {
		NProgress.start();
	});

	afterNavigate(() => {
		NProgress.done();
	});

	onMount(() => {
		const FIRST_STARTUP_INDEX = 0;
		layout.selectedStartup = data.startups[FIRST_STARTUP_INDEX];
	});
</script>

<Sidebar>
	<SidebarHeader>
		<StartupSwitcher />
	</SidebarHeader>
	<SidebarBody>
		<SidebarGroup label="Fill startup form">
			<SidebarLinkItem href="/startup/basic-information">
				<Box size={15} strokeWidth={3} />
				Basic information
			</SidebarLinkItem>
			<SidebarLinkItem href="/startup/business-information">
				<BriefcaseBusiness size={15} strokeWidth={3} />
				Business information
			</SidebarLinkItem>
			<SidebarLinkItem href="/startup/media-and-links">
				<Link2 size={15} strokeWidth={3} />
				Media & Links
			</SidebarLinkItem>
			<SidebarLinkItem href="/startup/founders">
				<Users size={15} strokeWidth={3} />
				Founders
			</SidebarLinkItem>
		</SidebarGroup>
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
			<SidebarLinkItem href="/organizations/launch">
				<Telescope size={15} strokeWidth={2} />
				Launch
			</SidebarLinkItem>
		</SidebarGroup>
	</SidebarBody>
</Sidebar>

<div>
	{@render children()}
</div>

<style>
	div {
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
</style>
