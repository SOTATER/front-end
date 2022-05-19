export const getChampionImageSrc = (version: string, image: string): string => {
	return `http://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${image}`;
};

export const getItemImageSrc = (version: string, image: string): string => {
	return `http://ddragon.leagueoflegends.com/cdn/${version}/img/item/${image}`;
};
