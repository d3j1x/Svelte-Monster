<script>
    export let option ='3';
</script>

<h4 style="text-align: center;color:blue">First Component</h4>


<button on:click={()=> {
    option = '4';
}}>
reset</button>

<label>
    <input type="radio" name="com" bind:group={option} 
    value="1">
    1
</label>

<label>
    <input type="radio" name="com" bind:group={option} 
    value="2">
    2
</label>

<label>
    <input type="radio" name="com" bind:group={option} 
    value="3">
    3
</label>

<label>
    <input type="radio" name="com" bind:group={option} 
    value="4">
    4
</label>

Selected Option : {option}