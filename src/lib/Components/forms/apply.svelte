<script lang="ts">
	import type { Accelerator } from '$lib/utils/common';
	import type { HTMLFormAttributes } from 'svelte/elements';
	import nProgress from 'nprogress';
	import type { SubmitFunction } from '@sveltejs/kit';
	import { enhance } from '$app/forms';

	interface Props extends HTMLFormAttributes {
		selectedApplication: any | null;
		selectedOrganization: Accelerator | null;
		closeModal: () => void;
	}

	let { selectedOrganization, selectedApplication, closeModal, ...nativeProps }: Props = $props();

	const handleSubmitApplicationResponse: SubmitFunction = () => {
		nProgress.start();

		return async ({ result, update }) => {
			if (result.type === 'success') {
				await update();
				closeModal();
			} else {
				alert('Failed to apply. Please try again.');
			}

			nProgress.done();
		};
	};
</script>

<form
	action="?/apply"
	method="POST"
	class="h-full overflow-y-auto flex flex-col p-4"
	{...nativeProps}
	use:enhance={handleSubmitApplicationResponse}
>
	<input type="hidden" name="applicationId" value={selectedApplication?._id} />

	{#if selectedOrganization?.applicationQuestions.length}
		{#each selectedOrganization.applicationQuestions as question (question._id)}
			<div class="form-group flex flex-col gap-2">
				<label for={question._id}>{question.question}</label>

				{#if question.subLabel}
					<small>{question.subLabel}</small>
				{/if}

				{#if question.type === 'radio'}
					{#each question.options as option}
						<div>
							<input
								type="radio"
								id={`${question._id}-${option}`}
								name={question._id}
								value={option}
								required={question.required}
								checked={selectedApplication?.responses[question._id] === option}
							/>
							<label for={`${question._id}-${option}`}>{option}</label>
						</div>
					{/each}
				{:else if question.type === 'checkbox'}
					<input
						type="checkbox"
						id={question._id}
						name={question._id}
						required={question.required}
						checked={selectedApplication?.responses[question._id] === 'true'}
					/>
				{:else if question.type === 'upload'}
					<input type="file" id={question._id} name={question._id} required={question.required} />
				{:else}
					<input
						type={question.type}
						id={question._id}
						name={question._id}
						required={question.required}
						maxlength={question.maxLength}
						value={selectedApplication?.responses[question._id]}
						class="border-1 border-border rounded-md p-2"
					/>
				{/if}
			</div>
		{/each}
	{/if}
</form>
