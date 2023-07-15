<script>
	let html = `<b>this is a bold text</b><button>ClickMe</button>`;

	function innerHtml(node, html) {
		node.innerHTML = html;
		return {
			update(html) {
				node.innerHTML = html;
			}
		}
	}
</script>

<h1>@html</h1>

<textarea bind:value={html} cols="40" rows="4" />

<div use:innerHtml={html}>
</div>
