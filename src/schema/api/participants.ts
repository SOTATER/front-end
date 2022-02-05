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
	spell1Id?: string; // 임의 추가
	spell2Id?: string; // 임의 추가
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
	teamId?: number; // 100: 블루팀, 200: 레드팀
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
	win?: boolean; // 무효시에는??
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
