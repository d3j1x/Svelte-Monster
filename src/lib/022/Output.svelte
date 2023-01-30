<script>
    import {value, subscribe} from './data';

    import {onMount} from 'svelte'; 

    let _value;

    onMount(() => {
        return subscribe(() => {
            _value = value;
        });
    });

    

</script>


<h1>value: {_value}</h1>