import type { Item } from '../schema/api/items';

export namespace ApiConstants {
	export let version: string;
	export let items: {
		[id: number]: Item;
	};
}
