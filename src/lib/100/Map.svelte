<script context="module">
	import { writable } from 'svelte/store';
	export const mapValue = writable(1)
	
	let currentMap;

	
	

	let count = writable(0);
</script>

<script>
	// import { mapValue } from './mapStore';
	// import { currentMap, setCurrentMap } from './mapData';

	let div;
	
	function setCurrentMap(newCurrentMap) {
			if (currentMap) currentMap.style.border = 'none';
			currentMap = newCurrentMap;
			currentMap.style.border = '1px solid black';
		}
	
	function setMe() {
		setCurrentMap(div)
	}
	function whoSet() {
		console.log(currentMap)
	}
</script>

<div bind:this={div}>
	{$mapValue}

	<button on:click={setMe}>Set Me </button>
	<button on:click={whoSet}>Who's Set </button>
</div>

{$count} 
<button on:click={() => {$count++}}>Increment</button>