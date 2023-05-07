<svelte:head>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css">
</svelte:head>

<script>
	import Child from '$lib/051/Child.svelte';
	import Child2 from '$lib/051/Child2.svelte';
	import Child3 from '$lib/051/Child3.svelte';
	
	import flatpickr from "flatpickr";
	
	let button;
	
	$: button && flatpickr(button)
</script>

<h1>
	Integrating UI library
</h1>


<button bind:this={button}>
	Date Picker
</button>
<hr />

<h1>
	Integrating UI library with Svelte action
</h1>
<Child />

<h1>
	Integrating UI library with Svelte action + config
</h1>
<Child2 />

<h1>
	Integrating UI library with Svelte action + Checked
</h1>
<Child3 />



