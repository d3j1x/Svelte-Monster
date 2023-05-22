<svelte:head>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css">
</svelte:head>


<script>
	import flatpickr from "flatpickr";
	
	function datepicker(element) {
		flatpickr(element)
	}
</script>

<button use:datepicker>
	Date Picker
</button>

<hr />

