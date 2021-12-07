<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	let username: string;
	let accesscode: string;

	let answer_0: string;
	let right_answer: string = 'ICHWUENSCHEEUCHEINESCHOENEADVENTSZEIT';
	let pass_phrase: string = 'SUPERDUPERGEHEIMESPASSWORTSIEBTERDEZE';
	let encrypted: string = 'AWWALHHHGYKIBGPQMFTSUZKSEXSLZFGXJCIHX';

	let show_help: boolean = false;

	let map = {
		A: 0,
		B: 1,
		C: 2,
		D: 3,
		E: 4,
		F: 5,
		G: 6,
		H: 7,
		I: 8,
		J: 9,
		K: 10,
		L: 11,
		M: 12,
		N: 13,
		O: 14,
		P: 15,
		Q: 16,
		R: 17,
		S: 18,
		T: 19,
		U: 20,
		V: 21,
		W: 22,
		X: 23,
		Y: 24,
		Z: 25
	};

	let map_reverse = {
		0: 'A',
		1: 'B',
		2: 'C',
		3: 'D',
		4: 'E',
		5: 'F',
		6: 'G',
		7: 'H',
		8: 'I',
		9: 'J',
		10: 'K',
		11: 'L',
		12: 'M',
		13: 'N',
		14: 'O',
		15: 'P',
		16: 'Q',
		17: 'R',
		18: 'S',
		19: 'T',
		20: 'U',
		21: 'V',
		22: 'W',
		23: 'X',
		24: 'Y',
		25: 'Z'
	};

	function encrypt(input: String, key: String) {
		if (input.length !== key.length) {
			return;
		}

		let output: String = '';
		for (var i = 0; i < input.length; i++) {
			let input_nr = map[input.charAt(i)];
			let key_nr = map[key.charAt(i)];

			let nr = (input_nr + key_nr) % 26;

			let new_char = map_reverse[nr];

			output += new_char;
		}

		return output;
	}

	function decrypt(input: String, key: String) {
		if (input.length !== key.length) {
			return;
		}
		let output: String = '';
		for (var i = 0; i < input.length; i++) {
			let input_nr = map[input.charAt(i)];
			let key_nr = map[key.charAt(i)];

			let nr = input_nr - key_nr;
			if (nr < 0) {
				nr = 26 + nr;
			}

			let new_char = map_reverse[nr];

			output += new_char;
		}

		return output;
	}

	const toggle_help = () => {
		show_help = !show_help;
	};

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
	<a class="back-link" href="/advent/">zurück</a>
	<h1 class="title">Achter Dezember</h1>
	<h2 class="quest-title">Aufgabe</h2>
	<div class="wrapper">
		<p class="quest-text">
			Ich wollte euch noch etwas super wichtiges und geheimes sagen. <br />
			Leider habe ich keine Zeit mehr meine gespeicherte Nachricht wieder zu endschlüsseln, daher gebe
			ich euch einfach die verschlüsselte Nachricht und den Schlüssel damit ihr die Nachricht selber
			entschlüsseln könnt.
		</p>
		<div class="quest-quests">
			<div class="quest">
				<p class="discription">Was wollte ich euch noch sagen?</p>
				<p class="tip">Hinweis: Hilfe gibts weiter unten</p>
				<h2 class="quest-given">
					Meine verschlüsselte Nachricht: <br />
					{encrypted}
				</h2>
				<h2 class="quest-given">
					Der Schlüssel zum entschlüsseln: <br />
					{pass_phrase}
				</h2>
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
				{#if answer_0 === right_answer || answer_0 === right_answer || answer_0 === right_answer}
					<h3 class="result result-right">Deine Antwort ist richtig!</h3>
				{:else}
					<h3 class="result result-wrong">Deine Antwort ist falsch!</h3>
				{/if}
			</div>
		</div>
	</div>

	<div class="help-container">
		<div class="help-header">
			<h3 class="help-title">Help</h3>
			<button on:click={toggle_help} class="help-button">
				{#if show_help}
					Hide
				{:else}
					Show
				{/if}
			</button>
		</div>
		{#if show_help}
			<div class="help">
				<ul>
					<li>
						<a class="help-link" href="https://de.wikipedia.org/wiki/Caesar-Verschl%C3%BCsselung"
							>Caesar-Verschlüsselung</a
						>
					</li>
				</ul>
				<img class="help-img" src="/images/advent/quest-2.png" alt="question-0" />
				<p class="help-text">
					"%" ist der Modulo Opterator. <br />
					Die Modulo Operation gibt den Rest nach einer Division mit ganzen Zahlen zurück.<br />
					Beispiel: <br />
					3 % 2 = 1 <br />
					6 % 3 = 0 <br />
					2 % 5 = 2
				</p>
			</div>
		{/if}
	</div>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.back-link {
		font-size: 1.5rem;
		color: darkgray;
		border: 1px solid black;
		border-radius: 15%;
		width: fit-content;
	}

	.wrapper {
		margin-top: 2em;
		width: 100%;
		display: flex;
		justify-content: space-around;
	}

	.title {
		font-style: italic;
	}

	.quest-text {
		width: 25%;
		padding: 2em;
		font-size: 1.2rem;
		font-weight: 600;
		font-style: italic;
	}

	.quest-quests {
		display: flex;
		justify-content: space-around;
		align-items: center;
		gap: 5%;
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

	.quest-form {
		display: flex;
		flex-direction: column;
		gap: 1.5em;
		align-items: center;
	}

	.quest-input {
		width: 95%;
		font-size: 1rem;
		border-radius: 5%;
		font-style: italic;
	}

	.quest-given {
		padding: 1em;
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

	.help-container {
		margin-top: 2em;
		width: 50%;
		max-width: 1000px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.help-header {
		border: 1px solid gray;
		border-radius: 10%;
		padding: 1em;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-around;
	}

	.help-button {
		margin: 1em;
		border: 1px solid black;
		padding: 0.5em;
		border-radius: 15%;
		background-color: rgb(0, 76, 163);
	}

	.help-title {
		font-size: 2em;
		font-style: italic;
	}

	.help {
		margin-top: 1em;
		margin-bottom: 2em;
		border: 1px solid gray;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.help-link {
		font-size: 1.5rem;
		text-decoration: underline;
		font-style: italic;
		color: aqua;
	}

	.help-img {
		margin-top: 1em;
		max-width: 90%;
	}

	.help-text {
		padding: 1em;
		font-size: 1.5rem;
		font-weight: 700;
		font-style: italic;
	}

	@media (max-width: 800px) {
		.wrapper {
			flex-direction: column;
			gap: 2em;
			align-items: center;
		}

		.quest-quests {
			flex-direction: column;
			gap: 2em;
		}

		.quest-text {
			width: 95%;
		}

		.help-container {
			width: 95%;
		}
	}
</style>
