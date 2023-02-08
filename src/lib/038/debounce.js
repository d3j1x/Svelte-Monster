import { derived } from 'svelte/store';

export default function debounced(store) {
  let initialised = false;
  return derived(store, ($value, set) => {
    if(!initialised) {
        set($value);
	    initialised = true;
		return;
    }
	const timeout = setTimeout(()=> {
		set($value);
	},100);
		
	return () => {
		clearTimeout(timeout);
	}
  });
}