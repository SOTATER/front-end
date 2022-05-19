import type { Rune } from '../schema/api/runes';

// TODO: ddragonStore 구현 완료되는대로 ApiConstants 제거 예정
export namespace ApiConstants {
	export let runes: {
		[id: number]: Rune;
	};
}
