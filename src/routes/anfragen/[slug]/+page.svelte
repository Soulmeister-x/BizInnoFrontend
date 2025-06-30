<script lang="ts">
	export let data;
	const { selectedTender } = data;

	const tenderId = selectedTender.id;
</script>

<svelte:head>
	<title>Ausschreibung {tenderId}</title>
	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
</svelte:head>

<main class="p-8">
	<div class="container mx-auto p-4 border-2 rounded-lg shadow-md">
		<h1 class="text-2xl font-bold text-center mb-4">
			Ausschreibung (ID={tenderId})
			<hr />
		</h1>
		<div id="profile-table" class="columns-2">
			<div>
				<div><label for="name"><strong>Titel:</strong></label></div>
				<div><label for="description"><strong>Beschreibung:</strong></label></div>
				<div><label for="keywords"><strong>Kategorien:</strong></label></div>
				<div><label for="branche"><strong>Veroeffentlichungsdatum:</strong></label></div>
				<div><label for="email"><strong>Bewerbungsfrist:</strong></label></div>
			</div>
			<div>
				{#if selectedTender}
					<div><p>{selectedTender?.titel ?? '-'}</p></div>
					<div><p>{selectedTender?.beschreibung ?? '-'}</p></div>
					<div><p>{selectedTender?.kategorien ?? '-'}</p></div>
					<div><p>{selectedTender?.veroeffentlichungsdatum ?? '-'}</p></div>
					<div><p>{selectedTender?.bewerbungsfrist ?? '-'}</p></div>
				{/if}
			</div>
		</div>
	</div>
</main>
