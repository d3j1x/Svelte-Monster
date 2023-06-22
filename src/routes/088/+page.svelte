<script>
	import {onMount} from 'svelte';
	import Component from '$lib/088/Component.svelte';

	let component;
	onMount(() => {
		console.log(component);
		// component.$set({ name: 'xyz' })
		// component.name = 'shiheb';
	})
</script>

<h1>svelte:option 3</h1>
<Component bind:this={component} />
