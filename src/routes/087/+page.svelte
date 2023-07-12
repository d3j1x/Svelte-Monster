<script>
	import {onMount} from 'svelte';
	import Component from '$lib/087/Component.svelte';

	let component;
	onMount(() => {
		console.log(component);
		// component.$set({ name: 'shiheb' })
		component.name = 'shiheb';
	})
</script>

<h1>svelte:option 2</h1>
<Component bind:this={component} />
