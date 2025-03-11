<script lang="ts">
	import type { Snippet } from 'svelte';
	import { setContext } from 'svelte';

	interface DropdownProps {
		placeholder: Snippet;
		children: Snippet;
	}

	const { placeholder, children, ...nativeProps }: DropdownProps = $props();

	let show = $state(false);
	const toggleShow = () => (show = !show);

	// Can this select state leak when SSR rendering?
	// Or is it impossible as i started it as null and it can only change
	// Under user interactions?
	let selected = $state({ truth: null });

	// How can i use symbol here and manage to use the exact same symbol in the
	// SelectItem component, considering i dont want to write this symbol externally
	// As this Select should be a component library plug-n-play
	setContext('selected', selected);
</script>

<div>
	<button onclick={toggleShow} {...nativeProps}>
		{@render placeholder?.()}
	</button>
	<ul class:show>
		{@render children?.()}
	</ul>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;

		> button {
			height: 40px;
			border-radius: 4px;
			padding: 12px;
			transition: all 0.2s;

			background: var(--select-background-color);
			border: 0.5px solid var(--select-border-color);

			display: flex;
			gap: 8px;
			place-items: center;
			cursor: pointer;

			font-size: 0.875rem;
			letter-spacing: -0.00625rem;
			font-variation-settings: 'opsz' 32;
		}

		ul {
			display: none;
			flex-direction: column;
			padding: 4px;
			background: var(--select-background-color);
			border: 0.5px solid var(--select-border-color);
			margin-top: 8px;
			border-radius: 4px;
			gap: 4px;

			&.show {
				display: flex;
			}
		}
	}
</style>
