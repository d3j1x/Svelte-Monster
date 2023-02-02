import {proxy, subscribe, snapshot} from "valtio/vanilla";

export default proxy({count:0, text:"hello"});

export function toSvelteStore(proxyState) {
    return {
        subscribe(fn) {
            fn(snapshot(proxyState));
            
            return subscribe(proxyState, () => {
                fn(snapshot(proxyState));
            });
        }
    };
}