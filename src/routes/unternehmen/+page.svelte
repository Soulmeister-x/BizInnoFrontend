<script lang="ts">
	import type { PageData } from './$types';

	const { data } = $props<{ data: PageData }>();
	let { userProfile } = data;
	let edit_mode_enabled = $state(false);
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
		<h1 class="text-2xl font-bold text-center mb-4">Unternehmensprofil</h1>
		<div>
			<form
				method="post"
				id="formUser"
				class="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 items-center"
			>
				<div><label for="name"><strong>Name:</strong></label></div>
				<div>
					{#if edit_mode_enabled}<input
							type="text"
							value={userProfile?.name ?? ''}
							name="name"
							id="name"
						/>
					{:else}
						<div><p>{userProfile.name}</p></div>
					{/if}
				</div>
				<div><label for="description"><strong>Beschreibung:</strong></label></div>
				<div>
					{#if edit_mode_enabled}<input
							type="text"
							value={userProfile?.description ?? ''}
							name="description"
							id="description"
						/>{:else}
						<div><p>{userProfile.description}</p></div>
					{/if}
				</div>
				<div><label for="keywords"><strong>Keywords:</strong></label></div>
				<div>
					{#if edit_mode_enabled}<input
							type="text"
							value={userProfile?.keywords ?? ''}
							name="keywords"
							id="keywords"
						/>{:else}
						<div><p>{userProfile.keywords}</p></div>
					{/if}
				</div>
				<div><label for="branche"><strong>Branche:</strong></label></div>
				<div>
					{#if edit_mode_enabled}<input
							type="text"
							value={userProfile?.branche ?? ''}
							name="branche"
							id="branche"
						/>{:else}
						<div><p>{userProfile.branche}</p></div>
					{/if}
				</div>
				<div><label for="email"><strong>E-Mail:</strong></label></div>
				<div>
					{#if edit_mode_enabled}<input
							type="text"
							value={userProfile?.email ?? ''}
							name="email"
							id="email"
						/>{:else}
						<div><p>{userProfile.email}</p></div>
					{/if}
				</div>
				<div>
					<div hidden aria-hidden="true" class="display:none;">
						<input type="number" hidden name="id" id="id" value={userProfile.id} />
					</div>
				</div>
			</form>
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
