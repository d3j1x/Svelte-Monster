<script>
	let dropzone1 = '';
	let dropzone2 = '';
	
	function getDragAndDropActions() {
		let canDrop = false;
		function drag(node, data) {
			node.draggable ="true";
			
			function onDragStart(event) {
				event.dataTransfer.setData('text',data);
				canDrop = true;
			}
	
			function onDragEnd(event) {
				canDrop = false;
			}
			
			node.addEventListener('dragstart', onDragStart);
			node.addEventListener('dragend', onDragEnd);
			
			return {
				update(newData) {
					data = newData;
				},
				destroy() {
					node.removeEventListener('dragstart', onDragStart);
					node.removeEventListener('dragend', onDragEnd);
				}
			}	
		}
		
		function drop(node, params) {
			function onDrop(event) {
				event.preventDefault();
				const data = event.dataTransfer.getData("text");
				node.dispatchEvent(new CustomEvent('receivedDragData', {detail: data}));
			}
	
			function onDragOver(event) {
				if (canDrop) {
					event.preventDefault();
				}
			}
			
			node.addEventListener('drop', onDrop);
			node.addEventListener('dragover', onDragOver);
			
			return {
				destroy() {
					node.removeEventListener('drop', onDrop);
					node.removeEventListener('dragover', onDragOver);
				}
			}
		}
	
		return [drag, drop]
	}
	
	const [drag1, drop1] = getDragAndDropActions();
	const [drag2, drop2] = getDragAndDropActions();
	
</script>


<div style="display: flex;">
	
	<div class="dropzone" use:drop1 on:receivedDragData={(event) => dropzone1 += event.detail}>
		{dropzone1}</div>
	
	<div class="dropzone" use:drop2 on:receivedDragData={(event) => dropzone2 += event.detail}>
		{dropzone2}</div>
	
</div>


<div style="display: flex;">
	
		<div class="draggable" use:drag1={"A"}>
			A</div>
	
		<div class="draggable" use:drag1={"B"} use:drag2={"B"}>
			B</div>
	
		<div class="draggable" use:drag2={"C"}>
			C</div>
	
</div>


<style>

	.dropzone {
		width: 100px;
		height: 100px;
		background: lightgrey;
		border: solid 2px;
		margin: 10px;
	}
	
	.draggable {
		background: blue;
		width: 30px;
		height: 30px;
		border-radius:50%;
		color:white;
		display:grid;
		place-items: center;
	}
	
</style>