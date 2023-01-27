<script>
    import First from'$lib/012/firstComponent.svelte';
    import { onMount } from 'svelte';
    let element;

    onMount(() => {
        //console.log(typeof element);
        console.log(element);
    })

    function reset() {
        element.value = '';
    }

    //Component
    let option;
    function resett() {
        //console.log(option.count);
        option.resett();
    }
</script>

<h4 style="text-align: center;color:blue">
    Bind This</h4>

<input bind:this={element}/>
<hr />
<button on:click={reset}>Reset</button>


<hr />
<First  bind:this={option}/>
<hr />
<button on:click={resett}>Resett</button>


<hr />
<div class="links">
    <a href="/">HOME</a>
</div>