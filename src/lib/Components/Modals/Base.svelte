<script lang="ts">
	import IconButton from '$lib/Components/Buttons/IconButton.svelte';
	import { X } from 'lucide-svelte';

	let { modalRef = $bindable(), header, children, footer } = $props();

	const handleClickOutside = (e: MouseEvent) => {
		if (e.target === modalRef) handleClose();
	};

	const handleClose = () => {
		modalRef.close();
	};
</script>

<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_noninteractive_element_interactions -->
<dialog bind:this={modalRef} onclick={handleClickOutside}>
	<section>
		<header>
			{@render header?.()}

			<IconButton onclick={handleClose}>
				<X size={15} />
			</IconButton>
		</header>

		<div>
			{@render children?.()}
		</div>

		<footer>
			<!-- svelte-ignore a11y_autofocus -->
			{@render footer?.()}
		</footer>
	</section>
</dialog>

<style>
	@import 'https://unpkg.com/open-props';

	dialog {
		width: 40vw;
		min-width: 600px;
		max-width: 800px;

		color: var(--secondary-text-color);
		margin: auto;
		border-radius: 8px;
		background: lch(10.633 1.867 272);
		border: 1px solid lch(24.833 4.707 272);
		box-shadow:
			lch(0 0 0 / 0.15) 0px 4px 40px,
			lch(0 0 0 / 0.188) 0px 3px 20px,
			lch(0 0 0 / 0.188) 0px 3px 12px,
			lch(0 0 0 / 0.188) 0px 2px 8px,
			lch(0 0 0 / 0.188) 0px 1px 1px;

		section {
			header,
			footer {
				padding: 12px;
				gap: 12px;
				position: sticky;
				display: flex;
				background: lch(10.633 1.867 272);
			}

			div {
				padding: 18px 12px;
				overflow-y: auto;
			}

			header {
				justify-content: space-between;
				border-bottom: 1px solid lch(24.833 4.707 272);
				top: 0;
			}

			footer {
				justify-content: flex-end;
				border-top: 1px solid lch(24.833 4.707 272);
				bottom: 0;
			}
		}
	}

	dialog::backdrop {
		background: lch(4.8 0.7 272 / 0.45);
	}
</style>
