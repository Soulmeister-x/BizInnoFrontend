<script>
	import { BASE_API } from '$lib/config';
	import { onMount } from 'svelte';
	const endpoint = BASE_API + '/tenders';
	let tenders = $state([]);
	let start_date = $state('08/05/25');
	let end_date = $state();

	onMount(async function () {
		const response = await fetch(endpoint);
		const data = await response.json();
		tenders = data;
	});
</script>

<svelte:head>
	<title>Ausschreibungen</title>
</svelte:head>

<h1>Tenders</h1>
<p>Your tenders from the past, future and present.</p>

<br />
<div class="container mx-auto p-4">
	{#each tenders as tender (tender.id)}
		<div class="mb-4 border rounded-lg shadow-md p-4">
			<h2>{tender.titel}</h2>
			<p class="text-gray-600">
				Source: <a href={tender.quelle_url} target="_blank">{tender.quelle_url}</a>
			</p>
			<p class="text-gray-600">
				Published: {new Date(tender.veroeffentlichungsdatum).toLocaleDateString()}
			</p>
			<p class="text-gray-600">Deadline: {new Date(tender.bewerbungsfrist).toLocaleDateString()}</p>
			<p class="text-gray-600">Categories: {tender.kategorien}</p>
			<p class="text-gray-600">Location: {tender.ort}</p>
		</div>
	{/each}
</div>
