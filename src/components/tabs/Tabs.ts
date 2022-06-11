let id = 1;

export const getId = (): string => {
	return `tabs-${id++}`;
};

export interface Tab {
	id: string;
}

export interface Panel {
	id: string;
}
