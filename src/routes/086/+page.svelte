<script>
	import {onMount} from 'svelte';
	import Component from '$lib/086/Component.svelte';

	let component;
	onMount(() => {
		console.log(component);
		component.$set({ name: 'shiheb' })
	})
</script>

<h1>svelte:option</h1>
<Component bind:this={component} />
