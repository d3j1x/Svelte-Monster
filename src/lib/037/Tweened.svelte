<script>
    import { tweened } from "svelte/motion";
    import { cubicIn } from 'svelte/easing';

    //const value = tweened(1);
    const value = tweened(1, {
        delay: 500,
        duration: 5000,
        easing: cubicIn,
    });

    const value2 = tweened([0,50], {
        //delay: 500,
        duration: 5000,
        //easing: cubicIn,
    });

    const value3 = tweened({a: 0, b: 50}, {
        //delay: 500,
        duration: 5000,
        //easing: cubicIn,
    });

    const value4 = tweened('a', {
        //delay: 500,
        duration: 5000,
        //easing: cubicIn,
        interpolate: (a, b) => (t) =>{
            const acode = a.charCodeAt(0);
            const bcode = b.charCodeAt(0);
            const resultCode = (bcode - acode) * t + acode;
            return String.fromCharCode(Math.round(resultCode));
        }
    });
</script>

<h5 style="text-align: center;color:blue">### Tweened ###</h5>
<br>
## value 1 ##
<pre style="font-size: 24px;">{JSON.stringify($value, 2, null)}</pre>


<div class="buttons">
    <button on:click={()=> $value=0}>0</button>
    <button on:click={()=> $value=20}>20</button>
</div>

<hr/>
<br>
## value 2 ##
<pre style="font-size: 24px;">{JSON.stringify($value2, null, 2)}</pre>


<div class="buttons">
    <button on:click={()=> $value2=[0,0]}>0</button>
    <button on:click={()=> $value2=[100,0]}>[100,0]</button>
</div>

<hr/>
<br>
## value 3 ##
<pre style="font-size: 24px;">{JSON.stringify($value3, null, 2)}</pre>


<div class="buttons">
    <button on:click={()=> $value3={a: 50, b: 100}}>{@html '{a: 50, b: 100}'}</button>
    <button on:click={()=> $value3={a: 100, b: 0}}>{@html '{a: 100, b: 0}'}</button>
</div>

<hr/>
<br>
## value 4 ##
<pre style="font-size: 24px;">{JSON.stringify($value4, null, 2)}</pre>


<div class="buttons">
    <button on:click={()=> $value4 = 'a'}>a</button>
    <button on:click={()=> $value4 = 'z'}>z</button>
</div>

<style>
    .buttons{
        margin: 18px 0;
        font-size: 24px;
    }
</style>