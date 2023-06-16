<script>
	console.log('initialised!');
	export let foo;
	export let bar;
</script>

<button on:click>click me</button>

Foo: {foo}
Bar: {bar}


<input bind:value={bar} />