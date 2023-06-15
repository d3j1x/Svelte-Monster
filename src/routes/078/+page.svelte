<script>
	let data = [1,2,3,4,5];
</script>

<h1>svelte:self</h1>
<hr />

<span class="list">
	{#each data as item}
		<span>{item}</span>
	{/each}
</span>

<style>
	span {
		display: inline-block;
		border: 1px solid red;
		margin: 4px;
	}
	
	.list {
		border-color: blue
	}
</style>