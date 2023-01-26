<script>
    export let profit = 0;
    
    $: profitClass = profit < 0 ? 'negative' : profit > 0 ? 'positive' : '';

</script>
<h4 style="text-align: center;color:blue">First Component</h4>

<div class="{profitClass}">
    {profit}
</div>

<button on:click={() => {profit ++}}>+++</button>
<button on:click={() => {profit --}}>---</button>







<style>
    .negative {
        color: blue;
        font-size: 50px;
        font-weight: bold;
    }
    .positive {
        color: red;
        font-size: 70px;
        font-weight: bold;
    }
</style>