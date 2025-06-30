<script lang="ts">
	import ListView from '$lib/components/ListView.svelte';
	import type { PageData } from './$types';
	import VorschlagListItem from './VorschlagListItem.svelte';

	export let data: PageData;
	const { items } = data;
</script>

<svelte:head>
	<title>Vorschläge</title>
	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
</svelte:head>

<main class="pt-8">
	<h1>Vorschläge</h1>
	<div class="mb-8">
		<p>
			Hier sieht man Vorschläge, für Ausschreibungen basierend auf deren Matching Score mit deinem
			Unternehmensprofil.
		</p>
	</div>
	<ListView {items} baseUrl="vorschlag" titel="Vorschlag" itemComponent={VorschlagListItem} />
</main>
