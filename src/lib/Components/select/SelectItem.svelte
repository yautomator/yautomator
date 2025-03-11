<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';

	let { children, ...nativeProps }: HTMLButtonAttributes = $props();
</script>

<li>
	<button type="button" {...nativeProps}>
		{@render children?.()}
	</button>
</li>

<style>
	li {
		font-size: 0.75rem;
		cursor: pointer;

		button {
			width: 100%;
			padding: 12px;
			background: none;
			border: none;
			cursor: pointer;

			border-radius: 6px;
			display: flex;
			gap: 12px;

			font-size: 0.75rem;
			text-align: left;
			color: var(--main-text-color);

			&:hover {
				background: #2e3137;
			}
		}
	}
</style>
