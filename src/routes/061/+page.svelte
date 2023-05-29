<script>
	import '$lib/061/defineProcess';
	
	import createPopperAction from '$lib/061/usePopper';
	
	const [usePopperElement, usePopperTooltip] = createPopperAction();
	
	let placement = 'bottom-start';
	
	let showTooltip = true;
</script>

<input type="checkbox" bind:checked={showTooltip} />

<div use:usePopperElement>
	Hello world
</div>

{#if showTooltip}
	<div use:usePopperTooltip={{ placement: placement }}>
		Tooltip
	</div>
{/if}



<!-- <div use:usePopperTooltip>
	Tooltip
</div> -->

<button on:click={() => {
	placement = 'right';
	}}>
	Click Me
</button>
