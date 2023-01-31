import { writable, readable } from 'svelte/store';

export let valueStore = readable('hello',(set)=> {
    console.log('start!');
    let timeoutid = setTimeout(() => {
        set('world')
    }, 2500);
    
    return () => {
        console.log('stop!');
        clearTimeout(timeoutid);
    }
});



