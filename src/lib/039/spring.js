import { spring } from 'svelte/motion';
import { readable } from 'svelte/store'

export default function (store) {
	const springStore = spring(undefined, {
		stiffness: 0.6, damping: 0.4
	});
	
	return readable(undefined, set => {
		let unsibscribeFromStore = store.subscribe(springStore.set);
		let unsibscribeFromSpring = springStore.subscribe(set);
		
		return () => {
			unsibscribeFromStore();
			unsibscribeFromSpring();
		}
	});
	
}