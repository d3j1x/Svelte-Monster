<script>
	export let type;
	export let style;
	export let ariaLabel;
</script>

{JSON.stringify($$props)}

<button class="btn-{type}" {style} aria-label={ariaLabel} >
	<slot />
</button>


<style>
	.btn-primary {
		background: #ff5722;
		color: white;
	}
	.btn-secondary {
		background: #5c5c6d;
		color: white;
	}
</style>