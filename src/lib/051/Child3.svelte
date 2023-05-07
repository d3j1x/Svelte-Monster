<svelte:head>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css">
</svelte:head>


<script>
	import flatpickr from "flatpickr";
	
	function datepicker(element, open) {
		const calender =flatpickr(element);
		
		return {
			update(open) {
				if (open) {
					calender.open();
				} else {
					calender.close();
				}
			},
			destroy() {
				calender.destroy();
			}
		}
	}
	
	let showMonths = 3;
	let checked = false;
</script>

<input type="checkbox" bind:checked={checked} />


<buton use:datepicker={checked}>
	Date Picker
</buton>

<hr />

