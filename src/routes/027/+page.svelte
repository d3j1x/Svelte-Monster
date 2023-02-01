<script>
    import store from '$lib/027/redux.js';

    let state = store.getState();

    store.subscribe(() => {
        state = store.getState();
    });

    function decrement() {
        store.dispatch({type:'DECREMENT'});
    }

    function increment() {
        store.dispatch({type:'INCREMENT'});
    }
</script>



<h4 style="text-align: center;color:blue">
    # # # Redux Store  # # #
</h4>

<button on:click={decrement}>-</button>
{state}
<button on:click={increment}>+</button>



<hr />
<div class="links">
    <a href="/">HOME</a>
</div>