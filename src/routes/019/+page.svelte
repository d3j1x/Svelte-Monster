<script>

    import { fade } from 'svelte/transition';

    let count =0;
    let countK =0;
</script>


<h4 style="text-align: center;color:blue">
    # # # Key Block # # #
</h4>

<input />
<button on:click={() => count ++}>{count}</button>

<hr />
{#key countK}
    <input />
    <div in:fade>{countK}</div>
{/key}
<button on:click={() => countK ++}>{countK}</button>


<hr />
<div class="links">
    <a href="/">HOME</a>
</div>