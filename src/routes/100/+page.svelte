<script>
	// import { mapValue } from '$lib/100/mapStore';
	// import { mapValue } from '$lib/100/Map.svelte';
	import Map,{ mapValue } from '$lib/100/Map.svelte';
	
</script>

<h1> script context="module" </h1>

<input bind:value={$mapValue} type="number" />

<Map />

<Map />