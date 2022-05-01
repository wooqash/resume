import { IconType } from "./icon.enum";
import { AnchorHTMLAttributes } from "react";

export interface ILink extends AnchorHTMLAttributes<HTMLAnchorElement> {
  label: string;
  newTab: boolean;
}

export interface ILinkWithIcon extends ILink {
  icon: IconType;
}
