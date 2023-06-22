<script>
	export let name = 'world';
	let obj = {
		name: 'lihau',
		age: 'secret',
	};

	import {beforeUpdate, onMount} from 'svelte';
	
	onMount(() => {
		let intervalid = setInterval(() => {
			console.log(obj);
		},1000)
		return () => clearInterval(intervalid);
	})
	
	beforeUpdate(() => {
		console.log('xxbeforeUpdatexx')
	})
</script>

<div>{name}</div>

<button on:click={() => {
	//obj.name = 'shiheb';
	//obj = { name:'svelte', age: obj.age}
	obj = {...obj, name:'svelte',}
	name = 'world2';}}>
BUTTON</button>


<svelte:options immutable={true} namespace="html" accessors={false} />

{obj.name} is {obj.age} years old