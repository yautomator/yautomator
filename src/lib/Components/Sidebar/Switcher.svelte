<script lang="ts">
	import { ChevronsUpDown } from 'lucide-svelte';
</script>

<li>
	<button>
		<div>C</div>
		<span>Commfuze</span>
		<ChevronsUpDown size={14} />
	</button>
</li>

<style>
	li button {
		margin-bottom: 5px;
		border-radius: 5px;
		width: 100%;
		padding: 0.65em;
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
