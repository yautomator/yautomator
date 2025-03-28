<script lang="ts">
	import { Button } from 'bits-ui';

	type IconButtonProps = {
		Icon: any;
	} & Button.RootProps;

	const { Icon, ...props }: IconButtonProps = $props();
</script>

<Button.Root>
	<Icon size={15} />
</Button.Root>

<style>
	:global([data-button-root]) {
		cursor: pointer;
		padding: var(--icon-button-padding);
		border-radius: var(--icon-button-border-radius);
		border: 1px solid var(--border-color);

		&:hover {
			background-color: var(--icon-button-hover-background-color);
		}
	}
</style>
