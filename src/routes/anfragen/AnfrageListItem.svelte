<script lang="ts">
	export let item: any;
</script>

<div>
	<div class="grid grid-cols-[auto_1fr] gap-x-6">
		<div><strong>Vorschlag:</strong></div>
		<div><p>{item.generierter_text}</p></div>
		<div><strong>Erstellungsdatum:</strong></div>
		<div><p>{item.erstellt_am}</p></div>
	</div>
</div>
