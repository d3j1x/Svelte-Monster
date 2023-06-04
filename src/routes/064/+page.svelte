<script>
	import Component from '$lib/064/Component.svelte';
	import Component1 from '$lib/064/Component1.svelte';
	import Component2 from '$lib/064/Component2.svelte';
	import Component3 from '$lib/064/Component3.svelte';
	import Component4 from '$lib/064/Component4.svelte';
	
	let count = 0;
</script>

<h1>SLOT</h1>
<hr />

<Component>
	<span style="color:blue">Hello World</span>
</Component>

<Component1>
	<span style="color:red">Hello World</span>
</Component1>

<hr />

<div>
	div:
	{count}
	<button on:click={() => count++}>+</button>
</div>

<hr />

<Component2>
	{count}
	<button on:click={() => count--}>-</button>
</Component2>

<hr />

<Component2 />

<hr />

<Component3>
	
	<span style="color:green">Hello World</span>
	
	<div slot="header">
		element for header
	</div>
	
	<div slot="footer">
		element for footer
	</div>
</Component3>

<hr />

<Component4>
	<slot:template slot="header">
		{count}
		<button on:click={() => count--}>-</button>
	</slot:template>
	
	<div slot="footer">
		element for footer
	</div>
</Component4>




<style>
	button {
		font-size: 30px;
		color:blue;
	}
</style>