<script>
	let { tender } = $props();
</script>

{#if tender}
	<h2>(ID={tender.id}) {tender.titel}</h2>
	<p class="text-gray-600">
		Source: <a href={tender.quelle_url} target="_blank">{tender.quelle_url}</a>
	</p>
	<p>
		Beschreibung: {tender.description}
	</p>
	<p class="text-gray-600">Ort: {tender.ort}</p>
	<p class="text-gray-600">Kategorien: {tender.kategorien}</p>
	<p class="text-gray-600">
		Published: {#if tender.veroeffentlichungsdatum}{new Date(
				tender.veroeffentlichungsdatum
			).toLocaleDateString()}{/if}
	</p>
	<p class="text-gray-600">
		Deadline: {#if tender.veroeffentlichungsdatum}{new Date(
				tender.bewerbungsfrist
			).toLocaleDateString()}{/if}
	</p>
{/if}
