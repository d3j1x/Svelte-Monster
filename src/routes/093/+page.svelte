<script>
	import Button from '$lib/093/Button.svelte';
	let color = 'green';
</script>

<h1>CSS Custom Properties to Components 5</h1>

<input type="color" bind:value={color}/>
<div style="height:300px" />

<div style="display: grid; grid-template-columns: 1fr 1fr 1fr;">
	<Button>
		Red Button
	</Button>


	<Button --button-color="blue">
		Blue Button
	</Button>

	
	<div style="
		display:contents;
		--button-color: yellow; --text-color: black">
		<Button>
			Yellow button
		</Button>
	</div>

	
		<Button --button-color={color} --text-color="blue">
			Green button D
		</Button>


</div>


<style>
	div :global(button) {
		font-size: 20px;
	}
</style>


