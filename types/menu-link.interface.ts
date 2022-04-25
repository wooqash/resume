import { IIconType } from "./icon.interface";
import { ILink } from "./link.interface";

export interface IMenuLink extends ILink {
  icon?: IIconType;
}
