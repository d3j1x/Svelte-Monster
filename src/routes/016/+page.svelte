<script>
    import First from '$lib/016/firstComponent.svelte';
    let colors = ['red','green','blue','yellow'];
    let empts = [];

    for (const color of colors) {
        console.log(color);
    }

</script>





<h4 style="text-align: center;color:blue">
    #each   Block
</h4>
<strong>Static</strong>
<ul>
    <li>{colors[0]}</li>
    <li>{colors[1]}</li>
    <li>{colors[2]}</li>
    <li>{colors[3]}</li>
</ul>
<br>
<strong>Dynamic</strong>
<ul>
    {#each colors as color}
        <li>{color}</li>
    {:else}
        <li>list is empty</li>
    {/each}
</ul>
<br>
<strong>Empty</strong>
<ul>
    {#each empts as empt}
        <li>{empt}</li>
    {:else}
        <li>list is empty</li>
    {/each}
</ul>

<hr/>
<First />


<hr />
<div class="links">
    <a href="/">HOME</a>
</div>