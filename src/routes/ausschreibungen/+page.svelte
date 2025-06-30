<script lang="ts">
	export let data;
	const { items } = data;
	import ListView from '$lib/components/ListView.svelte';
	import AusschreibungListItem from './AusschreibungListItem.svelte';
</script>

<svelte:head>
	<title>Ausschreibungen</title>
</svelte:head>

<main class="pt-8">
	<h1>Ausschreibungen</h1>
	<div class="mb-8">
		<p>Hier siehst du alle verfügbaren Ausschreibungen.</p>
	</div>

	<ListView
		{items}
		titel="Ausschreibung"
		baseUrl="ausschreibungen"
		itemComponent={AusschreibungListItem}
	/>
</main>
