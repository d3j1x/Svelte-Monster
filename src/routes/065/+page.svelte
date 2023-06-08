<script>
	import Component from '$lib/065/Component.svelte';
	import Component1 from '$lib/065/Component1.svelte';
	import Component2 from '$lib/065/Component2.svelte';
	
	let appCount = 0;
	
	function inc() {
		appCount++;
	}
	
	function inc2(delta) {
		appCount+=delta;
	}
</script>

<h1>Passing data across SLOTS</h1>
<hr />

<button on:click={() => appCount--}>-</button>
{appCount}
<button on:click={() => appCount++}>+</button>
<hr />


<Component>
	<svelte:fragment>
		appCount {appCount}
	</svelte:fragment>
</Component>
<hr />

<Component1>
	<svelte:fragment let:count>
		appCount {appCount}
		<br />
		componentCount: {count}
	</svelte:fragment>
</Component1>
<hr />

<Component1>
	<svelte:fragment let:count={countFromComponent}>
		appCount {appCount}
		<br />
		componentCount: {countFromComponent}
		<br />
		
		<button on:click={inc}>+1</button>
		<button on:click={() => inc2(5)}>+5</button>
	</svelte:fragment>
</Component1>
<hr />

<Component2>
	<svelte:fragment let:count={countFromComponent} let:inc={incFromComponent}>
		appCount {appCount}
		<br />
		componentCount: {countFromComponent}
		<br />
		<button on:click={() => inc2(5)}>+5 APPCOUNT</button>
		<button on:click={() => incFromComponent(3)}>+3 COUNT</button>
	</svelte:fragment>
</Component2>
<hr/>

<Component2>
	<svelte:fragment let:count={countFromComponent} let:inc={incFromComponent}>
		appCount {appCount}
		<br />
		componentCount: {countFromComponent}
		<br />
		<button on:click={() => inc2(countFromComponent)}> app + count</button>
		<button on:click={() => incFromComponent(appCount)}>+ count + app</button>
	</svelte:fragment>
</Component2>






