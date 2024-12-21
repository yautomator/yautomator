<script lang="ts">
    import "../globals.css"
	import { Trash} from 'lucide-svelte';

    export let number: number
</script>

<section>
    <div class="founder-label">
        <span>Founder {number}</span>
        <Trash size={15}/>
    </div>

    <div class="name-box">
        <input type="text" placeholder="First name" id="name">
        <input type="text" placeholder="Last name" id="last-name">
    </div>
    <div class="linkedin-country-box">
        <input type="text" placeholder="Linkedin url" name="linkedin-url">
        <input type="text" placeholder="Country of residency" name="country">
    </div>
    <textarea placeholder="Summary"></textarea>
</section>

<style>
    
    section {
        border-left: 1px solid var(--border-color);
        border-top: 1px solid var(--border-color);
        border-bottom: 1px solid var(--border-color);
        padding-left: 20px;
        padding-bottom: 20px;

        border-top-left-radius: 12px;
        border-bottom-left-radius: 12px;
        display: flex;
        flex-direction: column;
        gap: 12px;
        
        input, textarea {
            width: 100%;
            padding: .65em;
            border-radius: 5px;
            background-color: var(--input-background-color);
            border: 1px solid var(--border-color);
            box-shadow: lch(0 0 0 / 0.06) 0px 4px 4px -1px, lch(0 0 0 / 0.12) 0px 1px 1px 0px;
            /* color: lch(90.994 1.933 272); */
        color: var(--sidebar-icon-fill);

            outline: none;
        }
        
        .name-box, .linkedin-country-box {
            gap: 10px;
            display: flex;
        }
        .founder-label {
            position: relative;
            top: -9px;
            background-color: var(--main-background-color);
            width: 150px;
            /* border: 1px solid var(--border-color); */
            border-radius: 8px;
            padding-left: 10px;
            width: 100%;
            display: flex;
            place-items: center;
            gap: 15px;

            span {
                font-size: .8125rem;
                color: lch(90.994 1.933 272);
            }
        }
    }
</style>

