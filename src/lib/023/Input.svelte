<script>
    import {valueStore} from './data';

</script>

<input on:input={(e) => {valueStore.set(e.currentTarget.value);}}>
