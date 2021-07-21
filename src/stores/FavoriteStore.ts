import { writable } from 'svelte/store';
import { CookiesArray } from '../utils/CookiesUtil';

export const favorite = writable(CookiesArray.get('favorite'));

export function addFavorite(value: string) {
	CookiesArray.add('favorite', value);
	favorite.set(CookiesArray.get('favorite'));
}

export function deleteFavorite(value: string) {
	CookiesArray.remove('favorite', value);
	favorite.set(CookiesArray.get('favorite'));
}
