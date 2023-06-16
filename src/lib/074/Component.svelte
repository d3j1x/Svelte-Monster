<script>
	console.log('initialised!');
	export let foo;
	export let bar;
</script>

Foo: {foo}
Bar: {bar}

<input bind:value={bar} />