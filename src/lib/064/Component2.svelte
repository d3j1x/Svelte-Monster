<script>
	let show = false;
</script>

<h2>
	Component2
</h2>

<input type="checkbox" bind:checked={show} />

{#if show}
<slot>fallback</slot>
{/if}

