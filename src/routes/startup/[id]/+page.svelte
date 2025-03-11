<script>
	import Sidebar from '$lib/components/sidebar/Sidebar.svelte';
	import SidebarBody from '$lib/components/sidebar/SidebarBody.svelte';
	import SidebarGroup from '$lib/components/sidebar/SidebarGroup.svelte';
	import SidebarHeader from '$lib/components/sidebar/SidebarHeader.svelte';
	import SidebarLinkItem from '$lib/components/sidebar/SidebarLinkItem.svelte';
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

	import { page } from '$app/state';
	import StartupIcon from '$lib/components/icons/StartupIcon.svelte';
	import Select from '$lib/components_new/shared/Select.svelte';
	import SelectItem from '$lib/components_new/shared/SelectItem.svelte';
	import '../../../app.css';
</script>

<Sidebar>
	<SidebarHeader>
		<Select>
			{#snippet placeholder()}
				<Box size={15} />
				Select value
			{/snippet}

			{#each page.data.startups as startup}
				<SelectItem>
					<StartupIcon name={startup.abbreviation} backgroundColor={startup.color} />
					{startup.name}
				</SelectItem>
			{/each}
		</Select>
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
			<SidebarLinkItem href="/organizations/product-hunt">
				<Telescope size={15} strokeWidth={2} />
				Product Hunt
			</SidebarLinkItem>
		</SidebarGroup>
	</SidebarBody>
</Sidebar>
