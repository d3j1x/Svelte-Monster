<script>
	import Button from '$lib/071/Button.svelte';
	
	let type = "primary";
	
	let name ="Primary";
	
	setTimeout(() => {
		type="secondary";
		name="Secondary";
	},2000)
</script>

<h1>PROPS 2</h1>
<hr />



<hr />

<Button {type} style="font-size: 20px;">
	{name} <b>Button</b>
</Button>

<br />

<Button type="secondary" style="border-radius:8px;">
	Secondary <b>Button</b>
</Button>


<br />

<Button type="primary" 
				style="font-size: 20px;" 
				ariaLabel="close"
				class="a b c"
				foo="bar">
	X
</Button>

<style>
	:global(.a) {
		font-style: italic;
	}
</style>

