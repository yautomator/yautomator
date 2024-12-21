<script lang="ts">
    import "../globals.css"
	import { ChevronRight } from 'lucide-svelte';
    
    export let basePath: string
    export let currentPath: string
</script>

<div>
    <span>{basePath}</span>
    <ChevronRight size={20}/>
    <span>{currentPath}</span>
</div>

<style>
    div {
        display: flex;
        place-items: center;
        gap: 8px;
    }

    span {
        font-size: .8125rem;
        text-wrap: nowrap;
    }
</style>

