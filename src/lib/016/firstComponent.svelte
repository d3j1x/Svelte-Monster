<script>
    let colorsObj = [
        {name:'red', hex: '#f00'},
        {name:'green', hex: '#0f0'},
        {name:'blue', hex: '#00f'},
        {name:'yellow', hex: '#ff0'}
    ];

    //for (const colorObj of colorsObj) {
    //    console.log(colorObj);
    //    console.log(colorObj.name);
    //    console.log(colorObj.hex);
    //}

    for(const {name, hex} of colorsObj){
        console.log(name,hex);
    }

    colorsObj.forEach(({ name, hex = '#fff'}, index)=>{
        console.log(index);
    })

</script>
<h4 style="text-align: center;color:blue">
    First Component
</h4>
<ul>
    {#each colorsObj as colorObj}
        <li>{JSON.stringify(colorObj)}</li>
        <li style="color: {colorObj.hex};">{colorObj.name}</li>
    {/each}
</ul>
<br/>
<hr />

<!--Methode 2-->
<ul>
    {#each colorsObj as {name, hex} , index}
        <li style="color:{hex};">{index} - {name}</li>
        {#each hex as character}
            <li>{character}</li>
        {/each}
    {/each}
</ul>

