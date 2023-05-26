<script>
	import Tooltip from '$lib/059/Tooltip.svelte';
	import { tooltip } from '$lib/059/tooltip';
</script>

<h1>Use : tooltip</h1>
<hr />

<h2 title="this is a greeting">
	Hello world !
</h2>

<h2 title="this is a greeting using tooltip action" use:tooltip> 
	Hello world ! from action
</h2>


<Tooltip title="this is a greeting using tooltip Component">
	<h1>
		Hello World !
	</h1>
</Tooltip>

<p>
	Hello story <Tooltip title="hello">from svelte</Tooltip>
</p>

<p>
	Hello story <span title="hello" use:tooltip>from svelte span</span>
</p>