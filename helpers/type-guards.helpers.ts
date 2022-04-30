import { ButtonType, IButton } from "@/types/button.interface";
import { IconType } from "@/types/icon.enum";
import { ILink, ILinkWithIcon } from "@/types/link.interface";
import { ISeo } from "@/types/seo.interface";

export const isILink = (link: any): link is ILink => {
  return (
    (typeof link.id === "string" || typeof link.id === "undefined") &&
    typeof link.label === "string" &&
    typeof link.href === "string" &&
    typeof link.newTab === "boolean"
  );
};

export const isILinkWithIcon = (link: any): link is ILinkWithIcon => {
  return (
    (typeof link.id === "string" || typeof link.id === "undefined") &&
    typeof link.label === "string" &&
    typeof link.href === "string" &&
    typeof link.newTab === "boolean" &&
    (link.icon === IconType.ABOUT ||
      link.icon === IconType.CONTACT ||
      link.icon === IconType.FACEBOOK ||
      link.icon === IconType.HOME ||
      link.icon === IconType.INSTAGRAM ||
      link.icon === IconType.LINKEDIN ||
      link.icon === IconType.PORTFOLIO ||
      link.icon === IconType.SOCIAL ||
      link.icon === IconType.TWITTER)
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

export const isIButton = (button: any): button is IButton => {
  return (
    typeof button.label === "string" &&
    typeof button["aria-description"] === "string" &&
    (button.type === ButtonType.PRIMARY ||
      button.type === ButtonType.SECONDARY ||
      button.type === undefined)
  );
};
