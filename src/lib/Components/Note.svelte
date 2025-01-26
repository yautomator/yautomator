<script lang="ts">

    export let label: string
    export let color: string
</script>

<div class="colored-note">
    <div style:background-color={color}></div>
    <span>{label}</span>
</div>


<style>
    .colored-note {
        flex-grow: 0;
        background-color: var(--main-background-color);
        display: flex;
        place-items: center;
        gap: 10px;

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