import { ILink } from "./link.interface";
import { ISimpleImage } from "./media.interface";

export interface IProject {
  id: string | number;
  title: string;
  details: {
    type: string;
    technologies: string[];
    client: string;
    url: ILink;
    images?: ISimpleImage[]; //TODO: need to swap to IMedia after connect with StrapiCMS
  };
  mainImage: ISimpleImage; //TODO: need to swap to IMedia after connect with StrapiCMS
}

export interface IPortfolio {
  title?: string;
  productDetailsLabels: {
    type: string;
    technologies: string;
    client: string;
    url: string;
  };
  projects: IProject[];
}
