<script>
	import { BASE_API } from '$lib/config';
	import { onMount } from 'svelte';
	import { setContext } from 'svelte';
	import AusschreibungListEntry from './AusschreibungListEntry.svelte';
	const endpoint = BASE_API + '/ausschreibung';
	let tenders = $state([]);
	let start_date = $state('08/05/25');
	let end_date = $state(Date.now());

	onMount(async function () {
		const response = await fetch(endpoint, {
			headers: {
				'Content-Type': 'application/json',
				'ngrok-skip-browser-warning': 'true'
			}
		});
		const data = await response.json();
		tenders = data;
	});
</script>

<svelte:head>
	<title>Ausschreibungen</title>
</svelte:head>

<h1>Ausschreibungen</h1>
<p>Hier siehst du alle verfügbaren Ausschreibungen.</p>

<br />
<div class="container mx-auto p-4">
	{#each tenders as tender (tender.id)}
		<div class="mb-4 border rounded-lg shadow-md p-4">
			<a href="/ausschreibungen/{tender.id}">
				<AusschreibungListEntry {tender}></AusschreibungListEntry>
			</a>
		</div>
	{/each}
</div>
