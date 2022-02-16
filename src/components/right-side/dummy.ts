/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import type { Match } from '../../schema/api/matches';
import type { GameAverageStats } from './GameAverageStatsBox/GameAverageStats';
import type { GameType } from './types';

/* 임시 사용. API 연동 후 제거 예정 */

export const getGameAverageStatsDummyData = (type: GameType): GameAverageStats => {
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

export const getMatches = (): Match => {
	return {
		metadata: {
			dataVersion: '2',
			matchId: 'NA1_0000000000',
			participants: ['puuid'],
		},
		info: {
			gameCreation: 0,
			gameDuration: 1164862,
			gameId: 0,
			gameMode: 'CLASSIC',
			gameName: 'teambuilder-match-0000000000',
			gameStartTimestamp: 0,
			gameType: 'MATCHED_GAME',
			gameVersion: '11.3.000.0000',
			mapId: 11,
			participants: [
				{
					assists: 0,
					baronKills: 0,
					bountyLevel: 0,
					champExperience: 11131,
					champLevel: 13,
					championId: 37225015,
					championName: 'Viego',
					championTransform: 0,
					consumablesPurchased: 1,
					damageDealtToBuildings: 7919,
					damageDealtToObjectives: 10589,
					damageDealtToTurrets: 7919,
					damageSelfMitigated: 8613,
					deaths: 2,
					detectorWardsPlaced: 0,
					doubleKills: 1,
					dragonKills: 0,
					firstBloodAssist: false,
					firstBloodKill: false,
					firstTowerAssist: false,
					firstTowerKill: false,
					gameEndedInEarlySurrender: false,
					gameEndedInSurrender: true,
					goldEarned: 10219,
					goldSpent: 7850,
					individualPosition: 'TOP',
					inhibitorKills: 0,
					inhibitorsLost: 0,
					item0: 1055,
					item1: 6693,
					item2: 0,
					item3: 3067,
					item4: 3153,
					item5: 0,
					item6: 3340,
					itemsPurchased: 14,
					killingSprees: 2,
					kills: 7,
					lane: 'NONE',
					largestCriticalStrike: 331,
					largestKillingSpree: 5,
					largestMultiKill: 3,
					longestTimeSpentLiving: 839,
					magicDamageDealt: 6078,
					magicDamageDealtToChampions: 1512,
					magicDamageTaken: 599,
					neutralMinionsKilled: 8,
					nexusKills: 0,
					nexusLost: 0,
					objectivesStolen: 0,
					objectivesStolenAssists: 0,
					participantId: 1,
					pentaKills: 0,
					perks: {
						statPerks: {
							defense: 5001,
							flex: 5008,
							offense: 5008,
						},
						styles: [
							{
								description: 'primaryStyle',
								selections: [
									{
										perk: 8010,
										var1: 527,
										var2: 0,
										var3: 0,
									},
									{
										perk: 9111,
										var1: 636,
										var2: 140,
										var3: 0,
									},
									{
										perk: 9103,
										var1: 0,
										var2: 0,
										var3: 0,
									},
									{
										perk: 8014,
										var1: 381,
										var2: 0,
										var3: 0,
									},
								],
								style: 8000,
							},
							{
								description: 'subStyle',
								selections: [
									{
										perk: 8473,
										var1: 438,
										var2: 0,
										var3: 0,
									},
									{
										perk: 8453,
										var1: 843,
										var2: 0,
										var3: 0,
									},
								],
								style: 8400,
							},
						],
					},
					physicalDamageDealt: 94147,
					physicalDamageDealtToChampions: 11194,
					physicalDamageTaken: 14376,
					profileIcon: 4799,
					puuid: 'puuid',
					quadraKills: 0,
					riotIdName: '',
					riotIdTagline: '',
					role: 'DUO',
					sightWardsBoughtInGame: 0,
					spell1Casts: 122,
					spell1Id: '7',
					spell2Casts: 59,
					spell2Id: '4',
					spell3Casts: 21,
					spell4Casts: 6,
					summoner1Casts: 2,
					summoner2Casts: 2,
					summonerId: 'summonerId',
					summonerLevel: 31,
					summonerName: 'Summoner Name',
					teamEarlySurrendered: false,
					teamId: 100,
					teamPosition: 'TOP',
					timeCCingOthers: 6,
					timePlayed: 1164,
					totalDamageDealt: 100465,
					totalDamageDealtToChampions: 12946,
					totalDamageShieldedOnTeammates: 0,
					totalDamageTaken: 14999,
					totalHeal: 6053,
					totalHealsOnTeammates: 0,
					totalMinionsKilled: 152,
					totalTimeCCDealt: 35,
					totalTimeSpentDead: 53,
					totalUnitsHealed: 1,
					tripleKills: 1,
					trueDamageDealt: 240,
					trueDamageDealtToChampions: 240,
					trueDamageTaken: 24,
					turretKills: 3,
					turretsLost: 0,
					unrealKills: 0,
					visionScore: 3,
					visionWardsBoughtInGame: 1,
					wardsKilled: 0,
					wardsPlaced: 3,
					win: true,
				},
				{
					assists: 2,
					baronKills: 0,
					bountyLevel: 2,
					champExperience: 11007,
					champLevel: 13,
					championId: 37290552,
					championName: 'Heimerdinger',
					championTransform: 0,
					consumablesPurchased: 7,
					damageDealtToBuildings: 4149,
					damageDealtToObjectives: 9012,
					damageDealtToTurrets: 4149,
					damageSelfMitigated: 3214,
					deaths: 2,
					detectorWardsPlaced: 2,
					doubleKills: 0,
					dragonKills: 1,
					firstBloodAssist: false,
					firstBloodKill: false,
					firstTowerAssist: false,
					firstTowerKill: true,
					gameEndedInEarlySurrender: false,
					gameEndedInSurrender: true,
					goldEarned: 8945,
					goldSpent: 8675,
					individualPosition: 'MIDDLE',
					inhibitorKills: 0,
					inhibitorsLost: 0,
					item0: 3020,
					item1: 6653,
					item2: 3116,
					item3: 1082,
					item4: 1056,
					item5: 2055,
					item6: 3340,
					itemsPurchased: 19,
					killingSprees: 2,
					kills: 5,
					lane: 'NONE',
					largestCriticalStrike: 0,
					largestKillingSpree: 3,
					largestMultiKill: 1,
					longestTimeSpentLiving: 415,
					magicDamageDealt: 79340,
					magicDamageDealtToChampions: 8087,
					magicDamageTaken: 654,
					neutralMinionsKilled: 24,
					nexusKills: 0,
					nexusLost: 0,
					objectivesStolen: 0,
					objectivesStolenAssists: 0,
					participantId: 2,
					pentaKills: 0,
					perks: {
						statPerks: {
							defense: 5002,
							flex: 5008,
							offense: 5008,
						},
						styles: [
							{
								description: 'primaryStyle',
								selections: [
									{
										perk: 8229,
										var1: 676,
										var2: 0,
										var3: 0,
									},
									{
										perk: 8226,
										var1: 250,
										var2: 279,
										var3: 0,
									},
									{
										perk: 8233,
										var1: 7,
										var2: 30,
										var3: 0,
									},
									{
										perk: 8237,
										var1: 356,
										var2: 0,
										var3: 0,
									},
								],
								style: 8200,
							},
							{
								description: 'subStyle',
								selections: [
									{
										perk: 8139,
										var1: 549,
										var2: 0,
										var3: 0,
									},
									{
										perk: 8135,
										var1: 949,
										var2: 2,
										var3: 0,
									},
								],
								style: 8100,
							},
						],
					},
					physicalDamageDealt: 12684,
					physicalDamageDealtToChampions: 1008,
					physicalDamageTaken: 7133,
					profileIcon: 1386,
					puuid: 'puuid',
					quadraKills: 0,
					riotIdName: '',
					riotIdTagline: '',
					role: 'SUPPORT',
					sightWardsBoughtInGame: 0,
					spell1Casts: 68,
					spell1Id: '7',
					spell2Casts: 58,
					spell2Id: '4',
					spell3Casts: 37,
					spell4Casts: 5,
					summoner1Casts: 2,
					summoner2Casts: 2,
					summonerId: '2177009307',
					summonerLevel: 52,
					summonerName: 'Summoner Name',
					teamEarlySurrendered: false,
					teamId: 100,
					teamPosition: 'MIDDLE',
					timeCCingOthers: 7,
					timePlayed: 1164,
					totalDamageDealt: 93665,
					totalDamageDealtToChampions: 9096,
					totalDamageShieldedOnTeammates: 0,
					totalDamageTaken: 8273,
					totalHeal: 1677,
					totalHealsOnTeammates: 0,
					totalMinionsKilled: 125,
					totalTimeCCDealt: 173,
					totalTimeSpentDead: 49,
					totalUnitsHealed: 1,
					tripleKills: 0,
					trueDamageDealt: 1640,
					trueDamageDealtToChampions: 0,
					trueDamageTaken: 486,
					turretKills: 1,
					turretsLost: 0,
					unrealKills: 0,
					visionScore: 17,
					visionWardsBoughtInGame: 3,
					wardsKilled: 0,
					wardsPlaced: 7,
					win: true,
				},
				{
					assists: 5,
					baronKills: 0,
					bountyLevel: 1,
					champExperience: 8238,
					champLevel: 11,
					championId: 37356089,
					championName: 'Kayn',
					championTransform: 1,
					consumablesPurchased: 1,
					damageDealtToBuildings: 768,
					damageDealtToObjectives: 14205,
					damageDealtToTurrets: 768,
					damageSelfMitigated: 10594,
					deaths: 2,
					detectorWardsPlaced: 1,
					doubleKills: 0,
					dragonKills: 0,
					firstBloodAssist: false,
					firstBloodKill: false,
					firstTowerAssist: false,
					firstTowerKill: true,
					gameEndedInEarlySurrender: false,
					gameEndedInSurrender: true,
					goldEarned: 7412,
					goldSpent: 5325,
					individualPosition: 'JUNGLE',
					inhibitorKills: 0,
					inhibitorsLost: 0,
					item0: 3047,
					item1: 2031,
					item2: 6630,
					item3: 1036,
					item4: 0,
					item5: 0,
					item6: 3340,
					itemsPurchased: 11,
					killingSprees: 1,
					kills: 3,
					lane: 'NONE',
					largestCriticalStrike: 0,
					largestKillingSpree: 2,
					largestMultiKill: 1,
					longestTimeSpentLiving: 561,
					magicDamageDealt: 4979,
					magicDamageDealtToChampions: 0,
					magicDamageTaken: 3026,
					neutralMinionsKilled: 80,
					nexusKills: 0,
					nexusLost: 0,
					objectivesStolen: 0,
					objectivesStolenAssists: 0,
					participantId: 3,
					pentaKills: 0,
					perks: {
						statPerks: {
							defense: 5002,
							flex: 5008,
							offense: 5008,
						},
						styles: [
							{
								description: 'primaryStyle',
								selections: [
									{
										perk: 8010,
										var1: 64,
										var2: 0,
										var3: 0,
									},
									{
										perk: 9111,
										var1: 241,
										var2: 160,
										var3: 0,
									},
									{
										perk: 9105,
										var1: 17,
										var2: 20,
										var3: 0,
									},
									{
										perk: 8299,
										var1: 120,
										var2: 0,
										var3: 0,
									},
								],
								style: 8000,
							},
							{
								description: 'subStyle',
								selections: [
									{
										perk: 8143,
										var1: 189,
										var2: 0,
										var3: 0,
									},
									{
										perk: 8135,
										var1: 1463,
										var2: 4,
										var3: 0,
									},
								],
								style: 8100,
							},
						],
					},
					physicalDamageDealt: 69735,
					physicalDamageDealtToChampions: 5686,
					physicalDamageTaken: 13824,
					profileIcon: 558,
					puuid: 'puuid',
					quadraKills: 0,
					riotIdName: '',
					riotIdTagline: '',
					role: 'SUPPORT',
					sightWardsBoughtInGame: 0,
					spell1Casts: 71,
					spell1Id: '7',
					spell2Casts: 35,
					spell2Id: '13',
					spell3Casts: 21,
					spell4Casts: 5,
					summoner1Casts: 2,
					summoner2Casts: 10,
					summonerId: '2193610325',
					summonerLevel: 73,
					summonerName: 'Summoner Name',
					teamEarlySurrendered: false,
					teamId: 100,
					teamPosition: 'JUNGLE',
					timeCCingOthers: 6,
					timePlayed: 1164,
					totalDamageDealt: 84836,
					totalDamageDealtToChampions: 6031,
					totalDamageShieldedOnTeammates: 0,
					totalDamageTaken: 17163,
					totalHeal: 10217,
					totalHealsOnTeammates: 0,
					totalMinionsKilled: 13,
					totalTimeCCDealt: 202,
					totalTimeSpentDead: 37,
					totalUnitsHealed: 1,
					tripleKills: 0,
					trueDamageDealt: 10121,
					trueDamageDealtToChampions: 345,
					trueDamageTaken: 312,
					turretKills: 2,
					turretsLost: 0,
					unrealKills: 0,
					visionScore: 18,
					visionWardsBoughtInGame: 1,
					wardsKilled: 0,
					wardsPlaced: 7,
					win: true,
				},
				{
					assists: 3,
					baronKills: 0,
					bountyLevel: 2,
					champExperience: 8885,
					champLevel: 12,
					championId: 37421626,
					championName: 'Xayah',
					championTransform: 0,
					consumablesPurchased: 9,
					damageDealtToBuildings: 3471,
					damageDealtToObjectives: 3471,
					damageDealtToTurrets: 3471,
					damageSelfMitigated: 5688,
					deaths: 6,
					detectorWardsPlaced: 0,
					doubleKills: 1,
					dragonKills: 0,
					firstBloodAssist: true,
					firstBloodKill: false,
					firstTowerAssist: false,
					firstTowerKill: false,
					gameEndedInEarlySurrender: false,
					gameEndedInSurrender: true,
					goldEarned: 9049,
					goldSpent: 6700,
					individualPosition: 'BOTTOM',
					inhibitorKills: 1,
					inhibitorsLost: 0,
					item0: 1055,
					item1: 6672,
					item2: 3006,
					item3: 1018,
					item4: 1036,
					item5: 1036,
					item6: 3340,
					itemsPurchased: 22,
					killingSprees: 2,
					kills: 8,
					lane: 'NONE',
					largestCriticalStrike: 345,
					largestKillingSpree: 3,
					largestMultiKill: 2,
					longestTimeSpentLiving: 274,
					magicDamageDealt: 0,
					magicDamageDealtToChampions: 0,
					magicDamageTaken: 5051,
					neutralMinionsKilled: 0,
					nexusKills: 0,
					nexusLost: 0,
					objectivesStolen: 0,
					objectivesStolenAssists: 0,
					participantId: 4,
					pentaKills: 0,
					perks: {
						statPerks: {
							defense: 5002,
							flex: 5008,
							offense: 5005,
						},
						styles: [
							{
								description: 'primaryStyle',
								selections: [
									{
										perk: 8008,
										var1: 1,
										var2: 40,
										var3: 0,
									},
									{
										perk: 8009,
										var1: 1283,
										var2: 0,
										var3: 0,
									},
									{
										perk: 9103,
										var1: 19,
										var2: 0,
										var3: 0,
									},
									{
										perk: 8014,
										var1: 349,
										var2: 0,
										var3: 0,
									},
								],
								style: 8000,
							},
							{
								description: 'subStyle',
								selections: [
									{
										perk: 8275,
										var1: 7,
										var2: 0,
										var3: 0,
									},
									{
										perk: 8236,
										var1: 4,
										var2: 0,
										var3: 0,
									},
								],
								style: 8200,
							},
						],
					},
					physicalDamageDealt: 87437,
					physicalDamageDealtToChampions: 12105,
					physicalDamageTaken: 9722,
					profileIcon: 29,
					puuid: 'puuid',
					quadraKills: 0,
					riotIdName: '',
					riotIdTagline: '',
					role: 'SUPPORT',
					sightWardsBoughtInGame: 0,
					spell1Casts: 45,
					spell1Id: '7',
					spell2Casts: 25,
					spell2Id: '13',
					spell3Casts: 34,
					spell4Casts: 4,
					summoner1Casts: 3,
					summoner2Casts: 4,
					summonerId: '2642580753950048',
					summonerLevel: 30,
					summonerName: 'Summoner Name',
					teamEarlySurrendered: false,
					teamId: 100,
					teamPosition: 'BOTTOM',
					timeCCingOthers: 13,
					timePlayed: 1164,
					totalDamageDealt: 90262,
					totalDamageDealtToChampions: 12527,
					totalDamageShieldedOnTeammates: 0,
					totalDamageTaken: 14921,
					totalHeal: 1844,
					totalHealsOnTeammates: 120,
					totalMinionsKilled: 131,
					totalTimeCCDealt: 16,
					totalTimeSpentDead: 115,
					totalUnitsHealed: 2,
					tripleKills: 0,
					trueDamageDealt: 2825,
					trueDamageDealtToChampions: 422,
					trueDamageTaken: 148,
					turretKills: 1,
					turretsLost: 0,
					unrealKills: 0,
					visionScore: 5,
					visionWardsBoughtInGame: 0,
					wardsKilled: 0,
					wardsPlaced: 3,
					win: true,
				},
				{
					assists: 4,
					baronKills: 0,
					bountyLevel: 2,
					champExperience: 5601,
					champLevel: 9,
					championId: 37487163,
					championName: 'Nidalee',
					championTransform: 0,
					consumablesPurchased: 4,
					damageDealtToBuildings: 1525,
					damageDealtToObjectives: 1525,
					damageDealtToTurrets: 1525,
					damageSelfMitigated: 1824,
					deaths: 2,
					detectorWardsPlaced: 2,
					doubleKills: 0,
					dragonKills: 0,
					firstBloodAssist: false,
					firstBloodKill: true,
					firstTowerAssist: false,
					firstTowerKill: false,
					gameEndedInEarlySurrender: false,
					gameEndedInSurrender: true,
					goldEarned: 6131,
					goldSpent: 5785,
					individualPosition: 'UTILITY',
					inhibitorKills: 0,
					inhibitorsLost: 0,
					item0: 3853,
					item1: 1058,
					item2: 1058,
					item3: 3108,
					item4: 3802,
					item5: 0,
					item6: 3364,
					itemsPurchased: 14,
					killingSprees: 1,
					kills: 3,
					lane: 'NONE',
					largestCriticalStrike: 0,
					largestKillingSpree: 2,
					largestMultiKill: 1,
					longestTimeSpentLiving: 301,
					magicDamageDealt: 14285,
					magicDamageDealtToChampions: 6278,
					magicDamageTaken: 1728,
					neutralMinionsKilled: 0,
					nexusKills: 0,
					nexusLost: 0,
					objectivesStolen: 0,
					objectivesStolenAssists: 0,
					participantId: 5,
					pentaKills: 0,
					perks: {
						statPerks: {
							defense: 5002,
							flex: 5008,
							offense: 5008,
						},
						styles: [
							{
								description: 'primaryStyle',
								selections: [
									{
										perk: 8128,
										var1: 297,
										var2: 6,
										var3: 0,
									},
									{
										perk: 8139,
										var1: 496,
										var2: 0,
										var3: 0,
									},
									{
										perk: 8120,
										var1: 4,
										var2: 30,
										var3: 8,
									},
									{
										perk: 8105,
										var1: 11,
										var2: 4,
										var3: 0,
									},
								],
								style: 8100,
							},
							{
								description: 'subStyle',
								selections: [
									{
										perk: 8234,
										var1: 4490,
										var2: 0,
										var3: 0,
									},
									{
										perk: 8236,
										var1: 8,
										var2: 0,
										var3: 0,
									},
								],
								style: 8200,
							},
						],
					},
					physicalDamageDealt: 1639,
					physicalDamageDealtToChampions: 500,
					physicalDamageTaken: 3390,
					profileIcon: 543,
					puuid: 'puuid',
					quadraKills: 0,
					riotIdName: '',
					riotIdTagline: '',
					role: 'SUPPORT',
					sightWardsBoughtInGame: 0,
					spell1Casts: 69,
					spell1Id: '7',
					spell2Casts: 42,
					spell2Id: '4',
					spell3Casts: 26,
					spell4Casts: 32,
					summoner1Casts: 3,
					summoner2Casts: 3,
					summonerId: '2561596662171424',
					summonerLevel: 47,
					summonerName: 'Summoner Name',
					teamEarlySurrendered: false,
					teamId: 100,
					teamPosition: 'UTILITY',
					timeCCingOthers: 0,
					timePlayed: 1164,
					totalDamageDealt: 16206,
					totalDamageDealtToChampions: 7060,
					totalDamageShieldedOnTeammates: 0,
					totalDamageTaken: 5119,
					totalHeal: 3235,
					totalHealsOnTeammates: 1935,
					totalMinionsKilled: 4,
					totalTimeCCDealt: 0,
					totalTimeSpentDead: 24,
					totalUnitsHealed: 2,
					tripleKills: 0,
					trueDamageDealt: 282,
					trueDamageDealtToChampions: 282,
					trueDamageTaken: 0,
					turretKills: 1,
					turretsLost: 0,
					unrealKills: 0,
					visionScore: 24,
					visionWardsBoughtInGame: 2,
					wardsKilled: 0,
					wardsPlaced: 11,
					win: true,
				},
				{
					assists: 0,
					baronKills: 0,
					bountyLevel: 0,
					champExperience: 4839,
					champLevel: 8,
					championId: 37552700,
					championName: 'Darius',
					championTransform: 0,
					consumablesPurchased: 2,
					damageDealtToBuildings: 289,
					damageDealtToObjectives: 289,
					damageDealtToTurrets: 289,
					damageSelfMitigated: 3249,
					deaths: 2,
					detectorWardsPlaced: 0,
					doubleKills: 0,
					dragonKills: 0,
					firstBloodAssist: false,
					firstBloodKill: false,
					firstTowerAssist: false,
					firstTowerKill: false,
					gameEndedInEarlySurrender: false,
					gameEndedInSurrender: true,
					goldEarned: 4293,
					goldSpent: 3150,
					individualPosition: 'TOP',
					inhibitorKills: 0,
					inhibitorsLost: 2,
					item0: 1054,
					item1: 3044,
					item2: 1001,
					item3: 6029,
					item4: 0,
					item5: 0,
					item6: 3340,
					itemsPurchased: 8,
					killingSprees: 0,
					kills: 1,
					lane: 'NONE',
					largestCriticalStrike: 0,
					largestKillingSpree: 0,
					largestMultiKill: 1,
					longestTimeSpentLiving: 398,
					magicDamageDealt: 0,
					magicDamageDealtToChampions: 0,
					magicDamageTaken: 279,
					neutralMinionsKilled: 0,
					nexusKills: 0,
					nexusLost: 0,
					objectivesStolen: 0,
					objectivesStolenAssists: 0,
					participantId: 6,
					pentaKills: 0,
					perks: {
						statPerks: {
							defense: 5002,
							flex: 5008,
							offense: 5005,
						},
						styles: [
							{
								description: 'primaryStyle',
								selections: [
									{
										perk: 8010,
										var1: 36,
										var2: 0,
										var3: 0,
									},
									{
										perk: 9111,
										var1: 41,
										var2: 20,
										var3: 0,
									},
									{
										perk: 9104,
										var1: 0,
										var2: 0,
										var3: 0,
									},
									{
										perk: 8014,
										var1: 42,
										var2: 0,
										var3: 0,
									},
								],
								style: 8000,
							},
							{
								description: 'subStyle',
								selections: [
									{
										perk: 8242,
										var1: 36,
										var2: 0,
										var3: 0,
									},
									{
										perk: 8429,
										var1: 38,
										var2: 13,
										var3: 12,
									},
								],
								style: 8400,
							},
						],
					},
					physicalDamageDealt: 24952,
					physicalDamageDealtToChampions: 3283,
					physicalDamageTaken: 5313,
					profileIcon: 4679,
					puuid: 'puuid',
					quadraKills: 0,
					riotIdName: '',
					riotIdTagline: '',
					role: 'DUO',
					sightWardsBoughtInGame: 0,
					spell1Casts: 29,
					spell1Id: '7',
					spell2Casts: 20,
					spell2Id: '13',
					spell3Casts: 4,
					spell4Casts: 0,
					summoner1Casts: 1,
					summoner2Casts: 1,
					summonerId: '2189459548',
					summonerLevel: 68,
					summonerName: 'Summoner Name',
					teamEarlySurrendered: false,
					teamId: 200,
					teamPosition: 'TOP',
					timeCCingOthers: 3,
					timePlayed: 1164,
					totalDamageDealt: 24952,
					totalDamageDealtToChampions: 3283,
					totalDamageShieldedOnTeammates: 0,
					totalDamageTaken: 5646,
					totalHeal: 626,
					totalHealsOnTeammates: 0,
					totalMinionsKilled: 68,
					totalTimeCCDealt: 16,
					totalTimeSpentDead: 37,
					totalUnitsHealed: 1,
					tripleKills: 0,
					trueDamageDealt: 0,
					trueDamageDealtToChampions: 0,
					trueDamageTaken: 54,
					turretKills: 0,
					turretsLost: 8,
					unrealKills: 0,
					visionScore: 4,
					visionWardsBoughtInGame: 0,
					wardsKilled: 0,
					wardsPlaced: 3,
					win: false,
				},
				{
					assists: 2,
					baronKills: 0,
					bountyLevel: 0,
					champExperience: 5903,
					champLevel: 9,
					championId: 37618237,
					championName: 'LeeSin',
					championTransform: 0,
					consumablesPurchased: 1,
					damageDealtToBuildings: 0,
					damageDealtToObjectives: 4939,
					damageDealtToTurrets: 0,
					damageSelfMitigated: 12305,
					deaths: 5,
					detectorWardsPlaced: 0,
					doubleKills: 0,
					dragonKills: 1,
					firstBloodAssist: false,
					firstBloodKill: false,
					firstTowerAssist: false,
					firstTowerKill: false,
					gameEndedInEarlySurrender: false,
					gameEndedInSurrender: true,
					goldEarned: 5860,
					goldSpent: 4975,
					individualPosition: 'JUNGLE',
					inhibitorKills: 0,
					inhibitorsLost: 2,
					item0: 3071,
					item1: 2031,
					item2: 2055,
					item3: 3047,
					item4: 0,
					item5: 0,
					item6: 3340,
					itemsPurchased: 10,
					killingSprees: 1,
					kills: 4,
					lane: 'NONE',
					largestCriticalStrike: 0,
					largestKillingSpree: 4,
					largestMultiKill: 1,
					longestTimeSpentLiving: 554,
					magicDamageDealt: 9884,
					magicDamageDealtToChampions: 1556,
					magicDamageTaken: 1956,
					neutralMinionsKilled: 52,
					nexusKills: 0,
					nexusLost: 0,
					objectivesStolen: 0,
					objectivesStolenAssists: 0,
					participantId: 7,
					pentaKills: 0,
					perks: {
						statPerks: {
							defense: 5001,
							flex: 5002,
							offense: 5005,
						},
						styles: [
							{
								description: 'primaryStyle',
								selections: [
									{
										perk: 8010,
										var1: 126,
										var2: 0,
										var3: 0,
									},
									{
										perk: 9111,
										var1: 239,
										var2: 120,
										var3: 0,
									},
									{
										perk: 9103,
										var1: 0,
										var2: 0,
										var3: 0,
									},
									{
										perk: 8014,
										var1: 190,
										var2: 0,
										var3: 0,
									},
								],
								style: 8000,
							},
							{
								description: 'subStyle',
								selections: [
									{
										perk: 8143,
										var1: 198,
										var2: 0,
										var3: 0,
									},
									{
										perk: 8106,
										var1: 3,
										var2: 0,
										var3: 0,
									},
								],
								style: 8100,
							},
						],
					},
					physicalDamageDealt: 31716,
					physicalDamageDealtToChampions: 7228,
					physicalDamageTaken: 14035,
					profileIcon: 586,
					puuid: 'puuid',
					quadraKills: 0,
					riotIdName: '',
					riotIdTagline: '',
					role: 'SUPPORT',
					sightWardsBoughtInGame: 0,
					spell1Casts: 100,
					spell1Id: '7',
					spell2Casts: 103,
					spell2Id: '13',
					spell3Casts: 66,
					spell4Casts: 7,
					summoner1Casts: 2,
					summoner2Casts: 8,
					summonerId: '2637674288973664',
					summonerLevel: 33,
					summonerName: 'Summoner Name',
					teamEarlySurrendered: false,
					teamId: 200,
					teamPosition: 'JUNGLE',
					timeCCingOthers: 14,
					timePlayed: 1164,
					totalDamageDealt: 46231,
					totalDamageDealtToChampions: 8998,
					totalDamageShieldedOnTeammates: 176,
					totalDamageTaken: 16424,
					totalHeal: 3803,
					totalHealsOnTeammates: 0,
					totalMinionsKilled: 11,
					totalTimeCCDealt: 252,
					totalTimeSpentDead: 96,
					totalUnitsHealed: 1,
					tripleKills: 0,
					trueDamageDealt: 4630,
					trueDamageDealtToChampions: 214,
					trueDamageTaken: 432,
					turretKills: 0,
					turretsLost: 8,
					unrealKills: 0,
					visionScore: 4,
					visionWardsBoughtInGame: 1,
					wardsKilled: 0,
					wardsPlaced: 4,
					win: false,
				},
				{
					assists: 1,
					baronKills: 0,
					bountyLevel: 0,
					champExperience: 8547,
					champLevel: 11,
					championId: 37683774,
					championName: 'Yasuo',
					championTransform: 0,
					consumablesPurchased: 2,
					damageDealtToBuildings: 618,
					damageDealtToObjectives: 618,
					damageDealtToTurrets: 618,
					damageSelfMitigated: 10554,
					deaths: 7,
					detectorWardsPlaced: 0,
					doubleKills: 0,
					dragonKills: 0,
					firstBloodAssist: false,
					firstBloodKill: false,
					firstTowerAssist: false,
					firstTowerKill: false,
					gameEndedInEarlySurrender: false,
					gameEndedInSurrender: true,
					goldEarned: 6042,
					goldSpent: 5750,
					individualPosition: 'MIDDLE',
					inhibitorKills: 0,
					inhibitorsLost: 2,
					item0: 1054,
					item1: 6673,
					item2: 3006,
					item3: 1018,
					item4: 0,
					item5: 0,
					item6: 3340,
					itemsPurchased: 17,
					killingSprees: 0,
					kills: 2,
					lane: 'NONE',
					largestCriticalStrike: 344,
					largestKillingSpree: 0,
					largestMultiKill: 1,
					longestTimeSpentLiving: 492,
					magicDamageDealt: 4960,
					magicDamageDealtToChampions: 912,
					magicDamageTaken: 7770,
					neutralMinionsKilled: 0,
					nexusKills: 0,
					nexusLost: 0,
					objectivesStolen: 0,
					objectivesStolenAssists: 0,
					participantId: 8,
					pentaKills: 0,
					perks: {
						statPerks: {
							defense: 5002,
							flex: 5008,
							offense: 5005,
						},
						styles: [
							{
								description: 'primaryStyle',
								selections: [
									{
										perk: 8010,
										var1: 72,
										var2: 0,
										var3: 0,
									},
									{
										perk: 9111,
										var1: 271,
										var2: 60,
										var3: 0,
									},
									{
										perk: 9103,
										var1: 0,
										var2: 0,
										var3: 0,
									},
									{
										perk: 8014,
										var1: 138,
										var2: 0,
										var3: 0,
									},
								],
								style: 8000,
							},
							{
								description: 'subStyle',
								selections: [
									{
										perk: 8139,
										var1: 454,
										var2: 0,
										var3: 0,
									},
									{
										perk: 8135,
										var1: 617,
										var2: 2,
										var3: 0,
									},
								],
								style: 8100,
							},
						],
					},
					physicalDamageDealt: 57877,
					physicalDamageDealtToChampions: 5614,
					physicalDamageTaken: 6861,
					profileIcon: 3614,
					puuid: 'puuid',
					quadraKills: 0,
					riotIdName: '',
					riotIdTagline: '',
					role: 'SUPPORT',
					sightWardsBoughtInGame: 0,
					spell1Casts: 133,
					spell1Id: '7',
					spell2Casts: 19,
					spell2Id: '4',
					spell3Casts: 61,
					spell4Casts: 1,
					summoner1Casts: 3,
					summoner2Casts: 4,
					summonerId: '2191168773',
					summonerLevel: 109,
					summonerName: 'Summoner Name',
					teamEarlySurrendered: false,
					teamId: 200,
					teamPosition: 'MIDDLE',
					timeCCingOthers: 8,
					timePlayed: 1164,
					totalDamageDealt: 67114,
					totalDamageDealtToChampions: 7282,
					totalDamageShieldedOnTeammates: 0,
					totalDamageTaken: 14795,
					totalHeal: 1176,
					totalHealsOnTeammates: 0,
					totalMinionsKilled: 99,
					totalTimeCCDealt: 171,
					totalTimeSpentDead: 178,
					totalUnitsHealed: 1,
					tripleKills: 0,
					trueDamageDealt: 4276,
					trueDamageDealtToChampions: 756,
					trueDamageTaken: 163,
					turretKills: 0,
					turretsLost: 8,
					unrealKills: 0,
					visionScore: 3,
					visionWardsBoughtInGame: 0,
					wardsKilled: 0,
					wardsPlaced: 2,
					win: false,
				},
				{
					assists: 4,
					baronKills: 0,
					bountyLevel: 0,
					champExperience: 5543,
					champLevel: 9,
					championId: 37749311,
					championName: 'Kaisa',
					championTransform: 0,
					consumablesPurchased: 10,
					damageDealtToBuildings: 217,
					damageDealtToObjectives: 217,
					damageDealtToTurrets: 217,
					damageSelfMitigated: 5561,
					deaths: 8,
					detectorWardsPlaced: 0,
					doubleKills: 0,
					dragonKills: 0,
					firstBloodAssist: false,
					firstBloodKill: false,
					firstTowerAssist: false,
					firstTowerKill: false,
					gameEndedInEarlySurrender: false,
					gameEndedInSurrender: true,
					goldEarned: 5465,
					goldSpent: 5400,
					individualPosition: 'BOTTOM',
					inhibitorKills: 0,
					inhibitorsLost: 2,
					item0: 1055,
					item1: 6671,
					item2: 2003,
					item3: 3006,
					item4: 0,
					item5: 0,
					item6: 3340,
					itemsPurchased: 22,
					killingSprees: 0,
					kills: 2,
					lane: 'NONE',
					largestCriticalStrike: 256,
					largestKillingSpree: 0,
					largestMultiKill: 1,
					longestTimeSpentLiving: 250,
					magicDamageDealt: 2654,
					magicDamageDealtToChampions: 1474,
					magicDamageTaken: 4666,
					neutralMinionsKilled: 0,
					nexusKills: 0,
					nexusLost: 0,
					objectivesStolen: 0,
					objectivesStolenAssists: 0,
					participantId: 9,
					pentaKills: 0,
					perks: {
						statPerks: {
							defense: 5002,
							flex: 5008,
							offense: 5005,
						},
						styles: [
							{
								description: 'primaryStyle',
								selections: [
									{
										perk: 8010,
										var1: 0,
										var2: 0,
										var3: 0,
									},
									{
										perk: 8009,
										var1: 561,
										var2: 0,
										var3: 0,
									},
									{
										perk: 9103,
										var1: 0,
										var2: 0,
										var3: 0,
									},
									{
										perk: 8014,
										var1: 61,
										var2: 0,
										var3: 0,
									},
								],
								style: 8000,
							},
							{
								description: 'subStyle',
								selections: [
									{
										perk: 8139,
										var1: 506,
										var2: 0,
										var3: 0,
									},
									{
										perk: 8135,
										var1: 431,
										var2: 3,
										var3: 0,
									},
								],
								style: 8100,
							},
						],
					},
					physicalDamageDealt: 26529,
					physicalDamageDealtToChampions: 3732,
					physicalDamageTaken: 8245,
					profileIcon: 20,
					puuid: 'puuid',
					quadraKills: 0,
					riotIdName: '',
					riotIdTagline: '',
					role: 'SUPPORT',
					sightWardsBoughtInGame: 0,
					spell1Casts: 40,
					spell1Id: '7',
					spell2Casts: 17,
					spell2Id: '13',
					spell3Casts: 42,
					spell4Casts: 2,
					summoner1Casts: 3,
					summoner2Casts: 3,
					summonerId: '2634078455154048',
					summonerLevel: 30,
					summonerName: 'Summoner Name',
					teamEarlySurrendered: false,
					teamId: 200,
					teamPosition: 'BOTTOM',
					timeCCingOthers: 0,
					timePlayed: 1164,
					totalDamageDealt: 29184,
					totalDamageDealtToChampions: 5207,
					totalDamageShieldedOnTeammates: 0,
					totalDamageTaken: 13157,
					totalHeal: 1304,
					totalHealsOnTeammates: 90,
					totalMinionsKilled: 57,
					totalTimeCCDealt: 2,
					totalTimeSpentDead: 151,
					totalUnitsHealed: 2,
					tripleKills: 0,
					trueDamageDealt: 0,
					trueDamageDealtToChampions: 0,
					trueDamageTaken: 245,
					turretKills: 0,
					turretsLost: 8,
					unrealKills: 0,
					visionScore: 3,
					visionWardsBoughtInGame: 0,
					wardsKilled: 0,
					wardsPlaced: 2,
					win: false,
				},
				{
					assists: 2,
					baronKills: 0,
					bountyLevel: 0,
					champExperience: 6871,
					champLevel: 10,
					championId: 37814848,
					championName: 'Seraphine',
					championTransform: 0,
					consumablesPurchased: 3,
					damageDealtToBuildings: 108,
					damageDealtToObjectives: 814,
					damageDealtToTurrets: 108,
					damageSelfMitigated: 4211,
					deaths: 4,
					detectorWardsPlaced: 0,
					doubleKills: 0,
					dragonKills: 0,
					firstBloodAssist: false,
					firstBloodKill: false,
					firstTowerAssist: false,
					firstTowerKill: false,
					gameEndedInEarlySurrender: false,
					gameEndedInSurrender: true,
					goldEarned: 6508,
					goldSpent: 4775,
					individualPosition: 'UTILITY',
					inhibitorKills: 0,
					inhibitorsLost: 2,
					item0: 6656,
					item1: 3853,
					item2: 2055,
					item3: 2010,
					item4: 3114,
					item5: 2422,
					item6: 3364,
					itemsPurchased: 12,
					killingSprees: 1,
					kills: 4,
					lane: 'NONE',
					largestCriticalStrike: 0,
					largestKillingSpree: 2,
					largestMultiKill: 1,
					longestTimeSpentLiving: 544,
					magicDamageDealt: 20259,
					magicDamageDealtToChampions: 6111,
					magicDamageTaken: 1836,
					neutralMinionsKilled: 0,
					nexusKills: 0,
					nexusLost: 0,
					objectivesStolen: 0,
					objectivesStolenAssists: 0,
					participantId: 10,
					pentaKills: 0,
					perks: {
						statPerks: {
							defense: 5002,
							flex: 5008,
							offense: 5008,
						},
						styles: [
							{
								description: 'primaryStyle',
								selections: [
									{
										perk: 8229,
										var1: 690,
										var2: 0,
										var3: 0,
									},
									{
										perk: 8226,
										var1: 250,
										var2: 170,
										var3: 0,
									},
									{
										perk: 8210,
										var1: 0,
										var2: 0,
										var3: 0,
									},
									{
										perk: 8237,
										var1: 233,
										var2: 0,
										var3: 0,
									},
								],
								style: 8200,
							},
							{
								description: 'subStyle',
								selections: [
									{
										perk: 8345,
										var1: 3,
										var2: 0,
										var3: 0,
									},
									{
										perk: 8304,
										var1: 9,
										var2: 4,
										var3: 5,
									},
								],
								style: 8300,
							},
						],
					},
					physicalDamageDealt: 5354,
					physicalDamageDealtToChampions: 1436,
					physicalDamageTaken: 5788,
					profileIcon: 23,
					puuid: 'puuid',
					quadraKills: 0,
					riotIdName: '',
					riotIdTagline: '',
					role: 'SUPPORT',
					sightWardsBoughtInGame: 0,
					spell1Casts: 27,
					spell1Id: '13',
					spell2Casts: 14,
					spell2Id: '7',
					spell3Casts: 25,
					spell4Casts: 4,
					summoner1Casts: 2,
					summoner2Casts: 2,
					summonerId: '2176898653',
					summonerLevel: 34,
					summonerName: 'Summoner Name',
					teamEarlySurrendered: false,
					teamId: 200,
					teamPosition: 'UTILITY',
					timeCCingOthers: 14,
					timePlayed: 1164,
					totalDamageDealt: 25613,
					totalDamageDealtToChampions: 7547,
					totalDamageShieldedOnTeammates: 730,
					totalDamageTaken: 8019,
					totalHeal: 317,
					totalHealsOnTeammates: 157,
					totalMinionsKilled: 35,
					totalTimeCCDealt: 105,
					totalTimeSpentDead: 74,
					totalUnitsHealed: 3,
					tripleKills: 0,
					trueDamageDealt: 0,
					trueDamageDealtToChampions: 0,
					trueDamageTaken: 394,
					turretKills: 0,
					turretsLost: 8,
					unrealKills: 0,
					visionScore: 8,
					visionWardsBoughtInGame: 1,
					wardsKilled: 1,
					wardsPlaced: 3,
					win: false,
				},
			],
			platformId: 'NA1',
			queueId: 400,
			teams: [
				{
					bans: [],
					objectives: {
						baron: {
							first: false,
							kills: 0,
						},
						champion: {
							first: true,
							kills: 26,
						},
						dragon: {
							first: false,
							kills: 1,
						},
						inhibitor: {
							first: true,
							kills: 2,
						},
						riftHerald: {
							first: true,
							kills: 1,
						},
						tower: {
							first: true,
							kills: 8,
						},
					},
					teamId: 100,
					win: true,
				},
				{
					bans: [],
					objectives: {
						baron: {
							first: false,
							kills: 0,
						},
						champion: {
							first: false,
							kills: 14,
						},
						dragon: {
							first: true,
							kills: 1,
						},
						inhibitor: {
							first: false,
							kills: 0,
						},
						riftHerald: {
							first: false,
							kills: 0,
						},
						tower: {
							first: false,
							kills: 0,
						},
					},
					teamId: 200,
					win: false,
				},
			],
			tournamentCode: '',
		},
	};
};
