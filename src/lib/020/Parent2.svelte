<script>
    import Second from './secondComponent.svelte'
    import {setContext} from 'svelte';
    import {key} from './context';

    const color = setContext(key,'blue');
</script>

<Second />