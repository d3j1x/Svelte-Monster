import { writable } from 'svelte/store';

class Clock {
  constructor(){
    this.time = Date.now();
    this._store = writable(this);
  }

  tick(){
		this.time = Date.now();
		this._store.set(this);
		// console.log(`tick(): ${this.time}`)
	}
	
	subscribe(subscriber) {
		return this._store.subscribe(subscriber)
	}
}

export default Clock;
