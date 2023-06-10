<script>
	import { createEventDispatcher } from 'svelte';
	import viewport from './useViewportAction';
	export let data;
	export let noMoreData;
	export let loading = false;
	export let key;
	
	const dispatch = createEventDispatcher();
	
</script>


<ul>
	{#each data as item (item[key])}
<!-- 		<li><slot {item} /></li> -->
		<li><slot name="item" {item} /></li>
	{/each}
	
	{#if !noMoreData}
	<li use:viewport on:enterViewport={() => dispatch('loadMore')} >
		{#if loading}
		Loading...
		{/if}
	</li>
	{/if}
</ul>
