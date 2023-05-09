<script>
	let input,input2,input3;
	
	function blurOnEscape(event) {
		if (event.key === 'Escape') {
			input.blur();
		}
	}
	
	function blurOnEscape2(event) {
		if (event.key === 'Escape') {
			input2.blur();
		}
	}
	
	function blurOnEscape3(event) {
		if (event.key === 'Escape') {
			input3.blur();
		}
	}
</script>

<input bind:this={input} on:keydown={blurOnEscape} />
<input bind:this={input2} on:keydown={blurOnEscape2} />
<input bind:this={input3} on:keydown={blurOnEscape3} />