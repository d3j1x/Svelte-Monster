<script>
	import Example from '$lib/054/Example1.svelte';
	import Example2 from '$lib/054/Example2.svelte';
	import Result from '$lib/054/Result1.svelte';
</script>

<h1>Reusing event listeners with Svelte Actions 3</h1>
<hr />

<p>
	Press Enter for next
</p>

<div style="display: flex; gap:10px;">
	
	<div>
		example1
		<Example />
	</div>
	
	<div>
		example2
		<Example2 />
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