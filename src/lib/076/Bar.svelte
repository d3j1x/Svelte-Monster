<script>
	export let value;
</script>

<h1>
	Bar Component
</h1>

<button on:click={() => value = 200}>200</button>
<button on:click={() => value = 400}>400</button>
<input type="number" bind:value />