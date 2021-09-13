export interface Item {
	// colloq: string;
	description: string;
	gold: Gold;
	image: Image;
	into: string[]; // 어느 아이템에 재료로 들어가는지
	name: string;
	plainText: string;
	// maps: Map; - 보여줄 데이터가 없기에 제거
	// stats: Object - 보여줄 데이터가 없기에 제거
	// tags: string[] - 보여줄 데이터가 없기에 제거
}

export interface Gold {
	base: number;
	purchasable: boolean;
	sell: number;
	total: number;
}

export interface Image {
	full: string;
	sprite: string;
	group: string;
	h: number;
	w: number;
	x: number;
	y: number;
}
