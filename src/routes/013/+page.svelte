<script>
    import First from '$lib/013/firstComponent.svelte';
    let condition;
</script>
<h4 style="text-align: center;color:blue">
    Component Lifecycle</h4>
<input type="checkbox" bind:checked={condition}>

{#if condition}
<First />
{/if}


<hr />
<div class="links">
    <a href="/">HOME</a>
</div>