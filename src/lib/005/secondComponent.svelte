<script>

    let value = '';
    function onInput(event) {
       const input = this;
       value = input.value; 
    }
</script>

<h4 style="text-align: center;color:blue">Input To UpperCase Manual</h4>

<input on:input={onInput} {value} >

<button on:click={() => {
    setTimeout(() => {
        console.log('timeut!')
        value = value.toUpperCase();
    }, 2000)
}}>
    update value
</button>