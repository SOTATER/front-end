export const getChampionImageSrc = (version: string, image: string): string => {
	return `http://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${image}`;
};

export const getItemImageSrc = (version: string, image: string): string => {
	return `http://ddragon.leagueoflegends.com/cdn/${version}/img/item/${image}`;
};

export const getSpellImageSrc = (version: string, image: string): string => {
	return `http://ddragon.leagueoflegends.com/cdn/${version}/img/spell/${image}`;
};
