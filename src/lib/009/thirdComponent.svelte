<script>
    export let profit = 0;
    
    $: negative = profit < 0;

</script>
<h4 style="text-align: center;color:blue">Third Component</h4>

<div 
    class:negative
    class:positive={profit > 0}
>
    {profit}
</div>

<button on:click={() => {profit ++}}>+++</button>
<button on:click={() => {profit --}}>---</button>







<style>
    .negative {
        color:aqua;
        font-size: 50px;
        font-weight: bold;
    }
    .positive {
        color:blueviolet;
        font-size: 70px;
        font-weight: bold;
    }
</style>