<script>
    import { getContext } from "svelte";
    import { data as storeData } from './store';

    const contexData = getContext('data');
</script>

<div>
    Context: {$contexData}, Store: {$storeData}
</div>