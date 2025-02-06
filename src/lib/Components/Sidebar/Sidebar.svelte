<script lang="ts">
	import { Airplay, Rabbit, Egg, DollarSign, Rocket } from 'lucide-svelte';
	import OptionTree from './OptionTree.svelte';
	import Header from './Header.svelte';
	import Body from './Body.svelte';
	import Startup from '../Icons/Startup.svelte';
	import Accelerator from '../Icons/Accelerator.svelte';
	import Imcubator from '../Icons/Imcubator.svelte';
	import VentureCapital from '../Icons/VentureCapital.svelte';
	import ProductLaunch from '../Icons/ProductLaunch.svelte';
</script>

<nav>
	<Header />
	<Body>
		<OptionTree
			label="My startup"
			icon={Startup}
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
		<OptionTree label="Accelerators" icon={Accelerator} options={[]} />
		<OptionTree
			label="Imcubators"
			icon={Imcubator}
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
			icon={VentureCapital}
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
			icon={ProductLaunch}
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
		padding: 10px 14px;
		position: sticky;
		top: 0;
		overflow: auto;
	}
</style>
