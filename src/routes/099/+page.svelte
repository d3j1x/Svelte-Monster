<script>
	let array = [
		{value:1},
		{value:2},
		{value:3},
	];

	let value = '';
	
	$: double = value + value
</script>

<h1>Debug!</h1>

<input bind:value />
<!-- {value} -->
{@debug value}
{@debug double}

{#each array as item, index}
	
	{#if index === 1}
		{@debug item}
	{/if}
	
	{@debug item}
<li>
	<input type="number" bind:value={item.value} />
</li>
{/each}