<script>
	import Button from '$lib/092/Button.svelte';
</script>

<h1>CSS Custom Properties to Components 4</h1>

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

	
		<Button --button-color="green" --text-color="blue">
			Green button
		</Button>


</div>


<style>
	div :global(button) {
		font-size: 20px;
	}
</style>


