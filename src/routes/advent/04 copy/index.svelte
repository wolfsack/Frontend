<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	let username: string;
	let accesscode: string;

	onMount(() => {
		username = localStorage.getItem('username');
		accesscode = localStorage.getItem('accesscode');
		if (username === null || accesscode === null) {
			goto('/advent/04/access');
		}
	});
</script>

<div>Hello Advent!</div>
