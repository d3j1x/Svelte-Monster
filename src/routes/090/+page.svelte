<script>
	import Button from '$lib/090/Button.svelte';
</script>

<h1>CSS Custom Properties to Components 2</h1>

<Button buttonColor="red">
	Red Button
</Button>

<Button buttonColor="blue">
	Blue Button
</Button>

<Button buttonColor="yellow" textColor="black">
	Yellow Button
</Button>

<div style="--button-color: orange">
	<Button buttonColor="yellow" textColor="black">
		yellow button
	</Button>
</div>


