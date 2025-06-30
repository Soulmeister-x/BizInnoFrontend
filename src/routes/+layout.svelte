<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/state';
	import '../app.css';

	let { children } = $props();

	let currentRoute = $state(page.route.id);
	let currentHover = $state();

	const navMenuEntries = [
		{ href: '/', title: 'Home' },
		{ href: '/unternehmen', title: 'Unternehmen' },
		{ href: '/ausschreibungen', title: 'Ausschreibungen' },
		{ href: '/vorschlag', title: 'Vorschläge' },
		{ href: '/anfragen', title: 'Anfragen' }
	];

	const select_hover = (href: string) => {
		currentHover = href;
	};
	const deselect_hover = () => {
		currentHover = null;
	};

	afterNavigate(() => {
		currentRoute = page.route.id as string;
	});
</script>

<header class="flex h-16 items-center bg-gray-400">
	<div class="h-full w-1/4 flex items-center justify-center">
		<h1>COMPANY</h1>
	</div>
	<nav class="h-full flex grow justify-end items-center justify-items-center">
		{#each navMenuEntries as entry}
			<a
				href={entry.href}
				class="h-full m-auto text-center grow text-sm/16 custom-a"
				class:highlighted={currentRoute == entry.href}
				class:hovered={currentHover == entry.href}
				onmouseenter={() => select_hover(entry.href)}
				onmouseleave={deselect_hover}
			>
				{entry.title}
			</a>
		{/each}
	</nav>
</header>
<hr />

{@render children()}

<style>
	.highlighted {
		background-color: whitesmoke;
	}
	.hovered {
		background-color: burlywood;
	}
	.custom-a {
		color: black;
	}
</style>
