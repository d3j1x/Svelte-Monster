<script>
    import { toggleService } from "$lib/030/data";



</script>


<h4 style="text-align: center;color:blue">
    # # # XState as Svelte store # # #
</h4>


<button on:click={() => toggleService.send('TOGGLE')}>
    {$toggleService.matches('inactive') ? 'Off' : 'On'}
</button>


<hr />
<div class="links">
    <a href="/">HOME</a>
</div>