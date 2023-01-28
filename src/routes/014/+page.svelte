<script>
    import First from '$lib/014/firstComponent.svelte';
    import Second from '$lib/014/secondComponent.svelte';

    let show = false;
</script>


<h4 style="text-align: center;color:blue">
    onMount !!!</h4>

<input bind:checked={show} type="checkbox" />

{#if show}

    <First />

    <Second />
{/if}

<hr />
<div class="links">
    <a href="/">HOME</a>
</div>