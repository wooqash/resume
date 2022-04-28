import { IconType } from "./icon.enum";

export interface ILink {
  id: string | number;
  label: string;
  "aria-tooltip"?: string;
  "aria-description"?: string;
  url: string;
  newTab: boolean;
}

export interface ILinkWithIcon extends ILink {
  icon?: IconType;
}
