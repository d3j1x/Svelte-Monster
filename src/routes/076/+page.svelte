<script>
	import Foo from '$lib/076/Foo.svelte';
	import Bar from '$lib/076/Bar.svelte';
	
	let value = 0;
	const props = {
		a: 'a',
		b: 'b',
		c: 'c'
	}
</script>

<h1>svelte:component</h1>
<hr />

app input:
<input type="number" bind:value />

<hr />
<svelte:component 
	this={value > 50 ? Foo: Bar} 
	bind:value on:click {...props} />
<hr />
	
{#if value > 50}
	<Foo bind:value on:click {...props} />
{:else}
	<Bar bind:value on:click {...props} />
{/if}