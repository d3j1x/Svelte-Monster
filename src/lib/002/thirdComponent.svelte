<script>
    let obj = [];

    function increment() {
        const data = obj;
        
        data.count ++;

        obj.push(1)
    }

    function doSomethingElse() {
        obj.foo = 1;
    }
    

</script>

<h2>Third Component 002</h2>

<button on:click={increment}>Click Me +</button>

{obj.length}
<br>
{JSON.stringify(obj)}

<button on:click={doSomethingElse}>do Something Else</button>

