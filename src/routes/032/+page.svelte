<script>
    import mousePosition from '$lib/032/mousePosition';
    import Child from '$lib/032/child.svelte';
</script>

<h4 style="text-align: center;color:blue">
    # # # DOM events as svelte store # # #
</h4>

Mouse position: {$mousePosition.x},{$mousePosition.y}

<hr />

<Child />

<hr />
<div class="links">
    <a href="/">HOME</a>
</div>