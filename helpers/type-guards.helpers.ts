import { ButtonType, IButton } from "@/types/button";
import { IMenuLink } from "@/types/menu-link";

export const isIMenuLinkArr = (list: any): list is IMenuLink[] => {
  return (
    list &&
    list.length > 0 &&
    typeof list[0].label === "string" &&
    typeof list[0].url === "string" &&
    typeof list[0].newTab === "boolean"
  );
};

export const isIButton = (button: any): button is IButton => {
  return (
    typeof button.label === "string" &&
    typeof button["aria-description"] === "string" &&
    (button.type === ButtonType.PRIMARY ||
      button.type === ButtonType.SECONDARY ||
      button.type === undefined)
  );
};
