<script>
    function onClick(event) {
        console.log('clicked!');
    }
// h1.addEventListener('click', onClick)
</script>

<h4 style="text-align: center;color:blue">Attaching events in Svelte</h4>



<h1 on:click={onClick}>Event listeners console</h1>

<h2 on:click={()=> {console.log('Clicked')}}>Event listeners console</h2>

<hr/>

<div  on:click|capture|passive={()=> {console.log('parent')}}>
    parent
    <div  on:click|stopPropagation={()=> {console.log('child')}}>
        child
    </div>
</div>

<hr/>
<div class="links">
    <a href="/">HOME</a>
</div>