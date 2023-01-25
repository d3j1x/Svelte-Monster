<script>

    let value = '';
    function onInput(event) {
       const input = this;
       value = input.value.toUpperCase(); 
    }
</script>

<h4 style="text-align: center;color:blue">Input To UpperCase Auto</h4>

<input on:input={onInput} {value} >

<button on:click={() => {
    setTimeout(() => {
        console.log('timeut!')
        value = 'xxx';
    }, 3000)
}}>
    update value
</button>