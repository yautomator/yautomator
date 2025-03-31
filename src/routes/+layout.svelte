<script lang="ts">
	import { afterNavigate, beforeNavigate } from '$app/navigation';
	import { page } from '$app/state';
	import { layout } from '$lib/states/layout.svelte';

	import IconButton from '$lib/components_new/shared/icon-button.svelte';
	import LayoutContainer from '$lib/components_new/shared/layout-container.svelte';
	import { Sidebar } from '$lib/components_new/ui/sidebar';
	import { Button, Select, Separator } from 'bits-ui';

	import NProgress from 'nprogress';
	import 'nprogress/nprogress.css';
	import DiscordLogo from 'phosphor-svelte/lib/DiscordLogo';
	import SignOut from 'phosphor-svelte/lib/SignOut';
	import Plus from 'phosphor-svelte/lib/Plus';
	import EnvelopeSimple from 'phosphor-svelte/lib/EnvelopeSimple';
	import Laptop from 'phosphor-svelte/lib/Laptop';

	import Lightning from 'phosphor-svelte/lib/Lightning';
	import Link from 'phosphor-svelte/lib/Link';
	import Rabbit from 'phosphor-svelte/lib/Rabbit';
	import UsersFour from 'phosphor-svelte/lib/UsersFour';
	import { onMount } from 'svelte';
	import '../app.css';
	import type { LayoutProps } from './$types';
	import { BagSimple, CaretUpDown, Check, Palette } from 'phosphor-svelte';
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
					icon: BagSimple,
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
					label: 'Apply',
					href: '/accelerators'
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
</script>

<LayoutContainer>
	<Sidebar.Root class="w-[250px] bg-gray-950 flex flex-col border-r-1 border-white/10">
		<Sidebar.Header
			class="flex place-items-center justify-between p-3  h-[55px] border-b-1 border-white/10 text-white"
		>
			<div class="flex place-items-center gap-3 ml-2">
				<Lightning size={15} weight="fill" />
				<h4>
					320
					<span class="text-sm text-gray-400">Tokens</span>
				</h4>
			</div>

			<Button.Root class="p-2 rounded-md border-1 border-white/10 hover:bg-white/10 ">
				<Plus size={15} />
			</Button.Root>
		</Sidebar.Header>

		<Sidebar.Body>
			{#each sidebarGroups as group}
				<Sidebar.Group class="flex flex-col gap-2 py-4">
					<Sidebar.GroupLabel
						class="font-mono font-medium tracking-widest uppercase text-xs/6 text-gray-400 px-6"
						>{group.label}</Sidebar.GroupLabel
					>
					<Sidebar.ItemList class="flex flex-col gap-2">
						{#each group.items as item}
							<Sidebar.Item>
								<a
									href={item.href}
									class="inline-flex w-full px-5 items-center gap-3 text-sm/7 text-gray-300 **:[svg]:first:sm:size-4 hover:text-gray-950 dark:hover:text-white aria-[current]:bg-white/10"
									aria-current={item.href === page.url.pathname ? 'page' : undefined}
								>
									<item.icon
										size={18}
										weight={item.href === page.url.pathname ? 'fill' : 'regular'}
									/>
									{item.label}
								</a>
							</Sidebar.Item>
						{/each}
					</Sidebar.ItemList>
				</Sidebar.Group>

				{#if group.renderBottomSeparator}
					<Separator.Root class="bg-white/10 h-px" />
				{/if}
			{/each}

			<div class="p-4 pb-0 flex justify-end place-items-end flex-col">
				<Select.Root type="single">
					<Select.Trigger
						class="flex place-items-center p-[10px] rounded-md text-sm text-gray-400  border-1 border-white/10 w-full"
						aria-label="Select a theme"
					>
						<Palette class="text-muted-foreground mr-[9px] size-5" />
						Selected startup
						<CaretUpDown class="text-muted-foreground ml-auto size-4" />
					</Select.Trigger>
					<Select.Portal>
						<Select.Content
							class="focus-override border-muted bg-background shadow-popover data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 outline-hidden z-50 h-96 max-h-[var(--bits-select-content-available-height)] w-[var(--bits-select-anchor-width)] min-w-[var(--bits-select-anchor-width)] select-none rounded-xl border px-1 py-3 data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1"
							sideOffset={10}
						>
							<Select.Viewport class="p-1">
								<Select.Item
									class="rounded-button data-highlighted:bg-muted outline-hidden data-disabled:opacity-50 flex h-10 w-full select-none items-center py-3 pl-5 pr-1.5 text-sm  capitalize"
									value="1"
									label="Startup 1"
									disabled={false}
								>
									{#snippet children({ selected })}
										Startup 1
										{#if selected}
											<div class="ml-auto">
												<Check />
											</div>
										{/if}
									{/snippet}
								</Select.Item>
							</Select.Viewport>
						</Select.Content>
					</Select.Portal>
				</Select.Root>
			</div>
		</Sidebar.Body>

		<Sidebar.Footer
			class="mt-auto border-t-1 border-white/10 h-[50px] flex justify-between items-center px-5"
		>
			<a href="/terms-of-use" class="text-xs text-gray-700 hover:text-gray-300 underline"
				>Terms of use</a
			>
		</Sidebar.Footer>
	</Sidebar.Root>

	<main>
		{@render children()}
	</main>
</LayoutContainer>
