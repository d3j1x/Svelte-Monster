<script>
import Topic from '$lib/000/Topic.svelte';
let x = false;
</script>

<header>
    HEADER
</header>

<hr/>
<hr/>

<main>

    <slot />

</main>


<hr/>
<hr/>

<footer>
    
    <h2>FOOTER</h2>
    <button style="display: block; background: blue; color: white;" on:click={() => x=!x}>Show more/less</button>
    {#if x}
    <Topic />
    {/if}

</footer>



<style>
  
    header,footer{
        margin: 100px;
        text-align: center;
        font-weight: bolder;
    }
    
</style>