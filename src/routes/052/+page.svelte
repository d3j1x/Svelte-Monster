<script>
	import Example from '$lib/052/Example1.svelte';
	import Result from '$lib/052/Example1.svelte';
</script>

<h1>Reusing event listeners with Svelte Actions</h1>
<hr />

<p>
	Press Escape for blur
</p>

<div style="display: flex; gap:10px;">
	
	<div>
		<Example />
	</div>
	
	<div>
		<Result />		
	</div>

</div>

<style>
	:global(input) {
		width: 100%;
	}
</style>