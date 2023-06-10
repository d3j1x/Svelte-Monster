import { writable } from 'svelte/store';

let loading = false;
let noMoreData = false;
let page = 1;
let data = [];

const list = writable({
	loading,
	data,
	noMoreData,
});

export default {
	subscribe: list.subscribe,
	async fetchMore() {
		if (loading || noMoreData) return;
		loading = true;
		
		list.set({ loading, data, noMoreData });
		
		const response = await
		fetch('https://picsum.photos/v2/list?page=${page++}&limit=10');
		const newData = await response.json();
		
		loading = false;
		noMoreData = newData.length === 0;
		data.push(...newData);
		
		list.set({ loading, data, noMoreData });
	}
}
