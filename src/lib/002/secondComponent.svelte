<script>
    let obj = {
        count : 0,
    }

    function increment() {
        const data = obj;
        data.count ++;
    }

    function doSomethingElse() {
        obj.foo = 1;
    }
    

</script>

<h2>Second Component 002</h2>

<button on:click={increment}>Click Me +</button>

{obj.count}

<button on:click={doSomethingElse}>do Something Else</button>

