<script>
	let html = `<b>this is a bold text</b><button>ClickMe</button>`;

</script>

<h1>@html2</h1>

<textarea bind:value={html} cols="40" rows="4" />

<div>
	{@html html}
</div>
