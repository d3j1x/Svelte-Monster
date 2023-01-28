<script>
    import First from '$lib/017/firstComponent.svelte';

    let colors = [
        'red',
        'geen',
        'blue',
    ];

    function addColors() {
        //colors.push('yellow');
        colors.splice(2,0,'yellow');
        colors.reverse();
        colors = colors;
    }

</script>



<h4 style="text-align: center;color:blue">
    Keyed #each  Block
</h4>

<button on:click={addColors}>Click Me</button>

<ul>
    {#each colors as color (color)}
        <li>{color} (key: {color})</li>
        <First {color} />
    {/each}
</ul>



<hr />
<div class="links">
    <a href="/">HOME</a>
</div>