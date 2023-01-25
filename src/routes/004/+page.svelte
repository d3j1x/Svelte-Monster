<script>
    import First from '$lib/004/firstComponent.svelte';
    import Second from '$lib/004/secondComponent.svelte';
    import Third from '$lib/004/thirdComponent.svelte';

    let count = 1;

    function increment () {
        count ++;
    }

    function decrement () {
        count --;
    }

    function doSomething () {
        console.log(count * 2)
    }

</script>

<h4 style="text-align: center;color:blue">Reactive Declarations and Statements</h4>


<button on:click={decrement}>-</button>

{count} * 2 = {count *2}

<button on:click={increment}>+</button>
<br>
<br>
<button on:click={doSomething}>Click Me</button>

<hr/>
<First />
<hr />
<Second />
<hr />
<Third />
<hr />
<div class="links">
    <a href="/">HOME</a>
</div>