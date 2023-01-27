import {beforeUpdate, onMount} from 'svelte';
import { element } from 'svelte/internal';

export default function () {
    let elements = new Set();

    beforeUpdate(() => {
        elements.forEach(element => {
            element.style.outlineColor = 'red';

            setTimeout(() => {
                if (elements.has(element)) {
                    element.style.outlineColor = 'black';
                }
            },1000);
        })
    });

    onMount(() => {
        elements.forEach(element => {
            element.style.outline = '2px solid black';
            element.style.margin = '8px';
        });
    });

    return function markUpAction(node) {
        elements.add(node);
        
        return {
            destroy() {
                elements.delete(node);
            }
        }
    }
}