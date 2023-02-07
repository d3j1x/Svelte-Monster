<script>
    import { spring } from "svelte/motion";

    const value = spring(1, {
        stiffness: 0.9,
        damping: 0.5,
    });
</script>

<h5 style="text-align: center;color:blue">### Spring ###</h5>

<div style="
            height: 50px;
            width: 5px;
            background: red;
            transform-origin: left center;
            transform: scaleX({$value});
"/>
    
<div class="buttons">

        <button on:click={()=>$value = 1}>0</button>
        <button on:click={()=>$value = 20}>20</button>
        <button on:click={()=> value.set(40, {hard:true})}>40</button>
        <button on:click={()=> value.set(60, {soft:true}) }>60</button>
        <button on:click={()=>$value = 80}>80</button>
        <button on:click={()=>$value = 100}>100</button>

</div>



<style>
    .buttons{
        margin: 18px 0;
        font-size: 24px;
    }
</style>

