<script>
	import viewport from '$lib/060/useViewportAction';
</script>

<div style="height: 200px; background: red" />
<div style="height: 200px; background: blue" />
<div style="height: 200px; background: black" />
<div style="height: 200px; background: red" />
<div style="height: 200px; background: blue" />
<div style="height: 200px; background: black" />

<h1 use:viewport
		on:enterViewport={() => console.log('enter!')}
		on:exitViewport={() => console.log('exit!')}
		>Hello world! Using Viewport</h1>

<div style="height: 200px; background: red" />
<div style="height: 200px; background: blue" />
<div style="height: 200px; background: black" />
<div style="height: 200px; background: red" />
<div style="height: 200px; background: blue" />
<div style="height: 200px; background: black" />