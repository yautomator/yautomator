<script lang="ts">
	let { header, children, footer, ref = $bindable() } = $props();

	const close = (e: Event) => {
		if (e.target === ref) ref.close();
	};
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->

<dialog bind:this={ref} onclick={close}>
	<header>
		{@render header?.()}
	</header>

	<section>
		{@render children?.()}
	</section>

	<footer>
		{@render footer?.()}
	</footer>
</dialog>

<style>
	dialog {
		width: 720px;
		max-width: 720px;
		margin: auto;
		border-radius: 8px;
		background-color: #1c1d1f;
		border: 0.5px solid var(--modal-border-color);
		color: var(--main-text-color);

		box-shadow:
			lch(0 0 0 / 0.15) 0px 4px 40px,
			lch(0 0 0 / 0.188) 0px 3px 20px,
			lch(0 0 0 / 0.188) 0px 3px 12px,
			lch(0 0 0 / 0.188) 0px 2px 8px,
			lch(0 0 0 / 0.188) 0px 1px;
	}

	dialog::backdrop {
		background-color: #10101273;
	}
	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}

	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}

	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}

	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	header {
		padding: 12px;
		display: flex;
		justify-content: space-between;
	}

	section {
		padding: 12px;
	}

	footer {
		padding: 12px;
		display: flex;
		max-height: 52px;
		height: 52px;
		justify-content: flex-end;
		gap: 12px;
		border-top: 0.5px solid var(--modal-border-color);
		margin-top: auto;
	}
</style>
