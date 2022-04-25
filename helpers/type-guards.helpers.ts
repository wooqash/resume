import { ButtonType, IButton } from "@/types/button.interface";
import { ILink } from "@/types/link.interface";
import { IMenuLink } from "@/types/menu-link.interface";
import { ISeo } from "@/types/seo.interface";

export const isILink = (link: any): link is ILink => {
  return (
    (typeof link.id === "string" || typeof link.id === "number") &&
    typeof link.label === "string" &&
    typeof link.url === "string" &&
    typeof link.newTab === "boolean"
  );
};

export const isISeo = (link: any): link is ISeo => {
  return (
    (typeof link.id === "string" || typeof link.id === "number") &&
    typeof link.title === "string" &&
    (typeof link.titleSuffix === "string" ||
      typeof link.titleSuffix === "undefined") &&
    typeof link.description === "string" &&
    (typeof link.keywords === "string" ||
      typeof link.keywords === "undefined") &&
    typeof link.preventIndexing === "boolean" &&
    typeof link.preventFollowing === "boolean"
  );
};

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
