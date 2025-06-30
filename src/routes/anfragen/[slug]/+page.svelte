<script lang="ts">
	export let data;
	const { item } = data;
</script>

<svelte:head>
	<title>Anfrage</title>
	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
</svelte:head>

<main class="p-8">
	{#if data.error}
		<p style="color: red;">{data.message}</p>
	{:else}
		<div class="container mx-auto p-4 border-2 rounded-lg shadow-md">
			<h1 class="text-2xl font-bold text-center mb-4">Anfrage #{item.id}</h1>
			<hr />
			<div id="profile-table" class="pt-6 grid grid-cols-[auto_1fr] gap-x-6">
				<div><strong>Vorschlag:</strong></div>
				<div>
					<a href="/vorschlag/{item?.vorschlag_id}">{item?.vorschlag_id ?? ''}</a>
				</div>
				<div><strong>Text:</strong></div>
				<div><p>{item?.generierter_text ?? ''}</p></div>
				<div><strong>Status:</strong></div>
				<div><p>{item?.status ?? ''}</p></div>
				<div><strong>Erstellungsdatum:</strong></div>
				<div><p>{item?.erstellt_am ?? ''}</p></div>
			</div>
		</div>
	{/if}
</main>
