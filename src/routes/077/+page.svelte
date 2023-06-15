<script>
	import Foo from '$lib/077/Foo.svelte';
	import Bar from '$lib/077/Bar.svelte';
	
	let value = 0;
	const props = {
		a: 'a',
		b: 'b',
		c: 'c'
	}
	$: component = value > 200 ? null : value > 50 ? Foo : Bar
</script>

<h1>svelte:component 2</h1>
<hr />

app input:
<input type="number" bind:value />

<hr />
<svelte:component 
	this={component} 
	bind:value on:click {...props} />
<hr />
	