import { ILink } from "./link.interface";

export interface IIntro {
  titlePrefix?: string;
  title: string;
  introText: string;
  moreBtn?: ILink;
}
