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

<div class="flex items-center space-x-4">
    <div
        class="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-sm {indicatorColorClass}"
        title="Matching Score: {matchingScorePercent}%"
    >
        {matchingScorePercent}%
    </div>
<div class="grid grid-cols-[auto_1fr] gap-x-6">
	<div><strong>Ausschreibung:</strong></div>
	<div><p><a href="/ausschreibungen/{item.ausschreibung_id}">{item.ausschreibung_id}</a></p></div>
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
