<script>
	let innerWidth = window.innerWidth;
	import {onMount} from 'svelte';
	let searchBar;
	
	onMount(() => {
		function onResize() {
			innerWidth = window.innerWidth;
		}
		window.addEventListener('resize', onResize);
		return () => window.removeEventListener('resize', onResize);
	});
	
	onMount(() => {
		function onKeydown(event) {
			if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'f') {
				searchBar.focus();
				event.preventDefault();
			}
		}
		window.addEventListener('keydown', onKeydown);
		return () => window.removeEventListener('keydown', onKeydown);
	});
</script>

<h1>svelte:window</h1>
<hr />

ctrl + f 

<input bind:this={searchBar} placeholder="Search something..." />

<div>
Width: {innerWidth} 	
</div>