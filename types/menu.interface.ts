import { IIconButton } from "./button.interface";
import { ILinkWithIcon } from "./link.interface";

export interface IMenu {
  button?: IIconButton;
  items: ILinkWithIcon[];
}
