<script lang="ts">
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

	function encrypt(input: string, key: string) {
		if (input.length !== key.length) {
			return;
		}

		input = input.toUpperCase();
		key = key.toUpperCase();

		let output: string = '';
		for (var i = 0; i < input.length; i++) {
			let input_nr = map[input.charAt(i)];
			let key_nr = map[key.charAt(i)];

			let nr = (input_nr + key_nr) % 26;

			let new_char = map_reverse[nr];
			output += new_char;
		}

		return output;
	}

	function decrypt(input: string, key: string) {
		if (input.length !== key.length) {
			return;
		}
		input = input.toUpperCase();
		key = key.toUpperCase();

		let output: string = '';
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

	let key: string = '';
	let plain: string = '';
	let cipher: string = '';

	const encrypt_plain_field = () => {
		cipher = encrypt(plain, key);
	};

	const decrypt_cipher_field = () => {
		plain = decrypt(cipher, key);
	};
</script>

<div class="container">
	<h1 class="title">Spielplatz</h1>
	<a class="back-link" href="/advent/08/">zurück</a>

	<h2 class="sub-title">Schlüssel</h2>
	<input
		type="text"
		id="quest-1-input"
		name="quest-1-input"
		class="input-key input"
		placeholder="Dein Schlüssel"
		bind:value={key}
	/>

	<div class="wrapper">
		<div class="input-wrapper">
			<h2 class="sub-title">Dein zu verschlüsselender Text</h2>
			<input
				type="text"
				id="quest-1-input"
				name="quest-1-input"
				class="input-plain input"
				placeholder="Text"
				bind:value={plain}
			/>
			<button class="input-submit-button" on:click={encrypt_plain_field}>Verschlüssel</button>
		</div>
		<div class="input-wrapper">
			<h2 class="sub-title">Dein zu entschlüsselender Text</h2>
			<input
				type="text"
				id="quest-1-input"
				name="quest-1-input"
				class="input-cipher  input"
				placeholder="Chiffrat"
				bind:value={cipher}
			/>
			<button class="input-submit-button" on:click={decrypt_cipher_field}>Entschlüsseln</button>
		</div>
	</div>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 95%;
	}

	.title {
		margin-top: 2em;
	}

	.sub-title {
		font-size: 1.1rem;
		font-style: italic;
		font-weight: 500;
	}

	.back-link {
		font-size: 1.5rem;
		color: darkgray;
		margin-top: 1em;
		margin-bottom: 2em;
		border: 1px solid black;
		border-radius: 15%;
		width: fit-content;
	}

	.wrapper {
		margin-top: 2em;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		width: 100%;
	}

	.input-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 45%;
	}
	.input-plain,
	.input-cipher {
		height: 100px;
		width: 95%;
	}

	.input-key {
		width: 85%;
		height: 100px;
	}

	.input-submit-button {
		margin-top: 1em;
		border-radius: 15%;
		padding: 0.5em;
		background-color: lightgray;
		max-width: 200px;
	}

	.input-submit-button:hover,
	.input-submit-button:focus {
		background-color: darkgray;
	}
</style>
