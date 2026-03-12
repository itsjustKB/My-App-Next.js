export type Technology = {
  id: string;
  name: string;
  description: string; // new property for tech details
  image_url: string;
  image_alt: string;
  width: number;
  height: number;
};

export type Club = {
  id: string;
  name: string;
  description: string;
  logo_url: string;
  logo_alt: string;
};