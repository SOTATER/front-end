import { writable } from 'svelte/store';

const createTitle = () => {
	const { subscribe, set } = writable('');
	return {
		subscribe,
		set: (value) => set(`${value} • OP.GG`),
		clear: () => set('OP.GG'),
	};
};

export const title = createTitle();
