<script>
	import Childp from '$lib/048/Childp.svelte';
	
	let show = true;
	
	function action(node) {
		console.log('hi',node);
		return {
			destroy() {
				console.log('bye')
			}
			
		}
	}
</script>


<input type="checkbox" bind:checked={show} />

{#if show}
	<div use:action>Hello</div>
{/if}

<hr />

<p>
	Params
</p>

<Childp />