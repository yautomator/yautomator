<script lang="ts">
	import { page } from '$app/state';
	import { Button } from 'bits-ui';

	interface Props {
		href: string;
		label: string;
		icon: string;
	}

	let { href, label, icon }: Props = $props();
	let isActive = $derived(page.url.pathname.includes(href));
</script>

<li>
	<Button.Root
		{href}
		aria-label={label}
		class="flex items-center p-2 hover:bg-[#292a2a] rounded-full data-[active=true]:bg-[#292a2a]"
		data-active={isActive}
	>
		<iconify-icon {icon} width="24" height="24" class="text-[#a5a5a5]"></iconify-icon>
	</Button.Root>
</li>
