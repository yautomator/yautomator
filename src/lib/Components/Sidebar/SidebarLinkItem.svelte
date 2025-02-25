<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children, href }: { children?: Snippet; href: string } = $props();
</script>

<li>
	<a {href}>
		{@render children?.()}
	</a>
</li>

<style>
	li {
		a {
			display: flex;
			place-items: center;
			gap: 8px;

			color: var(--main-text-color);
			font-size: 0.8125rem;
			text-decoration: none;

			height: 28px;
			border-radius: 4px;
			padding-left: 6px;

			&:hover {
				background-color: var(--sidebar-link-item-hover-background-color);

				:global(svg) {
					stroke: var(--main-text-color);
				}
			}

			:global(svg) {
				stroke: var(--secondary-text-color);
			}
		}
	}
</style>
