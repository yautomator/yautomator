<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { Button } from 'bits-ui';
	import { daysUntil, intToCurrency } from '$lib/utils/common';

	interface Props {
		filter: any;
		onClick: (filter: any) => void;
		isActive: boolean;
	}

	let { filter, onClick, isActive }: Props = $props();
</script>

<Button.Root
	class="px-3 py-1 text-neutral-400 data-[active=true]:border-[#8234e9] data-[active=true]:text-[#d4b6ff] data-[active=true]:bg-[#4e1c90] border-1 border-border rounded-full text-sm transition-colors h-[30px]"
	onclick={() => onClick(filter.id)}
	data-active={isActive}
>
	{filter.label}
</Button.Root>
