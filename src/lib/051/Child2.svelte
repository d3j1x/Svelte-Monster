<svelte:head>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css">
</svelte:head>


<script>
	import flatpickr from "flatpickr";
	
	function datepicker(element, config) {
		const calender =flatpickr(element, config);
		
		return {
			update(newConfig) {
				calender.set('showMonths', newConfig.showMonths);
			}
		}
	}
	
	let showMonths = 3;
</script>

<input type="number" bind:value={showMonths} />

<button use:datepicker={{showMonths}}>
	Date Picker
</button>

<hr />

