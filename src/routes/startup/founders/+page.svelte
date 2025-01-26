<script>
	import Breadcrumb from '$lib/Components/Breadcrumb.svelte';
	import FlexGroup from '$lib/Components/FlexGroup.svelte';
	import Founders from '$lib/Components/FoundersList.svelte';
	import Label from '$lib/Components/Label.svelte';
	import TextButton from '$lib/Components/TextButton.svelte';
	import { ChevronRight, Plus } from 'lucide-svelte';
	import { founders, emptyFounder } from '$lib/States/founders.svelte';

	import { getContext } from 'svelte';

	const { setHeader, setFooter } = getContext('layout');

	setHeader(header);
	setFooter(footer);

	const addFounder = () => {
		founders.push(emptyFounder);
	};
</script>

{#snippet header()}
	<Breadcrumb basePath="My startup" currentPath="Founders" />
	<Label label="Pending changes" color="#EED202" />
{/snippet}

{#snippet footer()}
	<FlexGroup>
		<TextButton label="Add founder" icon={Plus} onClick={addFounder} />
		<TextButton
			label="Confirm changes"
			icon={ChevronRight}
			form="founders-form"
			type="submit"
			onClick={() => {}}
		/>
	</FlexGroup>
{/snippet}

<Founders />
