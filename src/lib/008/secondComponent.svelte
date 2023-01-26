<script>
    import Third from '$lib/008/thirdComponent.svelte';

    import {createEventDispatcher} from 'svelte';

    const dispatch = createEventDispatcher();



    function onComponentButtonClick(event){
        console.log('in secondComponent.svelte',event.detail);
        dispatch('componentButtonClick', event.detail);
    }
</script>

<Third on:componentButtonClick={onComponentButtonClick} />