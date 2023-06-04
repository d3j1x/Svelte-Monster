<script>
	let show = false;
</script>

<h2>
	Component1
</h2>

<input type="checkbox" bind:checked={show} />

{#if show}
	<slot />
{/if}

