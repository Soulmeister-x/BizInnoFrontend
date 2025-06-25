<script>
	import { BASE_API } from '$lib/config';
	import { onMount } from 'svelte';
	const endpoint = BASE_API + '/profile';
	let userProfile = $state();
	let start_date = $state('08/05/25');
	let end_date = $state();
	let edit_mode_enabled = $state(false);

	onMount(async function () {
		const response = await fetch(endpoint);
		const data = await response.json();
		userProfile = data;
	});
</script>

<svelte:head>
	<title>Profil</title>
	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
</svelte:head>

<main class="pt-8">
	<div class="container mx-auto p-4 border-2 rounded-lg shadow-md">
		<div class="relative">
			<button
				class="absolute right-0 cursor-pointer"
				onclick={() => (edit_mode_enabled = !edit_mode_enabled)}
			>
				{#if edit_mode_enabled}
					<i class="material-icons">close</i>
				{:else}
					<i class="material-icons">edit_square</i>
				{/if}
			</button>
		</div>
		<h1 class="text-2xl font-bold text-center mb-4">User Profile</h1>
		<div id="profile-table" class="columns-2">
			<div>
				<div><label for="name"><strong>Company Name:</strong></label></div>
				<div><label for="branche"><strong>Branche:</strong></label></div>
				<div><label for="specialization"><strong>Specialization:</strong></label></div>
				<div><label for="city"><strong>City:</strong></label></div>
				<div><label for="zipcode"><strong>Zip Code:</strong></label></div>
				<div><label for="search_radius"><strong>Search Radius:</strong></label></div>
			</div>
			<div>
				{#if edit_mode_enabled}
					<form method="post">
						<div><input type="text" value={userProfile.name} name="name" id="name" /></div>
						<div>
							<input type="text" value={userProfile.type_name} name="branche" id="branche" />
						</div>
						<div>
							<input
								type="text"
								value={userProfile.specialization}
								name="specialization"
								id="specialization"
							/>
						</div>
						<div><input type="text" value={userProfile.region.city} name="city" id="city" /></div>
						<div>
							<input type="text" value={userProfile.region.zipcode} name="zipcode" id="zipcode" />
						</div>
						<div>
							<input
								type="text"
								value={userProfile.region.radius}
								name="search_radius"
								id="search_radius"
							/>
						</div>
					</form>
				{:else if userProfile}
					<div><p>{userProfile.name}</p></div>
					<div><p>{userProfile.type_name}</p></div>
					<div><p>{userProfile.specialization}</p></div>
					<div><p>{userProfile.region.city}</p></div>
					<div><p>{userProfile.region.zipcode}</p></div>
					<div><p>{userProfile.region.radius} km</p></div>
				{/if}
			</div>
		</div>
		{#if edit_mode_enabled}
			<div class="relative mt-8">
				<button class="absolute bottom-0 right-0 cursor-pointer" type="submit">Send</button>
			</div>
		{/if}
	</div>
</main>

<style>
	.container {
		max-width: 600px;
		margin: 0 auto;
	}
	#profile-table > div {
		margin-bottom: 4px;
	}
	input {
		width: 100%;
	}
</style>
