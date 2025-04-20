<script lang="ts">
	import { Dialog } from 'bits-ui';
	import type { Snippet } from 'svelte';

	type Props = Dialog.RootProps & {
		header?: Snippet;
		footer?: Snippet;
		children?: Snippet;
	};

	let { open = $bindable(false), children, header, footer }: Props = $props();
</script>

<Dialog.Root bind:open>
	<Dialog.Portal>
		<Dialog.Overlay class="fixed inset-0  bg-black/80" />
		<Dialog.Content
			class="flex flex-col bg-white fixed left-[50%] top-[50%] w-full max-w-[750px] h-full max-h-[800px] translate-x-[-50%] translate-y-[-50%]"
		>
			{@render header?.()}

			{@render children?.()}

			{@render footer?.()}
		</Dialog.Content>
	</Dialog.Portal>
</Dialog.Root>
