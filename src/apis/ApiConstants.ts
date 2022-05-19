import type { Rune } from '../schema/api/runes';
import type { Spell } from '../schema/api/spells';

// TODO: ddragonStore 구현 완료되는대로 ApiConstants 제거 예정
export namespace ApiConstants {
	export let spells: {
		[id: string]: Spell;
	};
	export let runes: {
		[id: number]: Rune;
	};
}
