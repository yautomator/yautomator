<script lang="ts">
	import { Icons } from "$lib/Common";
	import Centralizer from "$lib/Components/Centralizer.svelte";
	import ColoredNote from "$lib/Components/Note.svelte";
	import NotesList from "$lib/Components/NotesList.svelte";
	import Icon from "./Icon.svelte";
</script>


<Centralizer>
    <div>
        <Icon src={Icons.Organization}></Icon>
        <span>No founder added</span>
    
        <p>
            Founders represent each business partner of your company. There is no founder specified yet, you can't apply to anything before setting up the founders. 
        </p>
    
        <NotesList>
            <ColoredNote label="Start adding founders by clicking the button in the footer" color="yellow"/>
            <ColoredNote label="Remember to confirm your changes once you are done" color="yellow"/>
        </NotesList>
    </div>
</Centralizer>



<style>
    div {
        display: flex;
        flex-direction: column;
        width: 60%;

        span {
            font-size: 15px;
            color: var(--main-text-color);
            margin-top: 20px;
        }

        p {
            font-size: 13px;
            color: var(--secondary-text-color);
            margin-top: 10px;
            margin-bottom: 20px;
            text-align: justify;
        }
    }

    lord-icon {
        width: 100px;
        height: 100px;
    }
</style>