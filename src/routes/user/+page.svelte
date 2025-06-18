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
