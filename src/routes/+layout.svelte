<script lang="ts">
	import { afterNavigate, beforeNavigate } from '$app/navigation';
	import { page } from '$app/state';
	import { layout } from '$lib/states/layout.svelte';

	import IconButton from '$lib/components_new/shared/IconButton.svelte';

	import { Sidebar } from '$lib/components_new/shared/sidebar';
	import YaShortLogo from '$lib/components_new/YAShortLogo.svelte';
	import { Separator } from 'bits-ui';
	import { LogOut, Palette } from 'lucide-svelte';
	import NProgress from 'nprogress';
	import 'nprogress/nprogress.css';
	import DiscordLogo from 'phosphor-svelte/lib/DiscordLogo';
	import EggCrack from 'phosphor-svelte/lib/EggCrack';
	import EnvelopeSimple from 'phosphor-svelte/lib/EnvelopeSimple';
	import Laptop from 'phosphor-svelte/lib/Laptop';
	import Lightbulb from 'phosphor-svelte/lib/Lightbulb';
	import Lightning from 'phosphor-svelte/lib/Lightning';
	import Link from 'phosphor-svelte/lib/Link';
	import PiggyBank from 'phosphor-svelte/lib/PiggyBank';
	import Rabbit from 'phosphor-svelte/lib/Rabbit';
	import SquaresFour from 'phosphor-svelte/lib/SquaresFour';
	import UsersFour from 'phosphor-svelte/lib/UsersFour';
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

	type SidebarGroupItem = {
		icon: any;
		label: string;
		href: string;
	};

	type SidebarGroup = {
		label: string;
		items: SidebarGroupItem[];
		renderBottomSeparator: boolean;
	};

	const sidebarGroups: SidebarGroup[] = [
		{
			label: 'STARTUP',
			renderBottomSeparator: true,
			items: [
				{
					icon: Laptop,
					label: 'About',
					href: '/startup/about'
				},
				{
					icon: Lightbulb,
					label: 'Business',
					href: '/startup/business'
				},
				{
					icon: UsersFour,
					label: 'Founders',
					href: '/startup/founders'
				},
				{
					icon: Link,
					label: 'Media & Links',
					href: '/startup/media-links'
				}
			]
		},
		{
			label: 'ORGANIZATIONS',
			renderBottomSeparator: true,
			items: [
				{
					icon: Rabbit,
					label: 'Accelerators',
					href: '/accelerators'
				},
				{
					icon: EggCrack,
					label: 'Incubators',
					href: '/incubators'
				},
				{
					icon: PiggyBank,
					label: 'Venture Capital',
					href: '/ventur	e-capital'
				},
				{
					icon: SquaresFour,
					label: 'Product Hunt',
					href: '/product-hunt'
				}
			]
		},
		{
			label: 'SUPPORT',
			renderBottomSeparator: false,
			items: [
				{
					icon: DiscordLogo,
					label: 'Discord',
					href: 'https://discord.gg/yandex'
				},
				{
					icon: EnvelopeSimple,
					label: 'Email',
					href: 'mailto:support@yandex.com'
				}
			]
		}
	];

	const themes = [
		{ value: 'light-monochrome', label: 'Light Monochrome', icon: Palette },
		{ value: 'dark-green', label: 'Dark Green', icon: Palette }
	];
</script>

<div>
	<Sidebar.Root>
		<Sidebar.Header>
			<YaShortLogo />
			<IconButton Icon={LogOut} />
		</Sidebar.Header>

		<Sidebar.Body>
			{#each sidebarGroups as group}
				<Sidebar.Group label={group.label}>
					{#each group.items as item}
						<Sidebar.Item active={item.href === page.url.pathname} href={item.href}>
							<item.icon size={18} />
							{item.label}
						</Sidebar.Item>
					{/each}
				</Sidebar.Group>

				{#if group.renderBottomSeparator}
					<Separator.Root />
				{/if}
			{/each}
		</Sidebar.Body>

		<Sidebar.Footer>
			<h4>@ 2025 YAutomator Inc.</h4>
		</Sidebar.Footer>
	</Sidebar.Root>

	<header>
		<Lightning size={24} />
	</header>

	<main>
		{@render children()}
	</main>
</div>

<style>
	div {
		height: 100vh;

		background-color: var(--background-color);

		color: var(--text-color);
		font-family: 'SF Pro Display';
		font-size: var(--font-size);

		display: grid;
		grid-template-columns: var(--sidebar-width) 1fr;
		grid-template-rows: var(--header-height) 1fr;
		grid-template-areas:
			'sidebar header'
			'sidebar main';

		header {
			grid-area: header;
			border-bottom: 1px solid var(--border-color);

			display: flex;
			place-items: center;
			padding-inline: var(--header-padding);
		}

		main {
			grid-area: main;
			padding: 20px;
		}

		h4 {
			width: 100%;
			font-size: var(--sidebar-group-label-font-size);
			color: var(--sidebar-group-label-color);
			text-align: center;
		}
	}
</style>
