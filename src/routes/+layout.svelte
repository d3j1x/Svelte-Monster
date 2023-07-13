<script>
import Topic from '$lib/000/Topic.svelte';
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
    <Topic />

</footer>



<style>
  
    header,footer{
        margin: 100px;
        text-align: center;
        font-weight: bolder;
    }
    
</style>