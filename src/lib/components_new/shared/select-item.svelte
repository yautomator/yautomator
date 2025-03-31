<script lang="ts">
	import type { Snippet } from 'svelte';

	const { children }: { children: Snippet } = $props();
</script>

<li>
	<button>
		{@render children?.()}
	</button>
</li>

<style>
	li {
		display: flex;
		flex-direction: column;

		button {
			height: 35px;
			border-radius: 4px;
			padding: 12px 8px;
			transition: all 0.2s;

			background: none;
			border: none;
			color: var(--main-text-color);

			display: flex;
			place-items: center;
			gap: 8px;

			letter-spacing: -0.00625rem;
			font-size: 0.75rem;

			&:hover {
				background: #151618;
			}
		}
	}
</style>
