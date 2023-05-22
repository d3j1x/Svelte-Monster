<script>
	let count = 0;
	let timeoutId;
	
	function onClick() {
		if (++count === 3) {
			console.log('tripleClick!');
		}
		
		timeoutId && clearTimeout(timeoutId);
		timeoutId = setTimeout(() => {
			timeoutId= null;
			count = 0;
		}, 800);
	}
</script>

<button on:click={onClick}>Click Me </button>