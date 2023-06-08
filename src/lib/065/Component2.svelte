<script>
	let  count = 0;
	
	function inc(delta) {
		count+=delta;
	}
</script>

<div>
	<h2>Component 2:</h2>
	<button on:click={() =>count--}>-</button>
	{count}
	<button on:click={() =>count++}>+</button>
</div>

<hr />

<slot {count}  {inc}/>