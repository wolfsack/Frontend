<div class="container">
	<h1>Days</h1>
	<ul class="list-days">
		<li class="list-days-day"><a class="list-days-day-link" href="/advent/04/">04.12.2021</a></li>
		<li class="list-days-day"><a class="list-days-day-link" href="/advent/08/">08.12.2021</a></li>
	</ul>
</div>

<style>
	.container {
		height: 100%;
	}

	.list-days {
		height: 100%;
		padding: 1em;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1em;
	}

	.list-days-day {
		border: 1px solid black;
		border-radius: 5%;
	}

	.list-days-day-link {
		font-size: 1.5rem;
		font-style: normal;
		font-weight: 600;
		padding: 1em;
	}

	.list-days-day-link:hover,
	.list-days-day-link:focus {
		font-style: italic;
		text-decoration: underline;
	}
</style>
