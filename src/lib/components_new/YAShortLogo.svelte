<script lang="ts">
	import type { Snippet } from 'svelte';

	type YAShortLogoProps = {
		children: Snippet;
	};
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 927 659" fill="none">
	<path
		d="M460.307 244.799L507.634 132.662L734.637 658.516H632.637L460.307 244.799ZM348.443 509.828L382.852 428.357H599.637V509.806L348.443 509.828Z"
		fill="white"
	/>
	<path
		d="M91.2834 658.456L190.985 427.857L0.857422 0.699219H96.49L235.284 323.349L374.834 0.699219H467.867L190.791 658.456H91.2834Z"
		fill="white"
	/>
	<rect x="798.797" y="531.225" width="127.291" height="127.291" rx="63.6455" fill="white" />
</svg>

<style>
	svg {
		width: 30px;
		height: 30px;

		fill: var(--text-color);
	}
</style>
