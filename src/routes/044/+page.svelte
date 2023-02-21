<script>
	import Child from '$lib/044/Child.svelte';
	import {writable} from 'svelte/store';
	import { setContext } from 'svelte';
	
	let count = writable(100);
	setContext('value', count);
	
</script>

<h4 style="text-align: center;color:blue">
    # # # Reactive Context # # #
</h4>


<div>
	App: {$count}
	<button on:click={() => $count++}>+</button>
	<button on:click={() => $count--}>-</button>
</div>

<Child />

<hr />
<div class="links">
    <a href="/">HOME</a>
</div>