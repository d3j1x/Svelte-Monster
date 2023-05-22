<script>
	let input1,input2,input3;
	
	function nextOnEnter1(event) {
		if (event.key === 'Enter') {
			input2.focus();
		}
	}
	
	function nextOnEnter2(event) {
		if (event.key === 'Enter') {
			input3.focus();
		}
	}
	
	function nextOnEnter3(event) {
		if (event.key === 'Enter') {
			input3.blur();
		}
	}
	
	
</script>

<input bind:this={input1} on:keydown={nextOnEnter1} />
<input bind:this={input2} on:keydown={nextOnEnter2} />
<input bind:this={input3} on:keydown={nextOnEnter3} />