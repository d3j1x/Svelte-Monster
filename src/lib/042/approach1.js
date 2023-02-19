import {get} from 'svelte/store';
// store a history of actions applied to the store

export default function approach1(store) {
	const history = [];
	let historyIndex = -1;
	return {
		subscribe: store.subscribe,
		doAction(action) {
			historyIndex++;
			history[historyIndex] = action;
			while(historyIndex < history.lenght -1) {
				history.pop();
			}
			store.update(value => history[historyIndex].apply(value));
		},
		undo() {
			if (historyIndex >= 0) {
				store.update(value => history[historyIndex].reverse(value));
				historyIndex--;
			}
		},
		redo() {
			if (historyIndex < history.length -1) {
				historyIndex++;
				store.update(value => history[historyIndex].apply(value));
			}
		},
		sum(value) {
			return this.doAction({
				apply(_value) {return _value + value},
				reverse(_value) {return _value - value},
			});
		}
	};
}