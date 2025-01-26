<script lang="ts">
    import { ChevronsUpDown, Airplay, Rabbit, Egg, DollarSign, Rocket } from 'lucide-svelte';
	import Item from "./SidebarItem.svelte";
</script>

<nav>
    <ul>
        <li>
            <button>
                <div>C</div>
                <span>Commfuze</span>
                <ChevronsUpDown size={14}/>
            </button>
        </li>
        <Item 
            label="My startup" 
            icon={Airplay}
            iconColor="#ff16b5"
            subItems={
                [
                    {
                        label: "Founders",
                        href: '/startup/founders'
                    },
                    {
                        label: "Product",
                        href: '/startup/product'
                    },
                    {
                        label: "Images",
                        href: '/startup/images'
                    }
                ]
            }
        />
        <Item 
            label="Accelerators" 
            icon={Rabbit} 
            iconColor="orange"
            subItems={
                [
                    {
                        label: "About",
                        href: '#1'
                    },
                    {
                        label: "Apply",
                        href: '#2'
                    },
                    {
                        label: "My applications",
                        href: '#1'
                    }
                ]
            }
        />
        <Item 
            label="Imcubators" 
            icon={Egg} 
            iconColor="yellow"
            subItems={
                [
                    {
                        label: "About",
                        href: '#1'
                    },
                    {
                        label: "Apply",
                        href: '#2'
                    },
                    {
                        label: "My applications",
                        href: '#1'
                    }
                ]
            }
        />
        <Item 
            label="Venture Capitals" 
            icon={DollarSign} 
            iconColor="green"
            subItems={
                [
                    {
                        label: "About",
                        href: '#1'
                    },
                    {
                        label: "Apply",
                        href: '#2'
                    },
                    {
                        label: "My applications",
                        href: '#1'
                    }
                ]
            }
        />
        <Item 
            label="Product Launch" 
            icon={Rocket} 
            iconColor="gray"
            subItems={
                [
                    {
                        label: "About",
                        href: '#1'
                    },
                    {
                        label: "Apply",
                        href: '#2'
                    },
                    {
                        label: "My applications",
                        href: '#1'
                    }
                ]
            }
        />
    </ul>
</nav>

<style>
    nav {
        height: 100vh;
        padding: .5em;
        background-color: var(--secondary-background-color);
        border-right: 1px solid var(--border-color);
        position: sticky;
        top: 0;

        ul {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 8px;
        }
    }

    nav > ul > li button {
        margin-bottom: 5px;
        border-radius: 5px;
        width: 100%;
        padding: .65em;
        display: flex;
        place-items: center;
        background: none;
        border: none;
        color: var(--main-text-color);
        gap: 10px;
        font-weight: 600;

        div {
            width: 18px;
            height: 18px;
            background-color: rgb(52, 162, 241);
            display: flex;
            place-items: center;
            border-radius: 5px;
            justify-content: center;
        }

        span {
            flex-grow: 1;
            text-align: left;
        }
    }
</style>

