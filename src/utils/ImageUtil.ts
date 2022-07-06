export const getChampionImageSrc = (version: string, image: string): string => {
	return `http://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${image}`;
};

export const getItemImageSrc = (version: string, image: string): string => {
	return `http://ddragon.leagueoflegends.com/cdn/${version}/img/item/${image}`;
};

export const getSpellImageSrc = (version: string, image: string): string => {
	return `http://ddragon.leagueoflegends.com/cdn/${version}/img/spell/${image}`;
};

export const getRuneImageSrc = (image: string): string => {
	return `http://ddragon.leagueoflegends.com/cdn/img/${image}`;
};

export const getProfileImageSrc = (version: string, profileId: number): string => {
	return `http://ddragon.leagueoflegends.com/cdn/${version}/img/profileicon/${profileId}.png`;
};
