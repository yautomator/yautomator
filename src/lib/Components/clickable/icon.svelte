<script lang="ts">
	import { Button } from 'bits-ui';

	interface Props {
		icon: string;
		onclick?: () => void;
		href?: string;
	}

	let { icon, onclick, href }: Props = $props();
</script>

<Button.Root
	{href}
	{onclick}
	class="hover:bg-[#292a2a] p-2 flex items-center justify-center rounded-full cursor-pointer"
>
	<iconify-icon class="text-[#a5a5a5] hover:bg-[#292a2a] rounded-full" {icon} width="24" height="24"
	></iconify-icon>
</Button.Root>
