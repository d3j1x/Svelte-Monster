<script>
    import {tweened} from 'svelte/motion';

    //let value = tweened(0);
    let value = tweened(0, {duration: 5000});
    //let value = tweened(0, {duration: 5000, delay: 2000});
</script>



<h4 style="text-align: center;color:blue">
    # # # Tweened svelte store # # #
</h4>

<button on:click={() => {$value-=10}}>-</button>
<div>
    {$value}
</div>
<button on:click={() => {$value+=10}}>+</button>



<hr />
<div class="links">
    <a href="/">HOME</a>
</div>