<script>
    import data, {toSvelteStore} from "$lib/029/data";

    const snapshotStore = toSvelteStore(data);
    
    $: console.log("snapshotstore changed!", $snapshotStore);
</script>



<h4 style="text-align: center;color:blue">
    # # # Valtio state as Svelte store # # #
</h4>

<button on:click={()=> data.count--}>-</button>
{$snapshotStore.count}
<button on:click={()=> data.count++}>+</button>

<input bind:value={data.text}/>
{$snapshotStore.text}


<hr />
<div class="links">
    <a href="/">HOME</a>
</div>