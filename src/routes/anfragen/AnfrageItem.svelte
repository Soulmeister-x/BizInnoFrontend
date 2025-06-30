<script lang="ts">
	export let item: any;
</script>

<a href="/anfragen/{item.id}">
	<div>
		<h2>Anfrage #{item.id}</h2>

		<div class="grid grid-cols-[auto_1fr] gap-x-6">
			<div><strong>Vorschlag:</strong></div>
			<div><p>{item.generierter_text ?? ''}</p></div>
			<div><strong>Erstellungsdatum:</strong></div>
			<div><p>{item.erstellt_am ?? ''}</p></div>
		</div>
	</div></a
>
