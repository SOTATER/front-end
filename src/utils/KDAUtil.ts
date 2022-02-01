export const getKdaRatio = (kill: number, death: number, assist: number): string => {
	return ((kill + assist) / death).toFixed(2);
};

export const getKdaColor = (num: number): string => {
	let className = 'normal';
	if (num >= 5) {
		className = 'orange';
	} else if (num >= 4) {
		className = 'blue';
	} else if (num >= 3) {
		className = 'green';
	}
	return className;
};

export const getKdaColorByStats = (kill: number, death: number, assist: number): string => {
	return getKdaColor(parseFloat(getKdaRatio(kill, death, assist)));
};
