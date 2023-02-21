<script>
	import {getContext} from 'svelte';
	let count = getContext('value');
</script>

<div>
	Grand Children: {$count}
	<button on:click={() => $count++}>+</button>
	<button on:click={() => $count--}>-</button>

</div>