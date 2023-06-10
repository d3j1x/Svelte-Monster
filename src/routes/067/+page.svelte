<script>
	import A from '$lib/067/A.svelte';
</script>

<h1>$$SLOTs</h1>

<A />

<hr />

<A>
	<div slot="a">something for a</div>
	<div slot="b">something for b</div>
	<div slot="c">something for c</div>
</A>

<hr />

<A>
	<div slot="a">something for a</div>
	<div slot="b">something for b</div>
</A>

<hr />

<A>
	<div slot="a">something for a</div>
	<svelte:fragment slot="b"></svelte:fragment>
	<div slot="c">something for c</div>
</A>

<hr />

<A>
	<div slot="a">something for a</div>
	<svelte:fragment slot="b">{#if true}sss{/if}</svelte:fragment>
	<div slot="c">something for c</div>
</A>