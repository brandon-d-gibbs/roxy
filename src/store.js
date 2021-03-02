import { writable } from 'svelte/store';


	export const smallBlind = writable(100);
    export const running = writable(false);
    export const onBreak = writable(false);
    export const round = writable(1);
    export const completedRounds = writable(0);
