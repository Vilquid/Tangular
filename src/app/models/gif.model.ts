export interface Gif {
	description: string;
	tags: string[];
	media: Media;
	urlTenor: string;
}

export interface Media {
	url: string;
	dims: number[];
	size: number;
}

export interface Category {
	searchTerm: string;
	path: string;
	image: string;
	name: string;
}
