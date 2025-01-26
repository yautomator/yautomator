<script lang="ts">
    import { onMount } from 'svelte';
	import { Icons } from '$lib/Common';
    import lottie from "lottie-web"
    
    onMount(async () => {
        const { defineElement } = await import('@lordicon/element');
        // define "lord-icon" custom element with default properties
        defineElement(lottie.loadAnimation);
    });
      
    export let src: string
    export let size: string = "25px"
  </script>

  
  <lord-icon
      {src}
      style:width={size}
      style:height={size}
      trigger="hover">
  </lord-icon>