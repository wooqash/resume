import { IconType } from "./icon.enum";
import { ILink } from "./link.interface";

export interface ISocialLink extends ILink {
  icon?: IconType;
}
