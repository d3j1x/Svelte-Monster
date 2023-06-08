<script>
	import B from './B.svelte';
</script>

<B>
	<div slot="header" let:counter>
		Header from a {counter}
	</div>
</B>

<!-- <B>
	<div slot="header">
		Header from a
	</div>
</B> -->

<!-- <B>
	<div slot="b-header">
		Header from a
	</div>
</B> -->