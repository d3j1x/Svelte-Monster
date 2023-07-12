<script>
	import Button from '$lib/091/Button.svelte';
</script>

<h1>CSS Custom Properties to Components 3</h1>

<div style="--button-color: red;">
<Button>
	Red Button
</Button>
</div>

<div style="--button-color: blue; --text-color: yellow;">
	<Button>
		Blue Button
	</Button>
</div>


<div style="--button-color: green">
	<div style="--button-color: yellow; --text-color: black">
		<Button>
			Yellow button
		</Button>
	</div>
</div>

<style>
	div :global(button) {
		font-size: 20px;
	}
</style>


