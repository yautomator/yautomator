<script lang="ts">
	import { Search } from 'lucide-svelte';
	import type { Snippet } from 'svelte';

	interface Props {
		placeholder: string;
	}

	let { placeholder }: Props = $props();
</script>

<div class="relative mx-[20px] mb-2">
	<input
		type="text"
		{placeholder}
		class="p-[10px] pl-12 rounded-full border-1 border-none bg-[#2e2f2f] text-gray-50 text-sm w-full placeholder-[#abacac]"
	/>
	<Search
		class="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none"
		size={14}
	/>
</div>
