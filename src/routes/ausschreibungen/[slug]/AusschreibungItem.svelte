<script lang="ts">
	export let item: any;
</script>

<div class="container mx-auto p-4 border-2 rounded-lg shadow-md">
	<h2 class="text-2xl font-bold text-center mb-4">Ausschreibung #{item.id}</h2>
	<hr />
	<div class="pt-6 grid grid-cols-[auto_1fr] gap-x-6">
		<p><strong>Titel:</strong></p>
		<p>{item.titel}</p>
		<p><strong>Beschreibung:</strong></p>
		<p>{item.description}</p>
		<p><strong>Ort:</strong></p>
		<p>{item.ort}</p>
		<p><strong>Kategorien:</strong></p>
		<p>{item.kategorien}</p>
		<p><strong> Source:</strong></p>
		<p><a href={item.quelle_url} target="_blank">{item.quelle_url}</a></p>
		<p><strong> Published:</strong></p>
		<p>
			{#if item.veroeffentlichungsdatum}{new Date(
					item.veroeffentlichungsdatum
				).toLocaleDateString()}{/if}
		</p>
		<p><strong> Deadline:</strong></p>
		<p>
			{#if item.veroeffentlichungsdatum}{new Date(item.bewerbungsfrist).toLocaleDateString()}{/if}
		</p>
	</div>
</div>
