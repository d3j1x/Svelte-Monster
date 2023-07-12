<script>
	import {onMount} from 'svelte';
	let mousePosition = {x: 0,y: 0};
	
	function mouseMove(event) {
		mousePosition.x = event.clientX;
		mousePosition.y = event.clientY;
	}
	
	$: yPercentage = mousePosition.y * 100 / document.body.clientHeight;
	$: xPercentage = mousePosition.x * 100 / document.body.clientWidth;
	

</script>

<h1>svelte:body 2</h1>
<hr/>

<div style="background: 
							linear-gradient(to bottom, transparent {yPercentage}%, {yPercentage}%, rgba(255,0,0,0.5)100%),
							linear-gradient(to right, transparent {xPercentage}%, {xPercentage}%, rgba(0,0,255,0.5)100%);">
	{mousePosition.x}, {mousePosition.y}
	
</div>

<svelte:body on:mousemove={mouseMove} />


<style>
	div {
		width: 80vw;
		height:80vh;
		display:grid;
		place-items:center;
		font-size:30px;
	}
	:global(body) {
		padding:0;
	}
</style>