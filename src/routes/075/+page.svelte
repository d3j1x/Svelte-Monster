<script>
	import Lazy from '$lib/075/Lazy.svelte';
	let bar =456;
</script>
<h1>Lazy Component 3!</h1> <hr />

<div style="background: blue; height: 1000px;"></div>

{bar}

<Lazy 
	this={() => import('$lib/075/Component.svelte')} 
	>
	<div slot="loading">Loading...</div>
	<svelte:fragment slot="component" let:Component>
		<Component foo="123" bind:bar on:click={() => {
			console.log('!!!!')}} />
	</svelte:fragment>
</Lazy>
	
	<style>

		div {
			color: blue;
		}
	</style>