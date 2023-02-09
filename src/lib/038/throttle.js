import { derived } from 'svelte/store';

export default function (store) {
	let lastTime;
	return derived(store, (value, set) => {
		let now = Date.now();
		if (!lastTime || (now - lastTime > 100)) {
			set(value);
			lastTime = now;
		} else {
			const timeoutId = setTimeout(() => {
				set(value);
			}, 100);
			
			return () => clearTimeout(timeoutId);
		}
	});
}