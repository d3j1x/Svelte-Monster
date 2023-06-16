<script>
	import Lazy from '$lib/074/Lazy.svelte';
	let bar = 456;
</script>
<h1>Lazy Component 2!</h1> <hr />

<div style="background: blue; height: 1000px;"></div>

<Lazy 
	this={() => import('$lib/074/Component.svelte')} 
	foo="123" bind:bar >
	<div slot="loading">Loading...</div>
</Lazy>
	
<style>

	div 
	{
		color: blue;
	}
</style>
