<script>
    export let profit = 0;
    

</script>
<h4 style="text-align: center;color:blue">Second Component</h4>

<div 
    class:negative={profit < 0}
    class:positive={profit > 0}
>
    {profit}
</div>

<button on:click={() => {profit ++}}>+++</button>
<button on:click={() => {profit --}}>---</button>







<style>
    .negative {
        color: gray;
        font-size: 50px;
        font-weight: bold;
    }
    .positive {
        color: greenyellow;
        font-size: 70px;
        font-weight: bold;
    }
</style>