import { writable } from "svelte/store";
import { CookiesArray } from "../utils/CookiesUtil";

const key = 'favorite';

export const favorite = writable(CookiesArray.get(key));

export function addFavorite(value: string) {
    CookiesArray.add(key, value);
    favorite.set(CookiesArray.get(key));
}

export function deleteFavorite(value: string) {
    CookiesArray.remove(key, value);
    favorite.set(CookiesArray.get(key));
}

export function isCookie(value: string): boolean {
    return CookiesArray.isCookie(key, value);
}