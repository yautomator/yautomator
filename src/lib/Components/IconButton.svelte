<script lang="ts">
    export let icon;
    export let onClick: () => void;
</script>

<button on:click={onClick}>
    <svelte:component this={icon} size={14}/>
</button>

<style>
    button {
        border: none;
        background: none;
        padding: 10px;
        display: flex;
        color: var(--main-text-color);
        place-items: center;
        border-radius: 5px;
        transition: background-color .2s;

        &:hover {
            background-color: #1e1e20;
        }
    }
</style>