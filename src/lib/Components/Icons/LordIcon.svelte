<script lang="ts">
	import lottie from 'lottie-web';
	import { onMount } from 'svelte';

	onMount(async () => {
		const { defineElement } = await import('@lordicon/element');
		// define "lord-icon" custom element with default properties
		defineElement(lottie.loadAnimation);
	});

	export let src: string;
	export let size: string = '25px';
	export let trigger: string = 'hover';
</script>

<lord-icon {src} style:width={size} style:height={size} {trigger}></lord-icon>
