<script>
    import First from '$lib/005/firstComponent.svelte';
    import Second from '$lib/005/secondComponent.svelte';
    import Third from '$lib/005/thirdComponent.svelte';
    import { tick } from 'svelte';
    let count = 1;

    $: double = count *2; // double -> count

    //function increment() {
    //    count ++;
    //    console.log('before tick',double);
    //    tick().then(()=> {
    //        console.log('after tick',double);
    //    });    
    //}
    async function increment() {
        count ++;
        
        await tick();
        console.log('after tick',double);
           
    }

    function decrement () {
        count --;
    }

    function multiply () {
        count = count * count;
    }

    function doSomething() {
        console.log(double);
    }


</script>

<h4 style="text-align: center;color:blue">Tick</h4>


<button on:click={decrement}>-</button>

{count} * 2 = {double}

<button on:click={increment}>+</button>
<br>
<button on:click={multiply}>Scale</button>
<br>
<button on:click={doSomething}>Click Me</button>
<hr />
<First />
<hr />
<Second />
<hr/>
<Third />
<hr />
<div class="links">
    <a href="/">HOME</a>
</div>