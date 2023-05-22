<script>
	let input;
	
	function blurOnEscapeAction(node) {
		
		function blurOnEscape(event) {
			if (event.key === 'Escape') {
				event.currentTarget.blur();
			}
		}
		
		node.addEventListener('keydown', blurOnEscape);
		
		return {
			destroy() {
				node.removeEventListener('keydown', blurOnEscape);
			}
		}
	}
	
	
</script>

<input use:blurOnEscapeAction />
<input use:blurOnEscapeAction />
<input use:blurOnEscapeAction />