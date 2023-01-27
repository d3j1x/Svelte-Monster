<script>
    import First from '$lib/010/firstComponent.svelte';
    let value = '';
    let foo = '';
    let count;

    function onInput(event) {
        value = this.value;
    }
</script>

<h4 style="text-align: center;color:blue">Binding</h4>


<input on:input={onInput} {value} />

<div>value: "{value}"</div>

<button on:click={()=> value = "Click!"}>Click Me</button>
<br/>
<hr/>
<br/>
<input bind:value={foo} />
<div>foo: "{foo}"</div>


<button on:click={()=> foo = "Click!"}>Click Me</button>

<hr/>
<First on:countChanged={(event)=>{count = event.detail}} 
    {count}/>

<button on:click={() => {count = 999}}>
    Click Me
</button>
<hr/>


<First 
    bind:count
    />

<button on:click={() => {count = 999}}>
    Click Me
</button>


<hr />
<div class="links">
    <a href="/">HOME</a>
</div>