<script lang="ts">
	export let data;
	const { anfragen } = data;
</script>

<svelte:head>
	<title>Anfragen</title>
	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
</svelte:head>

<main class="p-8">
	<div class="container mx-auto p-4 border-2 rounded-lg shadow-md">
		<div id="profile-table" class="grid grid-cols-[auto_1fr] gap-x-6">
			{#each anfragen as anfrage}
				<div><strong>ID:</strong></div>
				<div><a href="/anfragen/{anfrage?.id}">{anfrage?.id ?? ''}</a></div>
				<div><strong>Vorschlag:</strong></div>
				<div><a href="/vorschlag/{anfrage?.vorschlag_id}">{anfrage?.vorschlag_id ?? ''}</a></div>
				<div><strong>Text:</strong></div>
				<div><p>{anfrage?.generierter_text ?? ''}</p></div>
				<div><strong>Erstellungsdatum:</strong></div>
				<div><p>{anfrage?.erstellt_am ?? ''}</p></div>
			{/each}
		</div>
	</div>
</main>
