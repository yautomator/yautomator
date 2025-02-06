<script lang="ts">
	import { Icons } from '$lib/Common';
	import LordIcon from '../Icons/LordIcon.svelte';
</script>

<div class="container">
	<div>
		<LordIcon src={Icons.Organization} size="80px"></LordIcon>
		<span>No founder added</span>

		<p>
			Founders represent each business partner of your company. There is no founder specified yet,
			you can't apply to anything before setting up the founders.
		</p>
	</div>
</div>

<style>
	.container {
		display: flex;
		justify-content: center;
		place-items: center;
		height: 100%;

		div {
			display: flex;
			flex-direction: column;
			width: 400px;

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
	}

	lord-icon {
		width: 100px;
		height: 100px;
	}
</style>
