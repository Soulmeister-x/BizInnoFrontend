<script lang="ts">
	import ListView from '$lib/components/ListView.svelte';
	import AnfrageListItem from './AnfrageListItem.svelte';

	export let data;
	const { items } = data;
</script>

<svelte:head>
	<title>Anfragen</title>
	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
</svelte:head>

<main class="pt-8">
	<h1>Anfragen</h1>
	<div class="mb-8">
		<p>Hier werden Anfragen aufgelistet</p>
	</div>

	<ListView {items} titel="Anfrage" baseUrl="anfragen" itemComponent={AnfrageListItem} />
</main>
