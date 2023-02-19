<script>
  
	import { writable } from 'svelte/store';
	import { tweened } from 'svelte/motion';
	
	import approach1 from '$lib/042/approach1';
	
 	const store = writable(0);
//	const store = tweened(0);
	
	const undoRedoStore = approach1(store);
	
	let value = 1;
	
// 	function sum(value) {
// 		return {
// 			apply(_value) {return _value + value},
// 			reverse(_value) {return _value - value},
// 		};
// 	}

</script>
  
<h4 style="text-align: center;color:blue">
    # # # Undo / Redo # # #
</h4>



<button on:click={ () => {undoRedoStore.undo();} }> Undo </button>
<button on:click={ () => {undoRedoStore.redo();} }> Redo </button>

<input bind:value type="number"/>
<button on:click={ () => {
	//$store += value;
	//$undoRedoStore += value;
	//undoRedoStore.doAction(sum(value)) 
	undoRedoStore.sum(value);
	value = 0;
}}> Add </button>

<br />
<!-- {$store} -->
{$undoRedoStore}


<hr />
<div class="links">
    <a href="/">HOME</a>
</div>