<script>
	let items = [
		{
			title: 'Ausschreibung 1',
			summary: 'Lorem Ipsum dolor met...'
		},
		{
			title: 'Ausschreibung 2',
			summary: 'Lorem Ipsum dolor met...'
		},
		{
			title: 'Ausschreibung 3',
			summary: 'Lorem Ipsum dolor met...'
		}
	];

	let start_date = $state('08/05/25');
	let end_date = $state();
</script>

<link rel="stylesheet" href="icons.css" />

<div class="m-8">
	<p class="ml-2 mr-8 mb-8">
		In your inbox, you will find all relevant tenders tailored to your individual company criteria.
	</p>

	<div class="bg-gray-300 rounded-2xl p-8">
		<div class="flex justify-end">
			<!-- Search field -->
			<div class="flex grow mr-14 m-6 pr-4 bg-white rounded-xl w-1/2 place-items-center">
				<input class="m-4 border-b-2 grow" type="text" name="search_term" id="search_term" />
				<span class="material-symbols--search p-5"></span>
			</div>
			<!-- Filter -->
			<div class="flex items-center">
				<p class="bg-white min-w-20 pl-8 pr-8 p-4 rounded-xl">{start_date}</p>
				<span class="h-0 w-6 m-3 border-2"></span>
				<p class="bg-white min-w-20 pl-8 pr-8 p-4 rounded-xl">{end_date || 'heute'}</p>
				<div class="flex ml-12 w-min p-4 pl-6 pr-6 bg-white rounded-xl justify-items-center">
					<span class="material-symbols--settings self-center p-4"></span>
				</div>
			</div>
		</div>
		<!-- Ausschreibungen -->
		<div>
			{#each items as item}
				<div class="bg-white w-full mt-8 p-6 rounded-xl">
					<div class="flex pt-4 pb-4">
						<h2 class="grow self-center text-2xl">{item.title}</h2>
						<div class="flex bg-red-950 text-white ml-6 p-4 rounded-sm place-items-center">
							<p>Summary</p>
							<span class="material-symbols--clipboard p-4 ml-2"></span>
						</div>
						<div class="flex bg-green-800 text-white ml-6 p-4 rounded-sm place-items-center">
							<p>Feedback</p>
							<span class="material-symbols--pencil p-4 ml-2"></span>
						</div>
					</div>
					<div class="border-1 border-gray-400 p-6 rounded-xl">
						<p>{item.summary}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
