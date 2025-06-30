<script lang="ts">
	export let item: any;
</script>

<div class="grid grid-cols-[auto_1fr] gap-x-6">
	<div><strong>ID:</strong></div>
	<div><a href="/vorschlag/{item.id}">{item.id}</a></div>
	<div><strong>Ausschreibung:</strong></div>
	<div>
		<a href="/ausschreibungen/{item.ausschreibung_id}">{item.ausschreibung_id}</a>
	</div>
	<div><strong>Matching Score:</strong></div>
	<div><p>{item.matching_score}</p></div>
	<div><strong>Status:</strong></div>
	<div><p>{item.status}</p></div>
	<div><strong>Vorgeschlagen am:</strong></div>
	<div><p>{item.vorgeschlagen_am}</p></div>
	<div><strong>Aktualisiert am:</strong></div>
	<div><p>{item.aktualisiert_am}</p></div>
</div>
