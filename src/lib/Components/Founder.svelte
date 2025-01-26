<script lang="ts">
	import Input from './Input.svelte';
	import { Trash } from 'lucide-svelte';
	import ColumnBox from './ColumnBox.svelte';
	import Textarea from './Textarea.svelte';
	import type { Founder } from '$lib/Common';
	import IconButton from '$lib/Components/IconButton.svelte';
	import FileInput from './FileInput.svelte';

	type founderProps = {
		onFounderDelete: (index: number) => void;
		index: number;
		founder: Founder;
	};

	let { onFounderDelete, index, founder }: founderProps = $props();
</script>

<div>
	<span>
		Founder {index + 1}
		<IconButton icon={Trash} onClick={() => onFounderDelete(index)} />
	</span>

	<ColumnBox>
		<Input placeholder="Name" required={true} bind:value={founder.name} />
		<Input placeholder="Surname" required={true} bind:value={founder.surname} />
	</ColumnBox>

	<ColumnBox>
		<Input
			placeholder="Linkedin profile url"
			required={true}
			bind:value={founder.linkedinProfileUrl}
		/>
		<Input placeholder="Country" required={true} bind:value={founder.email} />
		<Input placeholder="Role" required={true} bind:value={founder.role} />
	</ColumnBox>

	<Textarea placeholder="Summary" required={true} bind:value={founder.summary}></Textarea>
	<FileInput />
</div>

<style>
	span {
		display: flex;
		place-items: center;
		gap: 5px;
		color: var(--main-text-color);
		font-size: 0.8125rem;
		background-color: var(--main-background-color);
		margin-top: -18px;
		padding-left: 10px;
	}

	div {
		border-left: 1px solid var(--border-color);
		border-top: 1px solid var(--border-color);
		border-bottom: 1px solid var(--border-color);

		padding-left: 15px;
		padding-bottom: 15px;

		border-top-left-radius: 5px;
		border-bottom-left-radius: 12px;

		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 10px;

		outline: none;
	}
</style>
