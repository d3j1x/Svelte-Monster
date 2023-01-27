<script>
    export let count = 0;
    import {createEventDispatcher} from 'svelte';
    const dispatch = createEventDispatcher();
    $: dispatch('countChanged', count)
</script>

<h4 style="text-align: center;color:blue">First Component</h4>


<button on:click={()=> {count ++;}}>Increment</button>
<div>
    count: {count}
</div>