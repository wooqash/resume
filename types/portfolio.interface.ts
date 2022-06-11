import { ILink } from "./link.interface";
import { ISimpleImage } from "./media.interface";

export interface IProject {
  id: string | number;
  title: string;
  mainImage: ISimpleImage; //TODO: need to swap to IMedia after connect with StrapiCMS
  details: {
    type: string;
    technologies: string[];
    client: string;
    url: ILink;
    images?: ISimpleImage[]; //TODO: need to swap to IMedia after connect with StrapiCMS
  };
}

export interface IReference {
  id: string | number;
  client: string;
  text: string;
  image?: ISimpleImage; //TODO: need to swap to IMedia after connect with StrapiCMS
}

export interface IRecommendation {
  title?: string;
  references: IReference[];
}

export interface IPortfolio {
  title?: string;
  projectDetailsLabels: {
    type: string;
    technologies: string;
    client: string;
    url: string;
  };
  projects: IProject[];
  recommendations: IRecommendation;
}
