import { IconType } from "./icon.enum";

export interface ILink {
  id: string | number;
  label: string;
  "aria-tooltip"?: string;
  "aria-description"?: string;
  url: string;
  newTab: boolean;
  role?: string;
  tabIndex?: number;
}

export interface ILinkWithIcon extends ILink {
  icon?: IconType;
}
