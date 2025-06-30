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
			const response = await fetch(endpoint, {
				headers: {
					'Content-Type': 'application/json',
					'ngrok-skip-browser-warning': 'true'
				}
			});
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

<main class="p-8">
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
		<h1 class="text-2xl font-bold text-center mb-4">
			User Profile (ID={userId})
		</h1>
		<div id="profile-table" class="columns-2">
			<div>
				<div><label for="name"><strong>Name:</strong></label></div>
				<div><label for="description"><strong>Beschreibung:</strong></label></div>
				<div><label for="keywords"><strong>Keywords:</strong></label></div>
				<div><label for="branche"><strong>Branche:</strong></label></div>
				<div><label for="email"><strong>E-Mail:</strong></label></div>
			</div>
			<div>
				{#if edit_mode_enabled}
					<form method="post" id="formUser">
						<div><input type="text" value={userProfile?.name ?? ''} name="name" id="name" /></div>
						<div>
							<input
								type="text"
								value={userProfile?.description ?? ''}
								name="description"
								id="description"
							/>
						</div>
						<div>
							<input
								type="text"
								value={userProfile?.keywords ?? ''}
								name="keywords"
								id="keywords"
							/>
						</div>
						<div>
							<input type="text" value={userProfile?.branche ?? ''} name="branche" id="branche" />
						</div>
						<div>
							<input type="text" value={userProfile?.email ?? ''} name="email" id="email" />
						</div>
						<div hidden aria-hidden="true" class="display:none;">
							<input type="number" hidden name="id" id="id" value={userId} />
						</div>
					</form>
				{:else if userProfile}
					<div><p>{userProfile?.name ?? '-'}</p></div>
					<div><p>{userProfile?.description ?? '-'}</p></div>
					<div><p>{userProfile?.keywords ?? '-'}</p></div>
					<div><p>{userProfile?.branche ?? '-'}</p></div>
					<div><p>{userProfile?.email ?? '-'}</p></div>
				{/if}
			</div>
		</div>
		{#if edit_mode_enabled}
			<div class="relative mt-8">
				<button
					form="formUser"
					class="absolute bottom-0 right-0 cursor-pointer"
					type="submit"
					formaction="">OK</button
				>
			</div>
		{/if}
	</div>
</main>
