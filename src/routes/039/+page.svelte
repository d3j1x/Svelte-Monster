<script>
    import mousePosition from '$lib/039/mousePosition';
    import debounce from '$lib/039/debounce';
    import throttle from '$lib/039/throttle';
    import spring from '$lib/039/spring';

    let position = mousePosition;
    let positionD = debounce(mousePosition);
    let positionT = throttle(mousePosition);
    let positionS = spring(mousePosition);
    
</script>





<h4 style="text-align: center;color:blue">
    # # # Higher order store 2 # # #
</h4>




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
transform: translate({$positionS.x}px, {$positionS.y}px);
">
{$positionS.x}, {$positionS.y}
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


