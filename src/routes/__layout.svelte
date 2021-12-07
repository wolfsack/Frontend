<script>
	import Sidebar from '../components/Sidebar.svelte';
</script>

<div class="wrapper">
	<main class="main">
		<slot />
	</main>
</div>

<style>
	/*Global Styles*/
	:global(*) {
		margin: 0;
		border: 0;
		padding: 0;
		text-decoration: none;
		text-align: center;
		-webkit-tap-highlight-color: rgba(211, 211, 211, 0.548);
	}

	:root {
		--primary-background-color: rgb(35, 100, 161);
		--secondary-background-color: rgba(43, 113, 183, 0.7);
		--tertiary-background-color: rgb(100, 102, 105);

		--primary-text-color: rgb(0, 0, 0);
		--secondary-text-color: rgb(255, 255, 255);

		background-color: var(--primary-background-color);
		color: var(--primary-text-color);
		font-size: 16px;
		font-weight: 400;
		font-family: 'Courier New', 'serif';
	}

	:global(a) {
		color: var(--primary-text-color);
	}

	:global(ul) {
		list-style-type: none;
	}

	:global(button) {
		font-family: inherit;
		font-size: 1rem;
		background-color: transparent;
	}

	.wrapper {
		margin: 0;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.main {
	}
</style>
