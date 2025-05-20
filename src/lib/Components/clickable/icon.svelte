<script lang="ts">
	import { Button } from 'bits-ui';

	interface Props {
		icon: string;
	}

	let { icon }: Props = $props();
</script>

<Button.Root class="hover:bg-[#292a2a] p-2 flex items-center justify-center rounded-full">
	<iconify-icon
		class="text-[#a5a5a5] cursor-pointer hover:bg-[#292a2a] rounded-full"
		{icon}
		width="24"
		height="24"
	></iconify-icon>
</Button.Root>
