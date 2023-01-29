<script>
    import {getContext} from 'svelte';
    import {key} from './context';

    const color = getContext(key);

    //export let color;
</script>

<div>Third Component : {color}</div>