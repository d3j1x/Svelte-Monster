<script>
	import { writable } from 'svelte/store';
	import { tweened } from 'svelte/motion';
	
	import approach2 from '$lib/043/approach2';
	
 	const store = writable({value: 0});
//	const store = tweened(0);
	const undoRedoStore = approach2(store);
	const history = undoRedoStore.history;
	
	let value = 1;
	

</script>

<h4 style="text-align: center;color:blue">
    # # # Undo / Redo 2 # # #
</h4>

<button on:click={ () => {undoRedoStore.undo();} }> Undo </button>
<button on:click={ () => {undoRedoStore.redo();} }> Redo </button>

<input bind:value type="number"/>
<button on:click={ () => {
	//$undoRedoStore.value += value;
	$undoRedoStore = {...$undoRedoStore,
										value: $undoRedoStore.value + value
										};
	value = 0;
}}> Add </button>

<br />
<!-- {$store} -->
{JSON.stringify($undoRedoStore)}
{$undoRedoStore.value}
<br/>
{JSON.stringify($history)}

  




<hr />
<div class="links">
    <a href="/">HOME</a>
</div>