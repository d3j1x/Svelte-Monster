<script>
	let unlocked = false;
	
	let SECRET = 'ArrowUp,ArrowDown,ArrowUp,ArrowDown,ArrowLeft,ArrowRight,ArrowLeft,ArrowRight';
	
	function secretComboAction(element, {secret}) {
		
		let keys = [];
		let timeoutId = null;
		
		function onKeydown(event) {
			keys.push(event.key);
		
			if (keys.join(',') === secret) {
				element.dispatchEvent(new CustomEvent('secretComboAchieve'));
			}
		
			if (timeoutId) clearTimeout(timeoutId);
		
			timeoutId = setTimeout(() => {
				timeoutId = null;
				keys = [];
			}, 1000);
		}
		element.addEventListener('keydown',onKeydown);
		
		return {
			update() {
				
			},
			destroy(){
				element.removeEventListener('keydown',onKeydown);
			}
		}
	}
	
	
</script>


<input 
	use:secretComboAction={{secret: SECRET}} 
	on:secretComboAchieve={() => {unlocked = true;}}
/>



{#if unlocked}
	<div>Secret Unlocked!</div>
{/if}