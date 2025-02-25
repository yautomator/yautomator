<script lang="ts">
	import { ChevronDown } from 'lucide-svelte';
	import StartupIcon from '../Icons/Startup.svelte';
</script>

<button>
	<StartupIcon />
	<span>Commfuze</span>

	<ChevronDown size={13} />
</button>

<style>
	button {
		background: none;
		border: none;

		display: flex;
		place-items: center;
		gap: 8px;
		border-radius: 4px;
		padding: 4px;

		font-size: 0.875rem;
		font-weight: 600;
		letter-spacing: -0.00625rem;
		color: var(--main-text-color);
		font-feature-settings: 'calt';
		font-variation-settings: 'opsz' 32;

		&:hover {
			background-color: var(--sidebar-link-item-hover-background-color);
		}

		div {
			display: flex;
			place-items: center;
			background-color: rgb(0, 140, 234);
			justify-content: center;
			width: 20px;
			height: 20px;
			border-radius: 4px;
			font-weight: 600;
			font-size: 0.7rem;
			color: var(--main-text-color);
		}
	}
</style>
