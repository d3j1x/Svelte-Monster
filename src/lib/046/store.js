import {writable, get} from 'svelte/store';

export const store = writable(1);

export function calculateDoubleValue(store) {
	let $store = get(store);
	return $store * 2;
}