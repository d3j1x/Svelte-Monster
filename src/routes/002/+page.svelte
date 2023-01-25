<script>
    import First from '$lib/002/firstComponent.svelte';
    import Second from '$lib/002/secondComponent.svelte';
    import Third from '$lib/002/thirdComponent.svelte';

    let count = 0;



    function increment() {
        count ++;
        
    }
    function decrement() {
        count --;
    }

    

</script>
<h4 style="text-align: center;color:blue">Reactivity in Svelte</h4>
<hr />

<button on:click={increment}>
    Click Me +
</button>

{count}

<button on:click={decrement}>
    Click Me -
</button>

<hr />

<First />

<hr />

<Second />

<hr />

<Third />

<hr />
<div class="links">
    <a href="/">HOME</a>
</div>


<style>
    :global(button){
        margin: 10px;
    }
</style>
