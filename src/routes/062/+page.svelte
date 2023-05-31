<script>
	// import viewport from '$lib/062/useViewportAction';
	import lazyimage from '$lib/062/lazyimage';
</script>

<div style="height: 200px; background: red" />
<div style="height: 200px; background: blue" />
<div style="height: 200px; background: black" />
<div style="height: 200px; background: red" />
<div style="height: 200px; background: blue" />
<div style="height: 200px; background: black" />

<!-- <h1 use:viewport
		on:enterViewport={() => console.log('enter!')}
		on:exitViewport={() => console.log('exit!')}
		>Hello world! Using Viewport
</h1> -->
<h1>use : lazyimage</h1>

<img use:lazyimage 
		 data-src="https://svelte.dev/_app/immutable/assets/stopwar-947a4798.svg"
		 alt="lazyimage demo" />



<div style="height: 200px; background: red" />
<div style="height: 200px; background: blue" />
<div style="height: 200px; background: black" />
<div style="height: 200px; background: red" />
<div style="height: 200px; background: blue" />
<div style="height: 200px; background: black" />