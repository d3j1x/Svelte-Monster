<script>
	import {onMount, tick} from 'svelte';
	let html = `<b>this is a bold text</b><button id="xyz">ClickMe</button><button id="zzz">ClickMeToo</button>`;

	function onClick(event) {
		console.log(event.target.id);
	}

	let div;
	
	// onMount(() => {
	// 	div.querySelector('button').addEventListener('click', () => {
	// 		console.log('click!');
	// 	});
	// })

	// $: html && attachButtonListener();
	$: html, attachButtonListener();

	async function attachButtonListener() {
		// if(!div) return
		// console.log("attachButtonListener");
		if(div) {
			div.querySelectorAll('button').forEach(btn => btn.removeEventListener('click', onClick));
		}
		await tick();
		
		// div.querySelector('button').addEventListener('click', onClick);
		div.querySelectorAll('button').forEach(btn => btn.addEventListener('click', onClick));
	}

	
</script>

<h1>@html4</h1>

<textarea bind:value={html} cols="40" rows="4" />

<div bind:this={div}>
	{@html html}
</div>
