export type ImageCardType = {
	featuredUrl: string;
	name: string;
	desc: string;
	category: string;
	location: string;
	year: string;
	alt?: string;
	url: string;
	imgs: { id: number; url: string }[];
};
