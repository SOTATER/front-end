import { addHistory } from '../stores/HistoryStore';
import { push } from 'svelte-spa-router';
import { title } from '../stores/MetaStore';

const CHOSUNG = [
	'ㄱ',
	'ㄲ',
	'ㄴ',
	'ㄷ',
	'ㄸ',
	'ㄹ',
	'ㅁ',
	'ㅂ',
	'ㅃ',
	'ㅅ',
	'ㅆ',
	'ㅇ',
	'ㅈ',
	'ㅉ',
	'ㅊ',
	'ㅋ',
	'ㅌ',
	'ㅍ',
	'ㅎ',
];

const DOUBLE_CHOSUNG = {
	ㄳ: 'ㄱㅅ',
	ㄵ: 'ㄴㅈ',
	ㄶ: 'ㄴㅎ',
	ㄺ: 'ㄹㄱ',
	ㄻ: 'ㄹㅁ',
	ㄼ: 'ㄹㅂ',
	ㄽ: 'ㄹㅅ',
	ㄾ: 'ㄹㅌ',
	ㄿ: 'ㄹㅍ',
	ㅀ: 'ㄹㅎ',
	ㅄ: 'ㅂㅅ',
};

export const getChosung = (str: string): string => {
	// 한글 유니코드: 0xAC00 + ((초성 × 21) + 중성) × 28 + 종성
	let chosungs = '';
	for (let i = 0; i < str.length; i++) {
		const word = str[i].charCodeAt(0) - 0xac00;
		const jongsung = word % 28;
		const jungsung = ((word - jongsung) / 28) % 21;
		const chosung = ((word - jongsung) / 28 - jungsung) / 21;
		chosungs = chosungs.concat(CHOSUNG[chosung]);
	}
	return chosungs;
};

export const disassembleChosung = (str: string): string => {
	let chosung = str;
	for (const doubleChosung in DOUBLE_CHOSUNG) {
		chosung = chosung.replace(doubleChosung, DOUBLE_CHOSUNG[doubleChosung]);
	}
	return chosung;
};

export const search = (searchText: string): void => {
	if (!searchText?.length) {
		return;
	}
	addHistory(searchText);
	push(`/summoner/${searchText}`);
	title.set(`${searchText} - 게임 전적`);
};
