<script>
	let dropzone1 = '';
	let dropzone2 = '';
	
	let canDrop1 = false;
	let canDrop2 = false;
	
	function onDragStart(event) {
		const text = event.target.innerText;
		event.dataTransfer.setData('text',text);
		canDrop1 = text !== 'C';
		canDrop2 = text !== 'A';
	}
	
	function onDragEnd(event) {
		canDrop1 = canDrop2 = false;
	}
	
	function onDrop1(event) {
		event.preventDefault();
		const data = event.dataTransfer.getData("text");
		dropzone1 += data;
	}
	
	function onDrop2(event) {
		event.preventDefault();
		const data = event.dataTransfer.getData("text");
		dropzone2 += data;
	}
	
	function onDragOver1(event) {
		if (canDrop1) {
			event.preventDefault();
		}
	}
	
	function onDragOver2(event) {
		if (canDrop2) {
			event.preventDefault();
		}
	}
	
</script>


<div style="display: flex;">
	
	<div class="dropzone" on:drop={onDrop1} on:dragover={onDragOver1}>
		{dropzone1}</div>
	
	<div class="dropzone" on:drop={onDrop2} on:dragover={onDragOver2}>
		{dropzone2}</div>
	
</div>


<div style="display: flex;">
	
		<div class="draggable" draggable="true" on:dragstart={onDragStart} on:dragend={onDragEnd}>
			A</div>
	
		<div class="draggable" draggable="true" on:dragstart={onDragStart} on:dragend={onDragEnd}>
			B</div>
	
		<div class="draggable" draggable="true" on:dragstart={onDragStart} on:dragend={onDragEnd}>
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