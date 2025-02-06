<script lang="ts">
	import Input from '../Input.svelte';
	import { Trash } from 'lucide-svelte';
	import ColumnBox from '../ColumnBox.svelte';
	import Textarea from '../Textarea.svelte';
	import type { Founder } from '$lib/Common';
	import IconButton from '$lib/Components/Buttons/IconButton.svelte';
	import FileInput from '../FileInput.svelte';
</script>

<div>
	<ColumnBox>
		<Input placeholder="Name" required={true} value="" />
		<Input placeholder="Surname" required={true} value="" />
	</ColumnBox>

	<ColumnBox>
		<Input placeholder="Linkedin profile url" required={true} value="" />
		<Input placeholder="Country" required={true} value="" />
		<Input placeholder="Role" required={true} value="" />
	</ColumnBox>

	<Textarea placeholder="Summary" required={true} value=""></Textarea>
	<FileInput />
</div>

<style>
	div {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 10px;
		padding: 12px;

		outline: none;
	}
</style>
