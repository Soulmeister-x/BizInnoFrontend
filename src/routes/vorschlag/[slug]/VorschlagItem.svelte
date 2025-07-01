<script lang="ts">
	export let item: any;


    // Berechne den Prozentwert für die Anzeige
    const matchingScorePercent = Math.round(item.matching_score * 100);

    // Bestimme die Farbe basierend auf dem Score
    let indicatorColorClass: string;
    if (matchingScorePercent >= 80) {
        indicatorColorClass = 'bg-green-500'; // 80-100%
    } else if (matchingScorePercent >= 50) {
        indicatorColorClass = 'bg-lime-500'; // 50-79% (helleres Grün/Gelbgrün)
    } else if (matchingScorePercent >= 20) {
        indicatorColorClass = 'bg-orange-500'; // 20-49%
    } else {
        indicatorColorClass = 'bg-red-500'; // 0-19%
    }
</script>

<div class="container mx-auto p-4 border-2 rounded-lg shadow-md relative">

    <div
        class="absolute top-4 right-4 w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg {indicatorColorClass}"
        title="Matching Score: {matchingScorePercent}%"
    >
        {matchingScorePercent}%
    </div>
	<h2 class="text-2xl font-bold text-center mb-4">Vorschlag #{item.id}</h2>
	<hr />
	<div class="grid grid-cols-[auto_1fr] gap-x-6">
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
</div>
