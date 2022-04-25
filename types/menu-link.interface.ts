import { IconType } from "./icon.enum";
import { ILink } from "./link.interface";

export interface IMenuLink extends ILink {
  icon?: IconType;
}
