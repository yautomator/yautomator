<script lang="ts">

    export let label: string
    export let color: string
</script>

<div class="label">
    <div style:background-color={color}></div>
    <span>{label}</span>
</div>


<style>
    .label {
        padding: 6px 10px;
        background-color: var(--main-background-color);
        display: flex;
        place-items: center;
        justify-content: space-between;
        gap: 10px;
        border: 1px solid var(--border-color);
        border-radius: 48px;


        div {
            width: 9px;
            height: 9px;
            border-radius: 50%;
            flex-shrink: 0;
        }

        span {
            font-size: .75rem;
            text-wrap: nowrap;
        }
    }
</style>