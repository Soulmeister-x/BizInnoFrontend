<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<nav class="flex h-10 items-center">
	<div class="bg-blue-500 h-full w-1/4 flex items-center justify-center">
		<h1>COMPANY</h1>
	</div>
	<div class="bg-amber-600 h-full flex grow justify-evenly items-center">
		<a href="/">home</a>
		<a href="/search">Search</a>
		<a href="/inbox">Inbox</a>
		<a href="/user">Profile</a>
		<a href="/tenders">Tenders</a>
	</div>
</nav>

{@render children()}
