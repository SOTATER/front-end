import type { Item } from '../schema/api/items';
import type { Rune } from '../schema/api/runes';
import type { Spell } from '../schema/api/spells';

// TODO: ddragonStore 구현 완료되는대로 ApiConstants 제거 예정
export namespace ApiConstants {
	export let items: {
		[id: number]: Item;
	};
	export let spells: {
		[id: string]: Spell;
	};
	export let runes: {
		[id: number]: Rune;
	};
}
