<script>
	import { store, calculateDoubleValue } from '$lib/046/store';
	
	
</script>

<h4 style="text-align: center;color:blue">
    # # # get Svelte Store Value # # #
</h4>


{$store} * 2 = {calculateDoubleValue(store)}

<hr />
<div class="links">
    <a href="/">HOME</a>
</div>