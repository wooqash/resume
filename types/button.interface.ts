import { ButtonHTMLAttributes } from "react";
import { IconType } from "./icon.enum";

export enum ButtonStyleType {
  SOLID = "solid",
  OUTLINE = "outline",
  GHOST = "ghost",
  LINK = "link",
}

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: ButtonStyleType;
}

export interface IIconButton extends IButton {
  icon: IconType;
}
