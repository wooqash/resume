import { IButton, ButtonStyleType } from "@/types/button.interface";
import { IHeading } from "@/types/heading";
import { IconType } from "@/types/icon.enum";
import { IIntro } from "@/types/intro.interface";
import { IJobProfifle } from "@/types/job-profile.interface";
import { ILink, ILinkWithIcon } from "@/types/link.interface";
import { IMenu } from "@/types/menu.interface";
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

export const isIMenu = (link: any): link is IMenu => {
  return Array.isArray(link.items) && isILinkWithIcon(link.items[0]);
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
    (button.variant === ButtonStyleType.SOLID ||
      button.variant === ButtonStyleType.OUTLINE ||
      button.variant === ButtonStyleType.GHOST ||
      button.variant === ButtonStyleType.LINK ||
      button.variant === undefined)
  );
};

export const isIIntro = (intro: any): intro is IIntro => {
  return (
    (typeof intro.titlePrefix === "string" ||
      intro.titlePrefix === "undefined") &&
    typeof intro.title === "string" &&
    typeof intro.introText === "string" &&
    (typeof intro.moreBtn === "undefined" || isILink(intro.moreBtn))
  );
};

export const isIHeading = (heading: any): heading is IHeading => {
  return (
    typeof heading.title === "string" &&
    (typeof heading.shadowTitle === "string" ||
      heading.shadowTitle === "undefined")
  );
};

export const isIJobProfile = (jobProfile: any): jobProfile is IJobProfifle => {
  return (
    typeof jobProfile.title === "string" && typeof jobProfile.text === "string"
  );
};
