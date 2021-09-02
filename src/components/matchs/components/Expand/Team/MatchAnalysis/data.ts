export interface ProgressData {
	img: string;
	value: number;
	percentage: number;
}

const img =
	'https://opgg-static.akamaized.net/images/lol/champion/Camille.png?image=q_auto:best&v=1630555355';

export const winners: ProgressData[] = [
	{
		img,
		value: 0,
		percentage: 0,
	},
	{
		img,
		value: 12,
		percentage: 80,
	},
	{
		img,
		value: 6,
		percentage: 40,
	},
	{
		img,
		value: 14,
		percentage: 94,
	},
	{
		img,
		value: 10,
		percentage: 66.6,
	},
];

export const losers: ProgressData[] = [
	{
		img,
		value: 8,
		percentage: 56,
	},
	{
		img,
		value: 15,
		percentage: 100,
	},
	{
		img,
		value: 8,
		percentage: 56,
	},
	{
		img,
		value: 5,
		percentage: 33.3,
	},
	{
		img,
		value: 3,
		percentage: 20,
	},
];

export interface CircleData {
	winnerValue: number;
	loserValue: number;
}

export const circleData: CircleData = {
	winnerValue: 42,
	loserValue: 39,
};
