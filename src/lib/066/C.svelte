<script>
	let counter = 0;
</script>

<button on:click={()=> counter++}>C: {counter}</button>
<br />

C Header: <slot name="header" {counter}/>

<!-- C Header: <slot name="header" /> -->

<div>
	C: <slot name="content" />
</div>

C Footer: <slot name="footer" />