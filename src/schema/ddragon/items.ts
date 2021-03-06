import type { DDragonDataWrapper, DDragonImage } from './common';

export interface DDragonItemData {
	name: string;
	rune: {
		isrune: boolean;
		tier: number;
		type: string;
	};
	gold: {
		base: number;
		total: number;
		sell: number;
		purchasable: boolean;
	};
	group: string;
	description: string;
	colloq: string;
	plaintext: string;
	consumed: boolean;
	stacks: number;
	depth: number;
	consumeOnFull: boolean;
	from: string[];
	into: string[]; // 어느 아이템에 재료로 들어가는지
	image: DDragonImage;
	specialRecipe: number;
	inStore: boolean;
	hideFromAll: boolean;
	requiredChampion: string;
	requiredAlly: string;
	stats: {
		FlatHPPoolMod?: number;
		rFlatHPModPerLevel?: number;
		FlatMPPoolMod?: number;
		rFlatMPModPerLevel?: number;
		PercentHPPoolMod?: number;
		PercentMPPoolMod?: number;
		FlatHPRegenMod?: number;
		rFlatHPRegenModPerLevel?: number;
		PercentHPRegenMod?: number;
		FlatMPRegenMod?: number;
		rFlatMPRegenModPerLevel?: number;
		PercentMPRegenMod?: number;
		FlatArmorMod?: number;
		rFlatArmorModPerLevel?: number;
		PercentArmorMod?: number;
		rFlatArmorPenetrationMod?: number;
		rFlatArmorPenetrationModPerLevel?: number;
		rPercentArmorPenetrationMod?: number;
		rPercentArmorPenetrationModPerLevel?: number;
		FlatPhysicalDamageMod?: number;
		rFlatPhysicalDamageModPerLevel?: number;
		PercentPhysicalDamageMod?: number;
		FlatMagicDamageMod?: number;
		rFlatMagicDamageModPerLevel?: number;
		PercentMagicDamageMod?: number;
		FlatMovementSpeedMod?: number;
		rFlatMovementSpeedModPerLevel?: number;
		PercentMovementSpeedMod?: number;
		rPercentMovementSpeedModPerLevel?: number;
		FlatAttackSpeedMod?: number;
		PercentAttackSpeedMod?: number;
		rPercentAttackSpeedModPerLevel?: number;
		rFlatDodgeMod?: number;
		rFlatDodgeModPerLevel?: number;
		PercentDodgeMod?: number;
		FlatCritChanceMod?: number;
		rFlatCritChanceModPerLevel?: number;
		PercentCritChanceMod?: number;
		FlatCritDamageMod?: number;
		rFlatCritDamageModPerLevel?: number;
		PercentCritDamageMod?: number;
		FlatBlockMod?: number;
		PercentBlockMod?: number;
		FlatSpellBlockMod?: number;
		rFlatSpellBlockModPerLevel?: number;
		PercentSpellBlockMod?: number;
		FlatEXPBonus?: number;
		PercentEXPBonus?: number;
		rPercentCooldownMod?: number;
		rPercentCooldownModPerLevel?: number;
		rFlatTimeDeadMod?: number;
		rFlatTimeDeadModPerLevel?: number;
		rPercentTimeDeadMod?: number;
		rPercentTimeDeadModPerLevel?: number;
		rFlatGoldPer10Mod?: number;
		rFlatMagicPenetrationMod?: number;
		rFlatMagicPenetrationModPerLevel?: number;
		rPercentMagicPenetrationMod?: number;
		rPercentMagicPenetrationModPerLevel?: number;
		FlatEnergyRegenMod?: number;
		rFlatEnergyRegenModPerLevel?: number;
		FlatEnergyPoolMod?: number;
		rFlatEnergyModPerLevel?: number;
		PercentLifeStealMod?: number;
		PercentSpellVampMod?: number;
	};
	tags: string[];
	maps: { [key: string]: boolean };
	effect?: { [key: string]: string };
}

export interface DDragonItem extends DDragonDataWrapper<DDragonItemData> {
	basic: DDragonItemData;
	groups: {
		id: string;
		MaxGroupOwnable: string;
	}[];
	tree: {
		header: string;
		tags: string[];
	}[];
}
