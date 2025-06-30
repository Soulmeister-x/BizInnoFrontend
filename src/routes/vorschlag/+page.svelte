<script lang="ts">
	export let data;
	const { vorschlaege } = data;
</script>

<svelte:head>
	<title>Vorschlag</title>
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
	{#if vorschlaege}
		<div class="container mx-auto p-4 border-2 rounded-lg shadow-md">
			<div id="profile-table">
				{#each vorschlaege as vorschlag}
					<div class="grid grid-cols-[auto_1fr] gap-x-6">
						<div><strong>ID:</strong></div>
						<div><a href="/vorschlag/{vorschlag?.id}">{vorschlag?.id ?? ''}</a></div>
						<div><strong>Ausschreibung:</strong></div>
						<div>
							<a href="/ausschreibungen/{vorschlag?.ausschreibung_id}"
								>{vorschlag?.ausschreibung_id ?? ''}</a
							>
						</div>
						<div><strong>Matching Score:</strong></div>
						<div><p>{vorschlag?.matching_score ?? ''}</p></div>
						<div><strong>Vorgeschlagen am:</strong></div>
						<div><p>{vorschlag?.vorgeschlagen_am ?? ''}</p></div>
						<div><strong>Aktualisiert am:</strong></div>
						<div><p>{vorschlag?.aktualisiert_am ?? ''}</p></div>
					</div>
				{/each}
			</div>
		</div>
	{:else}
		<p>loading...</p>
	{/if}
</main>
