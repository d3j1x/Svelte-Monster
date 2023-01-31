<script>
    import {store1, store2} from './data';

    import {onMount} from 'svelte'; 

    let _value1, _value2;

    onMount(() => {
        return store1.subscribe(value => {
            _value1 = value;
        })
        
    });

    onMount(() => {
        return store2.subscribe(value => {
            _value2 = value;
        })
        
    });

    

</script>


<h1>store1: {_value1}</h1>
<h1>store2: {_value2}</h1>