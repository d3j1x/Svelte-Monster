<script>
    import {valueStore} from './data';

    import {onMount} from 'svelte'; 

    let _value;

    onMount(() => {
        return valueStore.subscribe(value => {
            _value = value;
        })
        
    });

    

</script>


<h1>value: {_value}</h1>