import { writable } from 'svelte/store';

function setStore() {
	const { subscribe, set, update } = writable(0);

	return {
		subscribe,
        running: false,
		onBreak: false,
        round: 1,
        completedRounds: 0,
        small: 100
	};
}

export const Store = setStore();