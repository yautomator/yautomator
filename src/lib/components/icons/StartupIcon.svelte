<script lang="ts">
	interface StartupProps {
		name: string | undefined;
		backgroundColor: string | undefined;
	}

	let { name, backgroundColor }: StartupProps = $props();
</script>

<div style:background-color={backgroundColor}>
	<span>{name}</span>
</div>

<style>
	div {
		display: flex;
		place-items: center;
		justify-content: center;
		width: 20px;
		height: 20px;
		border-radius: 4px;
		font-weight: 600;
		font-size: 0.7rem;
		color: var(--main-text-color);
	}
</style>
