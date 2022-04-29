import type { Item } from '../schema/api/items';
import type { Rune } from '../schema/api/runes';
import type { Spell } from '../schema/api/spells';
import type { DDragonChampion } from '../schema/ddragon/champions';

export namespace ApiConstants {
	export let version: string;
	export let items: {
		[id: number]: Item;
	};
	export let spells: {
		[id: string]: Spell;
	};
	export let runes: {
		[id: number]: Rune;
	};
	export let champions: DDragonChampion;
}
