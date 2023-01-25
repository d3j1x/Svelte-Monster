<script>
    let count = 1;
    //let double = count * 2;
    $: double = count *2 ;

    $: console.log('double:',double);
    

    function increment () {
        count ++;
        //double = count * 2;
    }

    function decrement () {
        count --;
        //double = count * 2;
    }

    function multiply () {
        count = count * count;
        //double = count * 2;
    }

    function doSomething () {
        console.log(double)
    }

</script>

<h4 style="text-align: center;color:blue">Second Component</h4>


<button on:click={decrement}>-</button>

{count} * 2 = {double}

<button on:click={increment}>+</button>
<br>
<button on:click={multiply}>Scale</button>
<br>
<button on:click={doSomething}>Click Me</button>
