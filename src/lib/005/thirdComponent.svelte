<script>
    import {tick} from 'svelte';
    let value = '';
    async function onInput(event) {
       const input = this;
       let selectionStart = input.selectionStart;
       let selectionEnd = input.selectionEnd;
       value = input.value.toUpperCase(); 

       await tick();
       input.selectionStart = selectionStart;
       input.selectionEnd = selectionEnd;
    }
</script>

<h4 style="text-align: center;color:blue">Input To UpperCase Auto & Efficace</h4>

<input on:input={onInput} {value} >

<button on:click={() => {
    setTimeout(() => {
        console.log('timeut!')
        value = 'xxx';
    }, 3000)
}}>
    update value
</button>