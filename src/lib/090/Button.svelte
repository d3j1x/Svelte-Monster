<script>
	export let buttonColor = 'red';
	export let textColor = 'white';
</script>

<button style="background: {buttonColor}; color: {textColor}">
	<slot />
</button>



<button style="
	--button-color: green;
	--text-color: yellow;
	background: var(--button-color); 
	color: var(--text-color);">
	<span>
		<slot />
	</span>
	<div>
		some text
	</div>
</button>

<button style="
	--button-color: green;
	--text-color: yellow;
	">
	<span>
		<slot />
	</span>
	<div>
		some text
	</div>
</button>

<button style="
	--button-color: green;
	--text-color: yellow;
	background: var(--button-color); 
	color: var(--text-color);">
	<span>
		<slot />
	</span>
	<div>
		some text
	</div>
</button>

<button style="">
	<span>
		<slot />
	</span>
	<div>
		some text
	</div>
</button>

<style>
	span {
		background: var(--button-color, blue);
	}
	div {
		color: var(--text-color, blue);
	}
</style>