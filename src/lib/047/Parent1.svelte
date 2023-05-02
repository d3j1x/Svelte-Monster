<script>
    import Child from "./Child.svelte";
    import { setContext } from "svelte";
    import { writable } from "svelte/store";
    import { data as storeData} from './store';

    const contextData = writable(1);
    
    setContext('data', contextData);

</script>

<label>
    Context: <input type="range" min={0} max={10} bind:value={$contextData} />
</label>

<br />

<label>
    Store: <input type="range" min={0} max={10} bind:value={$storeData} />
</label>

<Child />