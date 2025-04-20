<script lang="ts">
	import { afterNavigate, beforeNavigate } from '$app/navigation';
	import { PUBLIC_STRIPE_KEY } from '$env/static/public';
	import { loadStripe } from '@stripe/stripe-js';

	const STARTER_TOKENS_PACKAGE_PRICE_ID = 'price_1RBiuNFwuyLmQDl0CQ4qK2JR';
	const ADVANCED_TOKENS_PACKAGE_PRICE_ID = 'price_1RBiwBFwuyLmQDl0DvShKz7n';

	import NProgress from 'nprogress';
	import 'nprogress/nprogress.css';
	import DiscordLogo from 'phosphor-svelte/lib/DiscordLogo';
	import EnvelopeSimple from 'phosphor-svelte/lib/EnvelopeSimple';
	import Laptop from 'phosphor-svelte/lib/Laptop';

	import { page } from '$app/state';
	import { Button } from 'bits-ui';
	import { BagSimple } from 'phosphor-svelte';
	import Link from 'phosphor-svelte/lib/Link';
	import Rabbit from 'phosphor-svelte/lib/Rabbit';
	import UsersFour from 'phosphor-svelte/lib/UsersFour';
	import '../../../app.css';
	import type { LayoutProps } from './$types';
	let { data, children }: LayoutProps = $props();

	NProgress.configure({ showSpinner: false });

	beforeNavigate(() => {
		NProgress.start();
	});

	afterNavigate(() => {
		NProgress.done();
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

	let sidebarGroups: SidebarGroup[] = $derived([
		{
			label: 'STARTUP',
			renderBottomSeparator: true,
			items: [
				{
					icon: Laptop,
					label: 'About',
					href: `/startup/${page.params.id}/about`
				},
				{
					icon: BagSimple,
					label: 'Business',
					href: `/startup/${page.params.id}/business`
				},
				{
					icon: UsersFour,
					label: 'Founders',
					href: `/startup/${page.params.id}/founders`
				},
				{
					icon: Link,
					label: 'Media & Links',
					href: `/startup/${page.params.id}/media-links`
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
					href: `/startup/${page.params.id}/organizations/accelerators`
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
	]);

	const handleBuyTokens = async (priceId: string) => {
		const stripe = await loadStripe(PUBLIC_STRIPE_KEY);

		const response = await fetch('/api/checkout', {
			method: 'POST',
			body: JSON.stringify({ priceId, currentPageUrl: page.url })
		});

		const { sessionId } = await response.json();

		await stripe?.redirectToCheckout({ sessionId });
	};
</script>

<div class="flex h-screen">
	<aside class="border-r-1 border-gray-950 w-[250px]">
		<nav>
			<select class="w-full p-2 border-1 border-gray-950">
				<option value={STARTER_TOKENS_PACKAGE_PRICE_ID}>Commfuze Inc.</option>
				<option value={ADVANCED_TOKENS_PACKAGE_PRICE_ID}>YAutomator Inc.</option>
				<option value={ADVANCED_TOKENS_PACKAGE_PRICE_ID}>Frispeech Inc.</option>
			</select>
			<Button.Root
				class="text-sm font-medium p-2 border-1 border-gray-950 w-full cursor-pointer"
				onclick={() => handleBuyTokens(STARTER_TOKENS_PACKAGE_PRICE_ID)}
			>
				Buy 25 tokens
			</Button.Root>
			<Button.Root
				class="text-sm font-medium p-2 border-1 border-gray-950 w-full cursor-pointer"
				onclick={() => handleBuyTokens(ADVANCED_TOKENS_PACKAGE_PRICE_ID)}
			>
				Buy 60 tokens
			</Button.Root>

			<ul>
				{#each sidebarGroups as group}
					<li>
						<div class="text-sm font-medium p-4">{group.label}</div>
						<ul>
							{#each group.items as item}
								<li>
									<a href={item.href}>{item.label}</a>
								</li>
							{/each}
						</ul>
					</li>
				{/each}
			</ul>
		</nav>
	</aside>
	<main class="w-full">
		{@render children()}
	</main>
</div>
