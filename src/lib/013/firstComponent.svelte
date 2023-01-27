<script>
    import {onMount, onDestroy, beforeUpdate, afterUpdate} from 'svelte';

    import markUp from '$lib/013/markUp.js';

    const action = markUp();

    let count = 0;
    
    onMount(() => {
        console.log('onMount');
    });

    onDestroy(() => {
        console.log('onDestroy');
    });

    beforeUpdate(() => {
        console.log('beforeUpdate');
    });

    afterUpdate(() => {
        console.log('afterUpdate');
    });

    function update(){
        count ++;
    }

</script>

<h4 style="text-align: center;color:blue">
    First Component</h4>

<button use:action on:click={update}>Click Me</button>
{count}