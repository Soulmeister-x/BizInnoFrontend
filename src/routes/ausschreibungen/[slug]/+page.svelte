<script lang="ts">
	import AusschreibungItem from './AusschreibungItem.svelte';

	export let data;
	const { item } = data;

	const tenderId = item.id;
</script>

<svelte:head>
	<title>Ausschreibung {tenderId}</title>
	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
</svelte:head>

<main class="p-8">
	<AusschreibungItem {item} />
</main>
