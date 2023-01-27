<svelte:options accessors/>
<script>
    let count = 0;

    export function resett(){
        count = 0;
    }
    function inc(){
        count ++;
    }
</script>

<h4 style="text-align: center;color:blue">
    First Component</h4>

<button on:click={inc}>{count}</button>