<script>
    import mousePosition from '$lib/038/mousePosition';
    import debounce from '$lib/038/debounce.js'

    //let position = mousePosition;
    let position = debounce(mousePosition);
    
</script>





<h4 style="text-align: center;color:blue">
    # # # Higher order store # # #
</h4>



<div style="min-height: 50vh;">
    <div style="
    background: red;
    height:100px;
    width:100px;
    position :absolute;
    display:grid;
    place-items:center;
    color:white;
    top: -50px;
    left: -50px;
    transform: translate({$position.x}px, {$position.y}px);
">
    {$position.x}, {$position.y}
</div>
</div>




<hr />
<div class="links">
    <a href="/">HOME</a>
</div>


