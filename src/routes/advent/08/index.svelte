<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	let username: string;
	let accesscode: string;

	let answer: string;
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
		<p class="text">
			Ich wollte euch noch etwas super wichtiges und geheimes sagen. <br /><br />
			Leider habe ich keine Zeit mehr meine gespeicherte Nachricht wieder zu entschlüsseln, daher gebe
			ich euch einfach die verschlüsselte Nachricht und den Schlüssel, damit ihr die Nachricht selber
			entschlüsseln könnt.
		</p>
		<div class="task">
			<h3 class="task-content">
				Meine verschlüsselte Nachricht: <br class="line-break" />
				AWWALHHHGYKIBGPQMFTSUZKSEXSLZFGXJCIHX
			</h3>
			<h3 class="task-content">
				Der Schlüssel zum entschlüsseln der Nachricht: <br class="line-break" />
				SUPERDUPERGEHEIMESPASSWORTSIEBTERDEZE
			</h3>

			<input
				type="text"
				id="quest-1-input"
				name="quest-1-input"
				class="task-input"
				placeholder="Deine Antwort"
				bind:value={answer}
			/>

			{#if answer == right_answer}
				<h4 class="response right">Deine Antwort ist richtig!</h4>
			{:else}
				<h4 class="response wrong">Deine Antwort ist falsch!</h4>
			{/if}

			<p class="hint">
				Nur Großbuchstaben! <br />
				Keine Leerzeichen!<br />
			</p>
		</div>
	</div>
	<div class="help-wrapper">
		<div class="help-toggle">
			<h3 class="help-toggle-title">Help</h3>
			<button on:click={toggle_help} class="help-toggle-button">
				{#if show_help}
					Hide
				{:else}
					Show
				{/if}
			</button>
		</div>
		{#if show_help}
			<div class="help-content">
				<a href="https://de.wikipedia.org/wiki/Caesar-Verschl%C3%BCsselung" class="help-link"
					>Caesar-Verschlüsselung</a
				>

				<img src="/images/advent/quest-2.png" alt="help-img" class="help-img" />
				<p class="help-text">
					"%" ist der Modulo Opterator.<br />
					Die Modulo Opteration gibt den Rest nach einer Division mit Ganzen Zahlen zurück. <br />
					Beispiel:<br />
					3 % 2 = 1 <br />
					6 % 2 = 0 <br />
					2 % 5 = 2 <br />
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
		margin-top: 1em;
		border: 1px solid black;
		border-radius: 15%;
		width: fit-content;
	}

	.title {
		margin-top: 1em;
	}

	.quest-title {
		margin-top: 2em;
	}

	.wrapper {
		margin-top: 2em;
		width: 95%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.title {
		font-style: italic;
	}

	.text {
		border: 1px solid gray;
		padding: 1em;
		font-weight: 700;
		font-size: 1.2rem;
		font-style: italic;
	}

	.task {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 2em;
		border: 1px solid gray;
		padding: 1em;
	}

	.task-content {
		width: 95%;
		margin-top: 1em;
		font-weight: 600;
		font-size: 1.1rem;
	}

	.task-input {
		margin-top: 1em;
		font-size: 1.2rem;
		width: 95%;
	}

	.hint {
		font-size: 1.1rem;
		font-weight: 700;
	}

	.response {
		padding: 0.8em;
		font-size: 1.1rem;
		font-style: italic;
	}

	.right {
		color: rgb(0, 231, 0);
	}

	.wrong {
		color: red;
	}

	.help-wrapper {
		width: 90%;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 2em;
	}

	.help-toggle {
		width: 100%;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		background-color: rgba(101, 122, 168, 0.6);
		border-radius: 5%;
	}

	.help-toggle-title {
		font-style: italic;
	}

	.help-toggle-button {
		background-color: rgb(207, 207, 207);
		border-radius: 15%;
		margin: 0.5em;
		padding: 1em;
	}

	.help-toggle-button:hover,
	.help-toggle-button:focus {
		background-color: rgb(90, 90, 90);
	}

	.help-content {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 1em;
		margin-bottom: 2em;
		border: 1px solid gray;
	}

	.help-link {
		padding: 1em;
		font-size: 1.5rem;
		font-style: italic;
		text-decoration: underline;
	}

	.help-img {
		width: 85%;
		max-width: 800px;
	}

	.help-text {
		padding: 1em;
		font-size: 1.2rem;
		font-weight: 700;
		font-style: italic;
	}

	@media all and (min-width: 1000px) {
		.wrapper {
			flex-direction: row;
			gap: 5%;
			justify-content: space-evenly;
		}

		.text {
			width: 30%;
		}

		.task-content {
			font-size: 1.5rem;
		}
	}
</style>
