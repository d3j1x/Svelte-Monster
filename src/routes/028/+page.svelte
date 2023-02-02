<script>
    import { onMount } from "svelte";
    import data from "$lib/028/data";
    import {subscribe, snapshot} from "valtio/vanilla";

    let _snapshot = snapshot(data);

    onMount(() => {
        return subscribe(data, ()=> {
            _snapshot = snapshot(data);
        });
    });
</script>



<h4 style="text-align: center;color:blue">
    # # # Valtio # # #
</h4>

<button on:click={()=> data.count--}>-</button>
{_snapshot.count}
<button on:click={()=> data.count++}>+</button>

<input bind:value={data.text}/>
{_snapshot.text}


<hr />
<div class="links">
    <a href="/">HOME</a>
</div>