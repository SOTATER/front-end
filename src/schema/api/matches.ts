export interface Match {
	metadata?: Metadata;
	info?: Info;
}

export interface Metadata {
	dataVersion: string;
	matchId: string;
	participants: string[]; //	A list of participant PUUIDs
}

export interface Info {
	gameCreation: number; // Unix timestamp for when the game is created on the game server (i.e., the loading screen)
	gameDuration: number; // Prior to patch 11.20, this field returns the game length in milliseconds calculated from gameEndTimestamp - gameStartTimestamp. Post patch 11.20, this field returns the max timePlayed of any participant in the game in seconds, which makes the behavior of this field consistent with that of match-v4. The best way to handling the change in this field is to treat the value as milliseconds if the gameEndTimestamp field isn't in the response and to treat the value as seconds if gameEndTimestamp is in the response
	gameEndTimestamp?: number; // Unix timestamp for when match ends on the game server. This timestamp can occasionally be significantly longer than when the match "ends". The most reliable way of determining the timestamp for the end of the match would be to add the max time played of any participant to the gameStartTimestamp. This field was added to match-v5 in patch 11.20 on Oct 5th, 2021
	gameId: number;
	gameMode: string; // Refer to the Game Constants documentation
	gameName: string;
	gameStartTimestamp: number; // Unix timestamp for when match starts on the game server.
	gameType: string;
	gameVersion: string; // The first two parts can be used to determine the patch a game was played on
	mapId: number; // Refer to the Game Constants documentation
	participants: Participant[];
	platformId: string; // Platform where the match was played
	queueId: number; // Refer to the Game Constants documentation
	teams: Team[];
	tournamentCode: string;
}

export interface Participant {
	assists?: number;
	baronKills?: number;
	bountyLevel?: number;
	champExperience?: number;
	champLevel?: number;
	championId?: number;
	championName?: string;
	championTransform?: number;
	consumablesPurchased?: number;
	damageDealtToBuildings?: number;
	damageDealtToObjectives?: number;
	damageDealtToTurrets?: number;
	damageSelfMitigated?: number;
	deaths?: number;
	detectorWardsPlaced?: number;
	doubleKills?: number;
	dragonKills?: number;
	firstBloodAssist?: boolean;
	firstBloodKill?: boolean;
	firstTowerAssist?: boolean;
	firstTowerKill?: boolean;
	gameEndedInEarlySurrender?: boolean;
	gameEndedInSurrender?: boolean;
	goldEarned?: number;
	goldSpent?: number;
	individualPosition?: string;
	inhibitorKills?: number;
	inhibitorTakedowns?: number;
	inhibitorsLost?: number;
	item0?: number;
	item1?: number;
	item2?: number;
	item3?: number;
	item4?: number;
	item5?: number;
	item6?: number;
	itemsPurchased?: number;
	killingSprees?: number;
	kills?: number;
	lane?: string;
	largestCriticalStrike?: number;
	largestKillingSpree?: number;
	largestMultiKill?: number;
	longestTimeSpentLiving?: number;
	magicDamageDealt?: number;
	magicDamageDealtToChampions?: number;
	magicDamageTaken?: number;
	neutralMinionsKilled?: number;
	nexusKills?: number;
	nexusTakedowns?: number;
	nexusLost?: number;
	objectivesStolen?: number;
	objectivesStolenAssists?: number;
	participantId?: number;
	pentaKills?: number;
	perks?: Perks;
	physicalDamageDealt?: number;
	physicalDamageDealtToChampions?: number;
	physicalDamageTaken?: number;
	profileIcon?: number;
	puuid?: string;
	quadraKills?: number;
	riotIdName?: string;
	riotIdTagline?: string;
	role?: string;
	sightWardsBoughtInGame?: number;
	spell1Id?: string; // ?????? ??????
	spell2Id?: string; // ?????? ??????
	spell1Casts?: number;
	spell2Casts?: number;
	spell3Casts?: number;
	spell4Casts?: number;
	summoner1Casts?: number;
	summoner1Id?: number;
	summoner2Casts?: number;
	summoner2Id?: number;
	summonerId?: string;
	summonerLevel?: number;
	summonerName?: string;
	teamEarlySurrendered?: boolean;
	teamId?: number; // 100: ?????????, 200: ?????????
	teamPosition?: string;
	timeCCingOthers?: number;
	timePlayed?: number;
	totalDamageDealt?: number;
	totalDamageDealtToChampions?: number;
	totalDamageShieldedOnTeammates?: number;
	totalDamageTaken?: number;
	totalHeal?: number;
	totalHealsOnTeammates?: number;
	totalMinionsKilled?: number;
	totalTimeCCDealt?: number;
	totalTimeSpentDead?: number;
	totalUnitsHealed?: number;
	tripleKills?: number;
	trueDamageDealt?: number;
	trueDamageDealtToChampions?: number;
	trueDamageTaken?: number;
	turretKills?: number;
	turretTakedowns?: number;
	turretsLost?: number;
	unrealKills?: number;
	visionScore?: number;
	visionWardsBoughtInGame?: number;
	wardsKilled?: number;
	wardsPlaced?: number;
	win?: boolean; // ?????????????????
}

