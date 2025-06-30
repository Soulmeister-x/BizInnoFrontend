<script lang="ts">
	import AnfrageItem from './AnfrageItem.svelte';

	export let data;
	const { item } = data;
</script>

<svelte:head>
	<title>Anfrage</title>
	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
</svelte:head>

<main class="p-8">
	<AnfrageItem {item} />
</main>
