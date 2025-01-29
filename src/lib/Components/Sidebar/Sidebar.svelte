<script lang="ts">
	import { Airplay, Rabbit, Egg, DollarSign, Rocket } from 'lucide-svelte';
	import OptionTree from './OptionTree.svelte';
	import Header from './Header.svelte';
	import Body from './Body.svelte';
</script>

<nav>
	<Header />
	<Body>
		<OptionTree
			label="My startup"
			icon={Airplay}
			iconColor="#ff16b5"
			options={[
				{
					label: 'Founders',
					href: '/startup/founders'
				},
				{
					label: 'Product',
					href: '/startup/product'
				},
				{
					label: 'Images',
					href: '/startup/images'
				}
			]}
		/>
		<OptionTree
			label="Accelerators"
			icon={Rabbit}
			iconColor="orange"
			options={[
				{
					label: 'About',
					href: '#1'
				},
				{
					label: 'Apply',
					href: '#2'
				},
				{
					label: 'My applications',
					href: '#1'
				}
			]}
		/>
		<OptionTree
			label="Imcubators"
			icon={Egg}
			iconColor="yellow"
			options={[
				{
					label: 'About',
					href: '#1'
				},
				{
					label: 'Apply',
					href: '#2'
				},
				{
					label: 'My applications',
					href: '#1'
				}
			]}
		/>
		<OptionTree
			label="Venture Capitals"
			icon={DollarSign}
			iconColor="green"
			options={[
				{
					label: 'About',
					href: '#1'
				},
				{
					label: 'Apply',
					href: '#2'
				},
				{
					label: 'My applications',
					href: '#1'
				}
			]}
		/>
		<OptionTree
			label="Product Launch"
			icon={Rocket}
			iconColor="gray"
			options={[
				{
					label: 'About',
					href: '#1'
				},
				{
					label: 'Apply',
					href: '#2'
				},
				{
					label: 'My applications',
					href: '#1'
				}
			]}
		/>
	</Body>
</nav>

<style>
	nav {
		grid-area: leftbar;
		height: 100vh;
		padding: 0.5em;
		background-color: var(--secondary-background-color);
		border-right: 1px solid var(--border-color);
		position: sticky;
		top: 0;
		overflow: auto;
	}
</style>
