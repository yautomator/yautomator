<script lang="ts">
  import FounderForm from '../lib/FounderForm.svelte';

  import Breadcrumb from '../lib/Breadcrumb.svelte';

    import Sidebar from '../lib/Sidebar/Sidebar.svelte';
    import "../globals.css"
	import { ChevronRight, Trash} from 'lucide-svelte';
	import Centralizer from '$lib/Centralizer.svelte';
	import Label from '$lib/Label.svelte';
	import TextButton from '$lib/TextButton.svelte';
    
</script>

<Sidebar/>

<section>
    <header>
        <Centralizer>
            <div class="header-content">
                <Breadcrumb basePath="My startup" currentPath="Founders"/>
                <Label label="Pending changes" color="#EED202"/>
            </div>
        </Centralizer>
    </header>
    <main>
        <Centralizer>
            <div class="main-content">
                <form class="responsive-form">
                    <FounderForm number={1}/>
                    <FounderForm number={2}/>
                    <FounderForm number={3}/>
                    <FounderForm number={4}/>
                    <FounderForm number={5}/>
                    <FounderForm number={6}/>
                    <FounderForm number={7}/>
                </form>
            </div>
        </Centralizer>
    </main>
    <footer>
        <Centralizer>
            <div class="footer-content">
                <TextButton label="Confirm changes" icon={ChevronRight}/>
            </div>
        </Centralizer>
    </footer>
</section>

<style>
    header {
        border-bottom: 1px solid var(--border-color);
        padding: 10px;
        background-color: var(--main-background-color);
        position: sticky;
        top: 0;
        z-index: 9999;
    }

    footer {
        border-top: 1px solid var(--border-color);
        background-color: var(--main-background-color);
        padding: 10px;
        position: sticky;
        bottom: 0;
        z-index: 9999;
    }

    .header-content {
        width: 50%;
        display: flex;
        justify-content: space-between;
    }

    .footer-content {
        width: 50%;
        display: flex;
        justify-content: flex-end;
    }

    .main-content {
        width: 50%;
    }

    form {
        padding: 40px 0px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        gap: 40px;
    }
</style>