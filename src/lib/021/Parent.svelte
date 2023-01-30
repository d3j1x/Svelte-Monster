<script>
    import Child1 from './Child1.svelte';
    import Child2 from './Child2.svelte';

    let show = true;
</script>

<label><input type="checkbox" bind:checked={show}>Show</label>

{#if show}
    <Child1 />
    <Child2 />
{/if}