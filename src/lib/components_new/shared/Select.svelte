<script lang="ts">
	import { Select, type WithoutChildren } from 'bits-ui';
	import CaretUpDown from 'phosphor-svelte/lib/CaretUpDown';

	type Item = { value: string; label: string; icon: any };

	type Props = WithoutChildren<Select.RootProps> & {
		items: Item[];
		placeholder?: string;
		PlaceholderIcon?: any;
		contentProps?: WithoutChildren<Select.ContentProps>;
	};

	let { value, items, contentProps, placeholder, PlaceholderIcon, ...restProps }: Props = $props();

	const selectedItem = $derived(items.find((item: Item) => item.value === value));
</script>

<Select.Root bind:value={value as never} {...restProps}>
	<Select.Trigger>
		{#if selectedItem}
			<selectedItem.icon size={20} />
			{selectedItem.label}
		{:else}
			{#if PlaceholderIcon}
				<PlaceholderIcon size={20} />
			{/if}

			{#if placeholder}
				{placeholder}
			{/if}
		{/if}

		<CaretUpDown size={15} />
	</Select.Trigger>
	<Select.Portal>
		<Select.Content {...contentProps}>
			<Select.Viewport>
				{#each items as { value, label, icon } (value)}
					<Select.Item {value} {label}>
						{#snippet children({ selected })}
							{label}
						{/snippet}
					</Select.Item>
				{/each}
			</Select.Viewport>
		</Select.Content>
	</Select.Portal>
</Select.Root>
