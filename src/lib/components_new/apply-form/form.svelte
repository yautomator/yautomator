<script lang="ts">
	import type { Accelerator } from '$lib/utils/common';
	import type { HTMLFormAttributes } from 'svelte/elements';

	interface Props extends HTMLFormAttributes {
		selectedOrganization: Accelerator | null;
		formAnswers: Record<string, string>;
	}

	let { selectedOrganization, formAnswers, ...nativeProps }: Props = $props();
</script>

<form
	action="?/apply"
	method="POST"
	class="h-full overflow-y-auto flex flex-col p-4"
	{...nativeProps}
>
	<input type="hidden" name="organizationId" value={selectedOrganization?._id} />

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
								id={option}
								name={question._id}
								value={option}
								required={question.required}
								checked={formAnswers[question._id] === option}
							/>
							<label for={option}>{option}</label>
						</div>
					{/each}
				{:else if question.type === 'checkbox'}
					<input
						type="checkbox"
						id={question._id}
						name={question._id}
						required={question.required}
						checked={formAnswers[question._id] === 'true'}
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
						class="border-1 border-gray-200 rounded-md p-2"
						value={formAnswers[question._id] || ''}
					/>
				{/if}
			</div>
		{/each}
	{/if}
</form>
