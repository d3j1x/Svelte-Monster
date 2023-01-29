<script>
    import {setContext} from 'svelte';
    import {key} from './context';


    import First from './firstComponent.svelte';
    
    //let color = "red";

    //setContext('color','red')

    setContext(key,'red')
</script>

<div style="border : 1px solid black;">
    Parent A 
    <!--<First {color}/>-->
    <First />

</div>