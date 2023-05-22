<script>
	let valueBeforeAction = '';
	let valueAfterAction = '';
	
	function uppercase(element) {
		function onInput(event) {
			element.value = element.value.toUpperCase();
		}
		element.addEventListener('input', onInput);
		return {
			destroy() {
				element.removeEventListener('input', onInput);
			}
		}
	}
</script>

<h1>The Order of Svelte Actions</h1>
<hr />

<input
	bind:value={valueBeforeAction}	
	use:uppercase
/>

<input
	use:uppercase
	bind:value={valueAfterAction}
/>

<div>{valueBeforeAction}</div>
<div>{valueAfterAction}</div>
