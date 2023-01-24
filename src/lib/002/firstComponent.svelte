<script>
    let obj = {
        count : 0,
    }

    function increment() {
        obj.count++
    }
    

</script>

<h2>First Component 002</h2>

<button on:click={increment}>Click Me +</button>

{obj.count}

