<script lang="ts">
	import chroma from 'chroma-js';

	type ButtonProps = {
		children?: any;
		type?: 'button' | 'submit';
		background?: string;
		form?: string;
		onclick?: () => void;
		hasBorder?: boolean;
		disabled?: boolean;
	};

	let { children, type, background, form, onclick, hasBorder, disabled }: ButtonProps = $props();

	let buttonElement: HTMLButtonElement;
	let resolvedBackground = $state('');
	let borderColor = $state('');
	let hoverBackgroundColor = $state('');
	let isHovered = $state(false);

	function resolveColor(): string {
		const style = getComputedStyle(buttonElement);
		return style.backgroundColor;
	}

	$effect(() => {
		if (buttonElement) {
			resolvedBackground = resolveColor();
			hoverBackgroundColor = chroma(resolvedBackground).brighten(0.3).hex();
			borderColor = hasBorder ? hoverBackgroundColor : 'transparent';
		}
	});
</script>

<button
	bind:this={buttonElement}
	onmouseover={() => (isHovered = true)}
	onmouseout={() => (isHovered = false)}
	onfocus={() => (isHovered = false)}
	onblur={() => (isHovered = false)}
	style:background={isHovered ? hoverBackgroundColor : background}
	style:border-color={borderColor}
	{onclick}
	{type}
	{form}
	{disabled}
>
	{@render children?.()}
</button>

<style>
	button {
		border: 0.5px solid transparent;
		color: var(--main-text-color);
		display: flex;
		place-items: center;
		gap: 8px;
		justify-content: space-between;
		border-radius: 4px;
		transition: background 0.2s;
		height: 100%;
		padding: 5px;

		box-shadow:
			lch(0 0 0 / 0.06) 0px 4px 4px -1px,
			lch(0 0 0 / 0.12) 0px 1px 1px;
	}

	button:hover :global(svg) {
		stroke: white;
	}
</style>
