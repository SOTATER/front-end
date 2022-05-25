import { writable } from 'svelte/store';
import { CookiesArray } from '../utils/CookiesUtil';

const key = 'favorite';

export const favorite = writable(CookiesArray.get(key));

export function addFavorite(value: string): void {
	CookiesArray.add(key, value);
	favorite.set(CookiesArray.get(key));
}

export function deleteFavorite(value: string): void {
	CookiesArray.remove(key, value);
	favorite.set(CookiesArray.get(key));
}

export function isInCookie(value: string): boolean {
	return CookiesArray.isInCookie(key, value);
}
