import { writable, readable } from 'svelte/store';

export const store1 = readable(0, (set) => {
    let i = 0;
    let timeoutid = setInterval(() => {
        set(++i);
    },1000);

    return () => {
        clearInterval(timeoutid);
    }
});

export const store2 = writable('');



