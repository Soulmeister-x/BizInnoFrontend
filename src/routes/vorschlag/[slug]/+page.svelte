<script lang="ts">
	export let data;
	const { vorschlag } = data;

	const vorschlagId = vorschlag.id;
</script>

<svelte:head>
	<title>Vorschlag {vorschlagId}</title>
	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
</svelte:head>

<main class="p-8">
	<div class="container mx-auto p-4 border-2 rounded-lg shadow-md">
		<h1 class="text-2xl font-bold text-center mb-4">Vorschlag</h1>
		<hr />
		<div id="profile-table" class="pt-6 grid grid-cols-[auto_1fr] gap-x-6">
			<div><strong>ID:</strong></div>
			<div><p>{vorschlag?.id ?? ''}</p></div>
			<div><strong>Ausschreibung:</strong></div>
			<div>
				<a href="/ausschreibungen/{vorschlag?.ausschreibung_id}"
					>{vorschlag?.ausschreibung_id ?? ''}</a
				>
			</div>
			<div><strong>Matching Score:</strong></div>
			<div><p>{vorschlag?.matching_score ?? ''}</p></div>
			<div><strong>Status:</strong></div>
			<div><p>{vorschlag?.status ?? ''}</p></div>
			<div><strong>Erstellungsdatum:</strong></div>
			<div><p>{vorschlag?.vorgeschlagen_am ?? ''}</p></div>
			<div><strong>Aktualisiert am:</strong></div>
			<div><p>{vorschlag?.aktualisiert_am ?? ''}</p></div>
		</div>
	</div>
</main>
