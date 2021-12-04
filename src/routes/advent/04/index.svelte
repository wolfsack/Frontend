<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	let username: string;
	let accesscode: string;

	let answer_1: string;
	let answer_0: string;

	onMount(() => {
		username = localStorage.getItem('username');
		accesscode = localStorage.getItem('accesscode');
		if (username === null || accesscode === null) {
			goto('/advent/access');
		}
	});
</script>

<svelte:head>
	<title>4th December</title>
</svelte:head>

<div class="container">
	<h1 class="title">Vierter Dezember</h1>

	<div class="wrapper">
		<h2 class="quest-title">Aufgabe</h2>
		<p class="quest-text">
			Nach drei Aufgaben Rätsel-Raten wird es Zeit sich wieder etwas Handfesterem zu widmen!<br />
			Fangen wir mit einfachen Rechenaufgaben an:
		</p>
		<div class="quest-quests">
			<div class="quest">
				<p class="discription">Was ist x?</p>
				<p class="tip">Hinweis: Bit Operation</p>
				<img class="quest-img" src="/images/advent/quest-0.png" alt="question-0" />
				<form class="quest-form">
					<input
						type="text"
						id="quest-1-input"
						name="quest-1-input"
						class="quest-input"
						placeholder="Deine Antwort"
						bind:value={answer_0}
					/>
				</form>
				{#if answer_0 === '001111' || answer_0 === '1111' || answer_0 === '01111'}
					<h3 class="result result-right">Deine Antwort ist richtig!</h3>
				{:else}
					<h3 class="result result-wrong">Deine Antwort ist falsch!</h3>
				{/if}
			</div>
			<div class="quest">
				<p class="discription">Was ist y?</p>
				<p class="tip">Hinweis: Hex Operation</p>
				<img class="quest-img" src="/images/advent/quest-1.png" alt="question-1" />
				<form class="quest-form">
					<input
						type="text"
						id="quest-1-input"
						name="quest-1-input"
						class="quest-input"
						placeholder="Deine Antwort"
						bind:value={answer_1}
					/>
				</form>
				{#if answer_1 === 'E0E' || answer_1 === 'e0e'}
					<h3 class="result result-right">Deine Antwort ist richtig!</h3>
				{:else}
					<h3 class="result result-wrong">Deine Antwort ist falsch!</h3>
				{/if}
			</div>
		</div>
	</div>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
	}

	.wrapper {
		margin-top: 2em;
	}

	.title {
		font-style: italic;
	}

	.quest-text {
		padding: 2em;
		font-size: 1.2rem;
		font-weight: 600;
		font-style: italic;
	}

	.quest-quests {
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	.discription {
		font-size: 1.2rem;
	}

	.tip {
		padding: 0.5em;
		font-style: italic;
	}

	.quest {
		border: 1px solid gray;
		padding: 3em;
	}

	.quest-img {
		max-width: 200px;
		width: 70%;
		margin: 2em;
	}

	.quest-form {
		display: flex;
		flex-direction: column;
		gap: 1.5em;
		align-items: center;
	}

	.quest-input {
		font-size: 1.5rem;
		border-radius: 5%;
		font-style: italic;
	}

	.result {
		margin-top: 2em;
	}

	.result-wrong {
		color: red;
	}

	.result-right {
		color: rgb(0, 231, 0);
	}

	@media (max-width: 800px) {
		.quest-quests {
			flex-direction: column;
			gap: 2em;
		}
	}
</style>
