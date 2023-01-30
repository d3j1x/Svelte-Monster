<script>
    import Parent from '$lib/021/Parent.svelte';
    import { setContext } from 'svelte';

    let color = 'red';
    let count = 0;

    const colorListeners = new Set();

    let colorObj = {
        color: 'red',
    listenToColorChange(fn){
        colorListeners.add(fn);
        },
    }

    $: colorListeners.forEach(listener => listener(colorObj.color));

    setContext('color', colorObj);
    setContext('click', onClick);

    function onClick() {
        count++;
    }

    /*
    function onClick(delta){
        count += delta;
    }
    */


</script>


<h4 style="text-align: center;color:blue">
    # # # Communicating through Context # # #
</h4>

<input type="color" bind:value={colorObj.color}/>

{colorObj.color}

<Parent />

Count : {count}








<hr />
<div class="links">
    <a href="/">HOME</a>
</div>