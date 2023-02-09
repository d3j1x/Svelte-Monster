<script>
    import mousePosition from '$lib/038/mousePosition';
    import debounce from '$lib/038/debounce';
    import throttle from '$lib/038/throttle';

    let position = mousePosition;
    let positionD = debounce(mousePosition);
    let positionT = throttle(mousePosition);
    
</script>





<h4 style="text-align: center;color:blue">
    # # # Higher order store # # #
</h4>




    <div style="
    background: black;
    height:140px;
    width:140px;
    position :absolute;
    display:grid;
    place-items:center;
    color:white;
    top: -70px;
    left: -70px;
    transform: translate({$positionD.x}px, {$positionD.y}px);
">
    {$positionD.x}, {$positionD.y}
</div>


 <div style="
    background: blue;
    height:120px;
    width:120px;
    position :absolute;
    display:grid;
    place-items:center;
    color:white;
    top: -60px;
    left: -60px;
    transform: translate({$positionT.x}px, {$positionT.y}px);
">
    {$positionT.x}, {$positionT.y}
</div>


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






<hr />
<div class="links">
    <a href="/">HOME</a>
</div>


