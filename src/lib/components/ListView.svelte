<script lang="ts">
	import type { SvelteComponent } from 'svelte';
	export let items: any[] = [];
	export let titel: string = '';
	export let baseUrl: string = '';
	export let itemComponent: typeof SvelteComponent<{ item: any }>;
</script>

<div class="container mx-auto p-4">
	{#if items.length > 0}
		{#each items as item}
			<div class="block mb-4 p-4 border rounded-md hover:bg-gray-50 shadow-md transition-colors">
				<a href="{baseUrl}/{item.id}">
					<h2>{titel} #{item.id}</h2>
					<svelte:component this={itemComponent} {item} />
				</a>
			</div>
		{/each}
	{:else}
		<p class="text-center text-gray-500">Keine Elemente zum Anzeigen verfügbar.</p>
	{/if}
</div>
