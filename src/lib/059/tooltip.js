export function tooltip(element) {
	let div;

	function mouseOver(event) {
		div = document.createElement('div');
		div.textContent = element.getAttribute('title');

		div.style.cssText = `
			border: 1px solid #ddd;
			box-shadow: 5px 5px 5px #ddd;
			border-radius: 4px;
			background: white;
			padding: 4px;
			position: absolute;
			top: ${event.pageY + 5}px;
			left: ${event.pageX + 5}px;
		`;

		document.body.appendChild(div);
	}

	function mouseMove(event) {
		div.style.top = `${event.pageY + 5}px`;
		div.style.left = `${event.pageX + 5}px`;
	}

	function mouseLeave() {
		document.body.removeChild(div);
	}

	element.addEventListener('mouseover', mouseOver);
	element.addEventListener('mouseleave', mouseLeave);
	element.addEventListener('mousemove', mouseMove);

	return {
		destroy() {
			element.removeEventListener('mouseover', mouseOver);
			element.removeEventListener('mouseleave', mouseLeave);
			element.removeEventListener('mousemove', mouseMove);
		},
	};
}
