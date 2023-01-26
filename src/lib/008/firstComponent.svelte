<script>
    import Second from '$lib/008/secondComponent.svelte';

    import {createEventDispatcher} from 'svelte';

    const dispatch = createEventDispatcher();

    function componentButtonClick(event){
        console.log('in firstComponent.svelte',event.detail);
        dispatch('componentButtonClick', event.detail);
    }
</script>

<Second on:componentButtonClick={componentButtonClick} />