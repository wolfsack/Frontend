<script lang="ts">
	import { goto } from '$app/navigation';

	let username: string = '';
	let accesscode: string = '';
	let error: string;

	const access = '202112';

	const handleOnSubmit = () => {
		let valid_access = accesscode === access;
		let valid_username = true;

		if (valid_access && valid_username) {
			error = undefined;
			localStorage.setItem('username', username);
			localStorage.setItem('accesscode', accesscode);
			goto('/advent/');
		} else {
			if (!valid_access) {
				error = 'Wrong Access Token!';
			} else {
				error = 'Username already taken!';
			}
		}
	};
</script>

<svelte:head>
	<title>Access</title>
</svelte:head>

<div>
	<form class="access-form" on:submit|preventDefault={handleOnSubmit}>
		<input
			type="text"
			id="access-code"
			name="access-code"
			class="access-form-field"
			placeholder="access code"
			bind:value={accesscode}
		/>
		<input
			type="text"
			id="username"
			name="username"
			class="access-form-field"
			placeholder="username"
			bind:value={username}
		/>
		<input type="submit" value="Access" class="access-form-button" />
	</form>

	{#if error !== undefined}
		<div class="error">{error}</div>
	{/if}
</div>

<style>
	.access-form {
		height: 100%;
		margin-top: 10%;
		padding: 5em;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.access-form-field {
		font-size: 1.5rem;
		font-style: italic;
		margin: 1em;
		border-radius: 5%;
		width: 70%;
		max-width: 400px;
		min-width: 200px;
		height: 1.5em;
	}

	.access-form-button {
		font-size: 1.5rem;
		margin: 1em;
		border-radius: 5%;
		width: 40%;
		max-width: 300px;
		min-width: 100px;
		height: 1.5em;
	}

	.access-form-button:hover,
	.access-form-button:focus {
		background-color: gray;
	}

	.error {
		color: red;
		font-size: 1.5rem;
	}
</style>
