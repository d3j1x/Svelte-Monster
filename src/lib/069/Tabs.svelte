<script>
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	
	export let selectedTab = "1";
	let selectedTabStore = writable(selectedTab);
	
	$: $selectedTabStore = selectedTab;
	$: updateProps($selectedTabStore);
	
	function updateProps(value) {
		selectedTab = value;
	}
	
	setContext('selectedTab', selectedTabStore);
	
	let titles = [];
	
	setContext('tabTitles', {
		registerTab(id, title) {
			titles.push({id, title});
			titles = titles;
		},
		
		updateTitle(id, title) {
			const tabIndex = titles.findIndex(title => title.id === id);
			titles[tabIndex].title = title; 
		},
		
		unregisterTab(id) {
			const tabIndex = titles.findIndex(title => title.id === id);
			if (tabIndex > -1) {
				titles.splice(tabIndex, 1);
				titles = titles;
			}
		}
	});
</script>

<div>
	{#each titles as { id, title }}
	<button class:selected={$selectedTabStore === id} on:click={() => {$selectedTabStore = id}}>{title}</button>
	{/each}
</div>

<slot {selectedTab}/>

<style>
	button.selected {
		background:black;
		color:white;
	}

</style>

