<script>
	import { store, calculateDoubleValue } from '$lib/045/store';
	
	
</script>

<h4 style="text-align: center;color:blue">
    # # # Svelte Store Value # # #
</h4>


{$store} * 2 = {calculateDoubleValue(store)}

<hr />
<div class="links">
    <a href="/">HOME</a>
</div>