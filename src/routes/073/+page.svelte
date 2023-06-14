<script>
	import viewport from '$lib/073/useViewportAction';
	// 	import Component from './Component.svelte';
	
	let isLoaded = false;
	// 	const componentPromise = import('./Component.svelte'); //promise;	
	let componentPromise;
</script>

<h1>Lazy Component !</h1>
<hr />

<!-- <Component foo="123" bar={456} /> -->

<div style="background: blue; height: 1000px;">
</div>

<div use:viewport on:enterViewport={()=> 
	{
	console.log('enter viewport')
		if (!isLoaded) {
			componentPromise = import('$lib/073/Component.svelte');
		}
		isLoaded = true;
	}} />
	

	{#if componentPromise}
	
		{#await componentPromise}
 		Loading...
		{:then { default: Component }}
 		<Component foo="123" bar={456} />
		{/await}
	
	{/if}
	

	
	<style>
		div {
			color: blue;
		}
	</style>
	
		
		