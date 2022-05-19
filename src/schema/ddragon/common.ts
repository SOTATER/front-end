export interface DDragonWrapper {
	type: string;
	format?: string;
	version: string;
}

export interface DDragonDataWrapper<T> extends DDragonWrapper {
	data: { [key: string]: T };
}
