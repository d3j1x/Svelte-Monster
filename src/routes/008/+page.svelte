<script>
    import First from '$lib/008/firstComponent.svelte';

    function onElementButtonClick(event){
        console.log('onElementButtonClick',event.target.dataset.value);
    }

    function onComponentButtonClick(event){
        console.log('onComponentButtonClick:',event.detail);
    }
</script>


<h4 style="text-align: center;color:blue">Forwarding component events</h4>

<hr />
Component:
<br/>
<First on:componentButtonClick={onComponentButtonClick} />

<hr />

Element:

<div on:click={onElementButtonClick}>
    <div>
        <button data-value="button1">
            Element Click Me 1</button>
        <button data-value="button2">
            Element Click Me 2</button>
    </div>
</div>





<hr />
<div class="links">
    <a href="/">HOME</a>
</div>