<script>
	import C from './C.svelte';
</script>

<C>
	<slot name="header" slot="header" let:counter {counter} >
		fallback: {counter}
	</slot>
</C>

<!-- <C>
	<slot name="header" slot="header" let:counter {counter} />
</C> -->

<!-- <C>
	<div name="header" slot="header" let:counter>b: {counter} </div>
</C> -->

<!-- <C>
		<slot name="header" slot="header" />
</C> -->

<!-- <C>
		<slot name="b-header" slot="header" />
</C> -->

<!-- <C>
	<svelte:fragment slot="header">
		<slot name="b-header"/>
	</svelte:fragment>
</C> -->


<!-- b header: <slot name="b-header"/>

<C>
	<svelte:fragment slot="header">
		<div>
			HEADER FROM B 1
		</div>
		<div>
			HEADER FROM B 2
		</div>
	</svelte:fragment>
</C> -->




<!-- <C>
	
	<div slot="header">
		HEADER FROM B 1
	</div>
	
</C> -->