<script>
	let name = 'world';
	
	function lihauAction(node, params) {
		console.log(node,params)
		node.innerHTMl = params;
		
		return {
			update(newParams) {
				console.log('update!', newParams)
				node.innerHTML = newParams;
			},
			destroy() {
				console.log('node is destroyed')
			}
		}
	}
</script>

<h1>Dynamic parameter in Svelte action</h1>
<hr />

<input bind:value={name} />

<div use:lihauAction={name} />

name: {name}

