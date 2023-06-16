<script>
	export let data = [1, [2, [3], 4], 5];
</script>


<span class="list">
	{#each data as item}
		<span>
			{#if Array.isArray(item)}
				<svelte:self data={item}/>
			{:else}
				{item}
			{/if}
		</span>
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