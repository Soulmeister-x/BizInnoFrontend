<script>
	import { BASE_API } from '$lib/config';
	import { onMount } from 'svelte';
	import { userConfig } from '$lib/stores';

	let userId = $userConfig.userId;
	const endpoint = BASE_API + '/unternehmen/' + userId;
	let userProfile = $state(null);
	let edit_mode_enabled = $state(false);

	onMount(async function () {
		try {
			const response = await fetch(endpoint);
			const data = await response.json();
			userProfile = data;
		} catch (error) {
			console.log('Fehler beim Laden des Benutzerprofils:', error);
		}
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
						<div><input type="text" value={userProfile?.name || ''} name="name" id="name" /></div>
						<div>
							<input type="text" value={userProfile?.branche || ''} name="branche" id="branche" />
						</div>
						<div>
							<input
								type="text"
								value={userProfile?.keywords || ''}
								name="specialization"
								id="specialization"
							/>
						</div>
						<div>
							<input type="text" value={userProfile?.city || ''} name="city" id="city" />
						</div>
						<div>
							<input
								type="text"
								value={userProfile?.region?.zipcode || ''}
								name="zipcode"
								id="zipcode"
							/>
						</div>
						<div>
							<input
								type="text"
								value={userProfile?.radius || ''}
								name="search_radius"
								id="search_radius"
							/>
						</div>
					</form>
				{:else if userProfile}
					<div><p>{userProfile?.name || '-'}</p></div>
					<div><p>{userProfile?.branche || '-'}</p></div>
					<div><p>{userProfile?.keywords || '-'}</p></div>
					<div><p>{userProfile?.city || '-'}</p></div>
					<div><p>{userProfile?.zipcode || '-'}</p></div>
					<div><p>{userProfile?.radius || '-'} km</p></div>
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
