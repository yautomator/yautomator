<script lang="ts">
	import { afterNavigate, beforeNavigate } from '$app/navigation';
	import { PUBLIC_STRIPE_KEY } from '$env/static/public';
	import logo from '$lib/assets/images/logo.png';
	import { loadStripe } from '@stripe/stripe-js';

	import { page } from '$app/state';
	import NProgress from 'nprogress';
	import 'nprogress/nprogress.css';

	import { Sidebar } from '$lib/components/sidebar';
	import '../../../app.css';
	import type { LayoutProps } from './$types';
	let { children }: LayoutProps = $props();

	NProgress.configure({ showSpinner: false });

	beforeNavigate(() => {
		NProgress.start();
	});

	afterNavigate(() => {
		NProgress.done();
	});

	const handleBuyTokens = async (priceId: string) => {
		const stripe = await loadStripe(PUBLIC_STRIPE_KEY);

		const response = await fetch('/api/checkout', {
			method: 'POST',
			body: JSON.stringify({ priceId, currentPageUrl: page.url })
		});

		const { sessionId } = await response.json();

		await stripe?.redirectToCheckout({ sessionId });
	};

	const baseUrl = `/startup/${page.params.startupId}`;
</script>

<div class="flex h-screen">
	<Sidebar.Root>
		<div class="flex items-center justify-center py-[15px]">
			<img src={logo} alt="logo" class="w-6 h-6" />
		</div>

		<Sidebar.Item href={`${baseUrl}/dashboard`} label="Dashboard" icon="mage:dashboard-4" />
		<Sidebar.Item href={`${baseUrl}/startup`} label="Startup" icon="mage:screencast" />
		<Sidebar.Item
			href={`${baseUrl}/organizations`}
			label="Organizations"
			icon="mage:checklist-note"
		/>
		<Sidebar.Divider />
		<Sidebar.Item href={`${baseUrl}/settings`} label="Settings" icon="mage:discord" />
	</Sidebar.Root>

	<main class="w-full max-h-screen overflow-y-auto">
		{@render children()}
	</main>
</div>
