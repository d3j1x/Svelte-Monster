export let value = '';

export function  update(newValue) {
    value = newValue;
    subscribers.forEach(fn => {
        fn();
    })
}

let subscribers = [];
export function subscribe(fn) {
    subscribers.push(fn);

    return function unsubscribe(fn) {
        subscribers.splice(subscribers.indexOf(fn),1)
    }
}

