<script>
	function clickOutside(element, callbackFunction) {
		function onClick(event) {
			if (!element.contains(event.target)) {
				callbackFunction();
			}
		}
		document.body.addEventListener('click', onClick);
		return {
			update(newCallBackFunction) {
				callbackFunction = newCallBackFunction;
			},
			destroy() {
				document.body.removeEventListener('click', onClick);
			}
		}
	}
</script>

<h1> use : clickOutside </h1>
<hr />

<div class="modal" 
		 use:clickOutside={() => {console.log('Clicked outside')}}>
	Some Modal
</div>

<style>
	.modal {
		padding: 16px;
		border: 1px solid black;
	}
</style>