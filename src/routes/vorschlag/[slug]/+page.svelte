<script lang="ts">
	import VorschlagItem from '../VorschlagListItem.svelte';
	export let data;
	const { item } = data;
</script>

<svelte:head>
	<title>Vorschlag {item.id}</title>
	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
</svelte:head>

<main class="p-8">
	<div class="container mx-auto p-4 border-2 rounded-lg shadow-md">
		<h1 class="text-2xl font-bold text-center mb-4">Vorschlag</h1>
		<hr />
		<VorschlagItem {item} />
	</div>
</main>