export interface Perks {
	statPerks: PerkStats;
	styles: PerkStyleDto[];
}

export interface PerkStats {
	defense: number;
	flex: number;
	offense: number;
}
export interface PerkStyleDto {
	description: string;
	selections: PerkStyleSelection[];
	style: number;
}

export interface PerkStyleSelection {
	perk: number;
	var1: number;
	var2: number;
	var3: number;
}

export interface Team {
	bans?: Ban[];
	objectives?: Objectives;
	teamId?: number;
	win?: boolean;
}

export interface Ban {
	championId: number;
	pickTurn: number;
}

export interface Objectives {
	baron?: Objective;
	champion?: Objective;
	dragon?: Objective;
	inhibitor?: Objective;
	riftHerald?: Objective;
	tower?: Objective;
}

export interface Objective {
	first: boolean;
	kills: number;
}

/* Timelines */

export interface MatchTimeline {
	metadata: {
		/* Match data version. */
		dataVersion: string;
		/* Match id. */
		matchId: string;
		/* A list of encrypted participant PUUIDs. */
		participants: string[];
	};
	info: {
		frames: Frame[];
		frameInterval: number;
	};
}

export interface Frame {
	participantFrames: {
		[key: string]: ParticipantFrame; // the keys are just the numbers 1-10
	};
	events: Event[];
	timestamp: number;
}

export interface ParticipantFrame {
	championStats: ChampionStats;
	currentGold: number;
	damageStats: DamageStats;
	goldPerSecond: number;
	jungleMinionsKilled: number;
	level: number;
	minionsKilled: number;
	participantId: number;
	position: Position;
	timeEnemySpentControlled: number;
	totalGold: number;
	xp: number;
}

export interface ChampionStats {
	abilityHaste?: number;
	abilityPower?: number;
	armor?: number;
	armorPen?: number;
	armorPenPercent?: number;
	attackDamage?: number;
	attackSpeed?: number;
	bonusArmorPenPercent?: number;
	bonusMagicPenPercent?: number;
	ccReduction?: number;
	cooldownReduction?: number;
	health?: number;
	healthMax?: number;
	healthRegen?: number;
	lifesteal?: number;
	magicPen?: number;
	magicPenPercent?: number;
	magicResist?: number;
	movementSpeed?: number;
	omnivamp?: number;
	physicalVamp?: number;
	power?: number;
	powerMax?: number;
	powerRegen?: number;
	spellVamp?: number;
}

export interface DamageStats {
	magicDamageDone: number;
	magicDamageDoneToChampions: number;
	magicDamageTaken: number;
	physicalDamageDone: number;
	physicalDamageDoneToChampions: number;
	physicalDamageTaken: number;
	totalDamageDone: number;
	totalDamageDoneToChampions: number;
	totalDamageTaken: number;
	trueDamageDone: number;
	trueDamageDoneToChampions: number;
	trueDamageTaken: number;
}

export interface Position {
	x: number;
	y: number;
}

export interface Event {
	realTimestamp?: number;
	timestamp: number;
	type: EventType;
	itemId?: number;
	participantId?: number;
	levelUpType?: string;
	skillSlot?: number;
	creatorId?: number;
	wardType?: string;
	level?: number;
	bounty?: number;
	killStreakLength?: number;
	killerId?: number;
	position?: Position;
	victimDamageDealt?: VictimDamageDealt[];
	victimDamageReceived?: VictimDamageReceived[];
	victimId?: number;
	killType?: string;
	afterId?: number;
	beforeId?: number;
	goldGain?: number;
	assistingParticipantIds?: number[];
	laneType?: string;
	teamId?: number;
	killerTeamId?: number;
	monsterSubType?: string;
	monsterType?: string;
	buildingType?: string;
	towerType?: string;
	transformType?: string;
	multiKillLength?: number;
	gameId?: number;
	winningTeam?: number;
}

export type EventType =
	| 'CHAMPION_KILL'
	| 'CHAMPION_SPECIAL_KILL'
	| 'WARD_PLACED'
	| 'WARD_KILL'
	| 'BUILDING_KILL'
	| 'ELITE_MONSTER_KILL'
	| 'ITEM_PURCHASED'
	| 'ITEM_SOLD'
	| 'ITEM_DESTROYED'
	| 'ITEM_SOLD'
	| 'ITEM_UNDO'
	| 'TURRET_PLATE_DESTROYED'
	| 'SKILL_LEVEL_UP'
	| 'LEVEL_UP'
	| 'ASCENDED_EVENT'
	| 'CAPTURE_POINT'
	| 'PORO_KING_SUMMON'
	| 'PAUSE_END'
	| 'GAME_END';

export interface VictimDamageDealt {
	basic: boolean;
	magicDamage: number;
	name: string;
	participantId: number;
	physicalDamage: number;
	spellName: string;
	spellSlot: number;
	trueDamage: number;
	type: string;
}

export interface VictimDamageReceived {
	basic: boolean;
	magicDamage: number;
	name: string;
	participantId: number;
	physicalDamage: number;
	spellName: string;
	spellSlot: number;
	trueDamage: number;
	type: string;
}
