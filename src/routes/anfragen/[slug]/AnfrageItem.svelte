<script lang="ts">
	export let item: any;
</script>

<div class="container mx-auto p-4 border-2 rounded-lg shadow-md">
	<h2 class="text-2xl font-bold text-center mb-4">Anfrage #{item.id}</h2>
	<hr />
	<div class="pt-6 grid grid-cols-[auto_1fr] gap-x-6">
		<div><strong>Vorschlag:</strong></div>
		<div>
			<a href="/vorschlag/{item?.vorschlag_id}">{item?.vorschlag_id}</a>
		</div>
		<div><strong>Text:</strong></div>
		<div><p>{item?.generierter_text}</p></div>
		<div><strong>Status:</strong></div>
		<div><p>{item?.status}</p></div>
		<div><strong>Erstellungsdatum:</strong></div>
		<div><p>{item?.erstellt_am}</p></div>
	</div>
</div>
