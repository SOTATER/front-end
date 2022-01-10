/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import type { GameType } from './types';

// 임시 사용. API 연동 후 제거 예정
export const getGameAverageStatsDummyData = (type: GameType) => {
	switch (type) {
		case 'total':
		case '':
			return {
				win: 8,
				lose: 12,
				kda: {
					kill: 7.7,
					death: 5.9,
					assist: 8.7,
					ckRate: 48,
				},
				mostChampions: [
					{
						name: 'Jayce',
						win: 3,
						lose: 3,
						kda: 2.21,
					},
					{
						name: 'Kassadin',
						win: 2,
						lose: 1,
						kda: 4.1,
					},
					{
						name: 'Pantheon',
						win: 1,
						lose: 0,
						kda: 7.75,
					},
				],
				positionStats: [
					{
						name: '미드',
						roleRate: 73,
						winRatio: 36,
					},
					{
						name: '탑',
						roleRate: 20,
						winRatio: 33,
					},
				],
			};
		case 'normal':
			return {
				win: 10,
				lose: 10,
				kda: {
					kill: 5.6,
					death: 4.5,
					assist: 4.5,
					ckRate: 36,
				},
				mostChampions: [
					{
						name: 'Akali',
						win: 2,
						lose: 2,
						kda: 3.69,
					},
					{
						name: 'Jax',
						win: 1,
						lose: 3,
						kda: 1.3,
					},
					{
						name: 'Viktor',
						win: 1,
						lose: 2,
						kda: 1.16,
					},
				],
				positionStats: [],
			};
		case 'event':
			return {
				win: 0,
				lose: 2,
				kda: {
					kill: 4.5,
					death: 6.5,
					assist: 7.0,
					ckRate: 47,
				},
				mostChampions: [
					{
						name: 'Morgana',
						win: 0,
						lose: 1,
						kda: 2,
					},
					{
						name: 'Maokai',
						win: 0,
						lose: 1,
						kda: 1.67,
					},
				],
				positionStats: [],
			};
		default:
			return {
				win: 0,
				lose: 0,
				kda: {
					kill: 0,
					death: 0,
					assist: 0,
					ckRate: 0,
				},
				mostChampions: [],
				positionStats: [],
			};
	}
};
