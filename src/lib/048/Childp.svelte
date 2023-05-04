<script>
	let name = 'world';
	
	function lihauAction(node, params) {
		console.log(node,params);
// 		node.innerHTML = params;
		return {
			destroy() {
				console.log('node is destroyed')
			}
		}
	}
</script>

<h1 use:lihauAction={name}>Hello {name}!</h1>

<h2>Hello {name}!</h2>
