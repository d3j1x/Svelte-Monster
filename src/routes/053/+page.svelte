<script>
	import Example from '$lib/053/Example1.svelte';
	import Result from '$lib/053/Result1.svelte';
</script>

<h1>Reusing event listeners with Svelte Actions 2</h1>
<hr />

<p>
	Press Escape for blur
</p>

<div style="display: flex; gap:10px;">
	
	<div>
		example1
		<Example />
	</div>
	
	<div>
		result1
		<Result />		
	</div>

</div>

<style>
	:global(input) {
		width: 100%;
	}
</style>