<script lang="ts">
	import { Button } from 'bits-ui';

	type IconButtonProps = {
		Icon: any;
	} & Button.RootProps;

	const { Icon, ...props }: IconButtonProps = $props();
</script>

<Button.Root>
	<Icon />
</Button.Root>
