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
