<script>
    import {getContext} from 'svelte';
    import {key} from './context';

    const color = getContext(key);
    //export let color;
</script>


<div style="color: {color}">Second Component</div>