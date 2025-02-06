<script lang="ts">
	import chroma from 'chroma-js';

	export let type: 'button' | 'submit' | 'reset' | null = 'button';
	export let background: String;
	export let form: string = '';

	export let onClick: () => void;
	export let hasBorder: boolean = true;

	let buttonElement: HTMLButtonElement;
	let resolvedBackground: string;
	let borderColor: string;
	let hoverBackgroundColor: string;
	let isHovered: boolean;

	function resolveColor(): string {
		const style = getComputedStyle(buttonElement);
		return style.backgroundColor;
	}

	$: if (buttonElement) {
		resolvedBackground = resolveColor();
		hoverBackgroundColor = chroma(resolvedBackground).brighten(0.3).hex();
		borderColor = hasBorder ? hoverBackgroundColor : 'transparent';
	}
</script>

<button
	bind:this={buttonElement}
	on:mouseover={() => (isHovered = true)}
	on:mouseout={() => (isHovered = false)}
	on:focus={() => (isHovered = false)}
	on:blur={() => (isHovered = false)}
	style:background={isHovered ? hoverBackgroundColor : background}
	style:border-color={borderColor}
	on:click={onClick}
	{type}
	{form}
>
	<slot></slot>
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
		font-size: 0.75rem;
		height: 100%;
		padding: 0px 8px;

		box-shadow:
			lch(0 0 0 / 0.06) 0px 4px 4px -1px,
			lch(0 0 0 / 0.12) 0px 1px 1px;
	}

	button:hover :global(svg) {
		stroke: white;
	}
</style>
