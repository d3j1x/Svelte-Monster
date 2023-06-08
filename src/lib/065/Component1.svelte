<script>
	let  count = 0;
</script>

<div>
	<h2>Component 1:</h2>
	<button on:click={() =>count--}>-</button>
	{count}
	<button on:click={() =>count++}>+</button>
</div>

<hr />

<slot {count} />