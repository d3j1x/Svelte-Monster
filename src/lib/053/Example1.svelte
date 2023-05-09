<script>
	let input;
	
	function blurOnEscape(event) {
		if (event.key === 'Escape') {
			event.currentTarget.blur();
		}
	}
	
	
</script>

<input on:keydown={blurOnEscape} />
<input on:keydown={blurOnEscape} />
<input on:keydown={blurOnEscape} />