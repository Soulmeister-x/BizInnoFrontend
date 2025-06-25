<script>
	import { BASE_API } from '$lib/config';
	import { onMount } from 'svelte';
	const endpoint = BASE_API + '/inbox';
	let items = $state([]);
	let start_date = $state('08/05/25');
	let end_date = $state();

	onMount(async function () {
		const response = await fetch(endpoint);
		const data = await response.json();
		items = data.map((item) => {
			return {
				...item,
				showSummary: false,
				showFeedback: false
			};
		});
	});

	function toggleVisibility(item, type) {
		if (type === 'summary') {
			item.showSummary = !item.showSummary;
			if (item.showFeedback) item.showFeedback = false;
		} else if (type === 'feedback') {
			item.showFeedback = !item.showFeedback;
			if (item.showSummary) item.showSummary = false;
		}
	}
</script>

<svelte:head>
	<title>Nachrichten</title>
	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
</svelte:head>

<div class="m-8">
	<p class="ml-2 mr-8 mb-8">
		In your inbox, you will find all relevant tenders tailored to your individual company criteria.
	</p>

	<div class="bg-gray-300 rounded-2xl p-8">
		<div class="flex justify-end">
			<!-- Search field -->
			<div class="flex grow mr-14 m-6 pr-4 bg-white rounded-xl w-1/2 place-items-center">
				<input class="m-4 border-b-2 grow" type="text" name="search_term" id="search_term" />
				<i class="material-icons">search</i>
			</div>
			<!-- Filter -->
			<div class="flex items-center">
				<p class="bg-white min-w-20 pl-8 pr-8 p-4 rounded-xl">{start_date}</p>
				<span class="h-0 w-6 m-3 border-2"></span>
				<p class="bg-white min-w-20 pl-8 pr-8 p-4 rounded-xl">{end_date || 'heute'}</p>
				<div class="flex ml-12 w-min p-4 pl-6 pr-6 bg-white rounded-xl justify-items-center">
					<i class="material-icons">settings</i>
				</div>
			</div>
		</div>
		<!-- Ausschreibungen -->
		<div>
			{#each items as item}
				<div class="bg-white w-full mt-8 p-6 rounded-xl">
					<div class="flex pt-4 pb-4">
						<h2 class="grow self-center text-2xl">{item.title}</h2>
						<button
							onclick={() => {
								toggleVisibility(item, 'summary');
							}}
							class="flex bg-red-950 text-white ml-6 p-4 rounded-sm place-items-center"
						>
							<p>Summary</p>
							<i class="material-icons pl-2">assignment</i>
						</button>
						<button
							onclick={() => {
								toggleVisibility(item, 'feedback');
							}}
							class="flex bg-green-800 text-white ml-6 p-4 rounded-sm place-items-center"
						>
							<p>Feedback</p>
							<i class="material-icons pl-2">edit</i>
						</button>
					</div>
					<div class="border-1 border-gray-400 rounded-xl">
						{#if item.showSummary}
							<p class="m-6">{item.summary}</p>
						{:else if item.showFeedback}
							<p class="m-6">{item.feedback}</p>
						{/if}
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
