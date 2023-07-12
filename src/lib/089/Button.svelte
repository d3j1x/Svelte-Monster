<script>
	export let buttonColor = 'red';
	export let textColor = 'white';
</script>

<button style="background: {buttonColor}; color: {textColor}">
	<slot />
</button>

