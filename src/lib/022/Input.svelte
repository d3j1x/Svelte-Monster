<script>
    import {update} from './data';

</script>

<input on:input={(e) => {update(e.currentTarget.value);}}>
