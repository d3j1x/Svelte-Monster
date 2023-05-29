const intersectionObserver = new IntersectionObserver(
	(entries) => {
		entries.forEach(entry => {
			const eventName = entry.isIntersecting ? 'enterViewport' : 'exitViewport';
			entry.target.dispatchEvent(new CustomEvent(eventName));
		});
	}
)

export default function viewport(element) {
	intersectionObserver.observe(element);
	return {
		destroy() {
			intersectionObserver.unobserve(element);
		}
	}
}