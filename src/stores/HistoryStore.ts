import { writable } from 'svelte/store';
import { CookiesArray } from '../utils/CookiesUtil';

export const history = writable(CookiesArray.get('history'));

export function addHistory(value: string) {
	CookiesArray.add('history', value);
	history.set(CookiesArray.get('history'));
}

export function deleteHistory(value: string) {
	CookiesArray.remove('history', value);
	history.set(CookiesArray.get('history'));
}
