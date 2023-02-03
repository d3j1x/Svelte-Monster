<script>
    import { onMount } from 'svelte';
    let x = 0, y = 0;

    onMount(()=>{
        function move(event){
            x = event.clientX;
            y = event.clientY;
        }
        document.body.addEventListener("mousemove",move);
        return () => {
            document.body.addEventListener("mousemove", move);
        }
    });
    $: console.log(x, y);
</script>



<h4 style="text-align: center;color:blue">
    # # # DOM events # # #
</h4>

Mouse position: {x},{y}


<hr />
<div class="links">
    <a href="/">HOME</a>
</div>