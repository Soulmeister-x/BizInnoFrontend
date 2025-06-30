<script lang="ts">
	import AnfrageItem from './AnfrageItem.svelte';

	export let data;
	const { items } = data;
</script>

<svelte:head>
	<title>Anfragen</title>
	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
</svelte:head>

<main class="p-8">
	<div class="container mx-auto p-4 border-2 rounded-lg shadow-md">
		{#each items as item}
			<AnfrageItem {item} />
		{/each}
	</div>
</main>
