<script>
	export let type;
	$$restProps
</script>

{JSON.stringify($$props)}

<button {...$$props} class="btn-{type} {$$props.class}"  >
	<slot />
</button>

<hr />

{JSON.stringify($$restProps)}
<button {...$$restProps} class="btn-{type} {$$props.class}"  >
	<slot />
</button>

<hr />

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