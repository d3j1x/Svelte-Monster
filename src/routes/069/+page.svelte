<script>
	import Tabs from '$lib/069/Tabs.svelte';
	import Tab from '$lib/069/Tab.svelte';
	let isLoggedIn = false;
	let username= "lihau";
	let selectedTab = "2";
</script>


<h1>TABS</h1>
<hr />


<div>
	<input type="checkbox" bind:checked={isLoggedIn} />
	<input bind:value={username} />
</div>

<button on:click={() => {selectedTab = "4"}}>Click ME </button>

{selectedTab}

<Tabs bind:selectedTab>
	<Tab id="1" title="Tab 1">HEY HEY</Tab>
	{#if isLoggedIn}
		<Tab id="2" title="Secret Tab 2">LOGGED IN CONTENT 1</Tab>
		<Tab id="3" title="Secret Tab 3">LOGGED IN CONTENT 2</Tab>
	{/if}
	<Tab id="4" title={username}>
		hoo haa hee this is the info for {username}
	</Tab>
</Tabs>