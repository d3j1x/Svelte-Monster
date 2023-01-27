<script>
    import First from '$lib/011/firstComponent.svelte';
    let flavours = ['3'];
</script>



<h4 style="text-align: center;color:blue">
    Binding Group</h4>

<button on:click={()=> {
    flavours = ['2','3'];
}}>
    reset</button>

<label>
    <input type="checkbox" bind:group={flavours} value="1">
    1
</label>

<label>
    <input type="checkbox" bind:group={flavours} value="2">
    2
</label>

<label>
    <input type="checkbox" bind:group={flavours} value="3">
    3
</label>

Flavours: {flavours.join(',') || '-'}



<hr />
<First />

<hr />

<div class="links">
    <a href="/">HOME</a>
</div>