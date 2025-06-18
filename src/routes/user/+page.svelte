<script>
	import { BASE_API } from '$lib/config';
	import { onMount } from 'svelte';
	const endpoint = BASE_API + '/profile';
	let userProfile = $state();
	let start_date = $state('08/05/25');
	let end_date = $state();

	onMount(async function () {
		const response = await fetch(endpoint);
		const data = await response.json();
		userProfile = data;
	});
</script>

<svelte:head>
	<title>Profil</title>
</svelte:head>

<main class="pt-8">
	<div class="container mx-auto p-4 border-2 rounded-lg shadow-md">
		<h1 class="text-2xl font-bold text-center mb-4">User Profile</h1>

		{#if userProfile}
			<div class="mb-4">
				<p class="text-gray-700"><strong>Company Name:</strong> {userProfile.name}</p>
			</div>

			<div class="mb-4">
				<p class="text-gray-700"><strong>Type:</strong> {userProfile.type_name}</p>
			</div>

			<div class="mb-4">
				<p class="text-gray-700"><strong>Specialization:</strong> {userProfile.specialization}</p>
			</div>

			<div class="mb-4">
				<p class="text-gray-700">
					<strong>Location:</strong>
					{userProfile.region.city}, {userProfile.region.zipcode}
				</p>
			</div>

			<div class="mb-4">
				<p class="text-gray-700"><strong>Search Radius:</strong> {userProfile.region.radius} km</p>
			</div>
		{/if}
	</div>
</main>

<style>
	.container {
		max-width: 600px;
		margin: 0 auto;
	}
</style>
