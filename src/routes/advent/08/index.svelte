<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	let username: string;
	let accesscode: string;

	onMount(() => {
		username = localStorage.getItem('username');
		accesscode = localStorage.getItem('accesscode');
		if (username === null || accesscode === null) {
			goto('/advent/access');
		}
	});
</script>

<svelte:head>
	<title>8th December</title>
</svelte:head>

<div class="container">
	<h1 class="title">Achter Dezember</h1>

	<div class="quest">
		<h2 class="quest-title">Aufgabe</h2>
	</div>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
	}

	.title {
		font-style: italic;
	}
</style>
