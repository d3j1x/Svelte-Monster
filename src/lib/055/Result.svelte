<script>
	let unlocked = false;
	
	let SECRET = 'ArrowUp,ArrowDown,ArrowUp,ArrowDown,ArrowLeft,ArrowRight,ArrowLeft,ArrowRight';
	
	function secretComboAction(element, {secret, callback}) {
		
		let keys = [];
		let timeoutId = null;
		
		function onKeydown(event) {
			keys.push(event.key);
		
			if (keys.join(',') === secret) {
				callback();
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
	
// 	function onKeydown(event) {
// 		keys.push(event.key);
		
// 		if (keys.join(',') === SECRET) {
// 			unlocked = true;
// 		}
		
// 		if (timeoutId) clearTimeout(timeoutId);
		
// 		timeoutId = setTimeout(() => {
// 			timeoutId = null;
// 			keys = [];
// 		}, 1000);
// 	}
	
</script>

<!-- <input on:keydown={onKeydown} /> -->

<input use:secretComboAction={{
	secret: SECRET,
	callback: () => {
		unlocked = true;
	}
}} />


<p>
    #SeCReT 2# Is UP DOWN LEFT RIGHT .
</p>

<input use:secretComboAction={{
	secret: 'ArrowUp,ArrowDown,ArrowLeft,ArrowRight',
	callback: () => {
		unlocked = true;
	}
}} />

{#if unlocked}
	<div>Secret Unlocked!</div>
{/if}