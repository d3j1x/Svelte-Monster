<script>
    import First from '$lib/009/firstComponent.svelte';
    import Second from '$lib/009/secondComponent.svelte';
    import Third from '$lib/009/thirdComponent.svelte';
    let profit = 0;

</script>
<h4 style="text-align: center;color:blue">class: directive</h4>

<div class="{profit < 0 ? 'negative' : ''}
            {profit > 0 ? 'positive' : ''}
            ">
    {profit}
</div>

<button on:click={() => {profit ++}}>+++</button>
<button on:click={() => {profit --}}>---</button>

<hr />

<First />

<hr />

<Second />

<hr />

<Third />

<hr />
<div class="links">
    <a href="/">HOME</a>
</div>

<style>
    .negative {
        color: red;
        font-size: 50px;
        font-weight: bold;
    }
    .positive {
        color: blue;
        font-size: 70px;
        font-weight: bold;
    }
</style>