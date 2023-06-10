<div>
	A: <slot name='a'>Fallback for a</slot>
</div>

<!-- <div>
	B: <slot name='b'>Fallback for b</slot>
</div> -->

<!-- <div>
	B: <slot name='b'></slot>
</div> -->

{#if $$slots.b}
	<div>
		B: <slot name='b'></slot>
	</div>
{/if}

<div>
	C: <slot name='c'>Fallback for c</slot>
</div>