import { ILink } from "./link.interface";

export interface IProject {
  id: string | number;
  title: string;
  details: {
    type: string;
    technologies: string[];
    client: string;
    url: ILink;
  };
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
