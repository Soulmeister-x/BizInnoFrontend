<script lang="ts">
	export let item: any;
</script>

<div class="grid grid-cols-[auto_1fr] gap-x-6">
	<p><strong>Beschreibung:</strong></p>
	<p>{item.beschreibung}</p>
	<p><strong>Ort:</strong></p>
	<p>{item.ort}</p>
	<p><strong>Kategorien:</strong></p>
	<p>{item.kategorien}</p>
	<p>
		<strong>Published:</strong>
	</p>
	<p>
		{#if item.veroeffentlichungsdatum}
			{new Date(item.veroeffentlichungsdatum).toLocaleDateString()}
		{/if}
	</p>
	<p><strong> Deadline:</strong></p>
	<p>
		{#if item.veroeffentlichungsdatum}{new Date(item.bewerbungsfrist).toLocaleDateString()}{/if}
	</p>
</div>
