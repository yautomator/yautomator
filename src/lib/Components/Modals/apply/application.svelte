<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import { Plus } from 'lucide-svelte';
	import NProgress from 'nprogress';
	import type { StepController } from './controller.svelte';

	let isLoadingNewApplication = $state(false);

	interface Props {
		applications: any[];
		stepController: StepController;
		selectedApplication: any;
	}

	let { selectedApplication = $bindable(), applications, stepController }: Props = $props();

	const handleNewApplicationResponse: SubmitFunction = () => {
		isLoadingNewApplication = true;
		NProgress.start();

		return async ({ result, update }) => {
			if (result.type === 'success') {
				selectedApplication = result.data?.application;
				await update();
				stepController.next();
			} else {
				alert('Failed to add founder. Please try again.');
			}

			NProgress.done();
			isLoadingNewApplication = false;
		};
	};

	const handleApplicationClick = (application: any) => {
		selectedApplication = application;
		stepController.next();
	};
</script>

{#if applications.length}
	{#each applications as application (application._id)}
		<button
			class="w-full text-left p-6 rounded bg-[var(--color-bg-subtle)] hover:bg-[var(--color-bg-hover)] border-1 border-[var(--color-border-opaque)] transition-colors duration-200"
			onclick={() => handleApplicationClick(application)}
		>
			<div class="flex justify-between items-center">
				<div class="space-y-1">
					<p class="text-lg font-medium">Application #{application._id.slice(-4)}</p>
					<p class="text-[var(--color-fg-subtle)]">Status: {application.status}</p>
				</div>
				<span class="text-[var(--color-fg-subtle)] text-xl">→</span>
			</div>
		</button>
	{/each}
{/if}

<form action="?/application" method="POST" use:enhance={handleNewApplicationResponse}>
	<button
		class="w-full text-left p-6 rounded bg-[var(--color-bg-subtle)] hover:bg-[var(--color-bg-hover)] border-1 border-[var(--color-border-opaque)] transition-colors duration-200 flex items-center justify-between"
		disabled={isLoadingNewApplication}
	>
		Create New Application
		{#if isLoadingNewApplication}
			<div
				class="w-5 h-5 border-2 border-[var(--color-fg-subtle)] border-t-[var(--color-fg)] rounded-full animate-spin"
			></div>
		{:else}
			<Plus />
		{/if}
	</button>
</form>
