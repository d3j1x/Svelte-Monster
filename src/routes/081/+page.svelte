<script>
	let innerWidth = window.innerWidth;
	import {onMount} from 'svelte';
	let searchBar;
	
	
	function onResize() {
			innerWidth = window.innerWidth;
		}

	function onKeydown(event) {
			if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'f') {
				searchBar.focus();
				event.preventDefault();
			}
		}
</script>

<h1>svelte:window 2</h1>
<hr />

<svelte:window on:keydown={onKeydown}
							 on:resize={onResize}/>

ctrl + f 
<input bind:this={searchBar} placeholder="Search something..." />

<div>
Width: {innerWidth} 	
</div>