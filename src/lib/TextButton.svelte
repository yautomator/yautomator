<script lang="ts">
    export let label: string
    export let icon;
</script>

<button>
    <svelte:component this={icon} size={14}/>
    <span>{label}</span>
</button>

<style>
    button {
        border: none;
        background: none;
        padding: 10px;
        color: var(--main-text-color);
        display: flex;
        gap: 10px;
        place-items: center;
        justify-content: space-between;
        border-radius: 5px;
        transition: background-color .2s;

        &:hover {
            background-color: #1e1e20;
        }
    }
</style>