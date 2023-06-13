<script>
	export let categories = "Any";
	
	let joke;
	
	async function loadJoke() {
		const params = new URLSearchParams();
		for (const key in $$restProps) {
			params.append(key, $$restProps[key]);
		}
		const response = await fetch(`https://v2.jokeapi.dev/joke/${categories}?${params.toString()}`);
		const data = await response.json();
		if (data.type ==='twopart') {
			joke = data.setup + data.delivery;
		} else {
			joke = data.joke;
		}
		
	}
</script>

{joke}

<button on:click={loadJoke}>
	Load Joke
</button>