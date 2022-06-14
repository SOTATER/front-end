export interface DDragonWrapper {
	type: string;
	format?: string;
	version: string;
}

export interface DDragonDataWrapper<T> extends DDragonWrapper {
	data: { [key: string]: T };
}

export interface DDragonImage {
	full: string;
	sprite: string;
	group: string;
	x: number;
	y: number;
	w: number;
	h: number;
}
