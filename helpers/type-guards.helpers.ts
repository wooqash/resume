import { IButton, ButtonStyleType } from "@/types/button.interface";
import { IEducation, ISchool } from "@/types/education.interface";
import { ICompany, IExperience } from "@/types/experience.interface";
import { IHeading } from "@/types/heading";
import { IconType } from "@/types/icon.enum";
import { IIntro } from "@/types/intro.interface";
import { IJobProfile } from "@/types/job-profile.interface";
import { ILink, ILinkWithIcon } from "@/types/link.interface";
import { IMedia, ISimpleImage } from "@/types/media.interface";
import { IMenu } from "@/types/menu.interface";
import {
  IPersonalInfo,
  IPersonalInfoItem,
  PersonalInfoType,
} from "@/types/personal-info.interface";
import {
  IProject,
  IPortfolio,
  IRecommendation,
  IReference,
} from "@/types/portfolio.interface";
import { ISeo } from "@/types/seo.interface";
import { ISkills, ISkillsGroup, ISkillsTypes } from "@/types/skills.interface";

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

export const isIJobProfile = (jobProfile: any): jobProfile is IJobProfile => {
  return (
    typeof jobProfile.title === "string" && typeof jobProfile.text === "string"
  );
};

const isPersonalInfoType = (type: any): type is PersonalInfoType => {
  return (
    type === "name" ||
    type === "surname" ||
    type === "dateofbirth" ||
    type === "nationality" ||
    type === "phoneno" ||
    type === "email" ||
    type === "address" ||
    type === "langs"
  );
};

export const isPersonalInfoItem = (item: any): item is IPersonalInfoItem => {
  return (
    (typeof item.id === "string" || typeof item.id === "number") &&
    isPersonalInfoType(item.type) &&
    typeof item.label === "string" &&
    typeof item.text === "string"
  );
};

export const isIPersonalInfo = (
  personalInfo: any
): personalInfo is IPersonalInfo => {
  return (
    typeof personalInfo.title === "string" &&
    Array.isArray(personalInfo.info) &&
    isPersonalInfoItem(personalInfo.info[0])
  );
};

const isSkillsGroup = (group: any): group is ISkillsGroup => {
  return (
    (typeof group.id === "string" || typeof group.id === "number") &&
    typeof group.name === "string" &&
    Array.isArray(group.skills)
  );
};

const isSkillsTypes = (type: any): type is ISkillsTypes => {
  return (
    ((typeof type.id === "string" || typeof type.id === "number") &&
      typeof type.name === "string" &&
      typeof type.skillsGroups === "string") ||
    (Array.isArray(type.skillsGroups) && isSkillsGroup(type.skillsGroups[0]))
  );
};

export const isISkills = (skills: any): skills is ISkills => {
  return (
    typeof skills.title === "string" &&
    Array.isArray(skills.types) &&
    isSkillsTypes(skills.types[0])
  );
};

export const isIComapny = (company: any): company is ICompany => {
  return (
    (typeof company.id === "string" || typeof company.id === "number") &&
    typeof company.name === "string" &&
    typeof company.period === "string" &&
    typeof company.position === "string" &&
    typeof company.description === "string"
  );
};

export const isIExperience = (experience: any): experience is IExperience => {
  return (
    typeof experience.title === "string" && isIComapny(experience.companies[0])
  );
};

export const isISchool = (school: any): school is ISchool => {
  return (
    (typeof school.id === "string" || typeof school.id === "number") &&
    typeof school.name === "string" &&
    typeof school.period === "string" &&
    typeof school.direction === "string" &&
    typeof school.thesisTitle === "string"
  );
};

export const isIEducation = (education: any): education is IEducation => {
  return typeof education.title === "string" && isISchool(education.schools[0]);
};

export const isIProject = (project: any): project is IProject => {
  return (
    (typeof project.id === "string" || typeof project.id === "number") &&
    typeof project.title === "string" &&
    isISimpleImage(project.mainImage) &&
    typeof project.details.type === "string" &&
    Array.isArray(project.details.technologies) &&
    typeof project.details.client === "string" &&
    isILink(project.details.url) &&
    (typeof project.details.images === "undefined" ||
      (Array.isArray(project.details.images) &&
        isISimpleImage(project.details.images[0])))
  );
};

export const isIReference = (reference: any): reference is IReference => {
  return (
    (typeof reference.id === "string" || typeof reference.id === "number") &&
    typeof reference.client === "string" &&
    typeof reference.text === "string" &&
    (typeof reference.image === "undefined" || isISimpleImage(reference.image))
  );
};

export const isIRecommendation = (
  recommendation: any
): recommendation is IRecommendation => {
  return (
    (typeof recommendation.title === "string" ||
      typeof recommendation.title === "undefined") &&
    Array.isArray(recommendation.references) &&
    isIReference(recommendation.references[0])
  );
};

export const isIPortfolio = (portfolio: any): portfolio is IPortfolio => {
  return (
    (typeof portfolio.title === "string" ||
      typeof portfolio.title === "undefined") &&
    typeof portfolio.projectDetailsLabels.type === "string" &&
    typeof portfolio.projectDetailsLabels.technologies === "string" &&
    typeof portfolio.projectDetailsLabels.client === "string" &&
    typeof portfolio.projectDetailsLabels.url === "string" &&
    Array.isArray(portfolio.projects) &&
    isIProject(portfolio.projects[0]) &&
    isIRecommendation(portfolio.recommendations)
  );
};

export const isISimpleImage = (image: any): image is ISimpleImage => {
  return (
    (typeof image.id === "string" || typeof image.id === "number") &&
    typeof image.width === "number" &&
    typeof image.height === "number" &&
    typeof image.url === "string" &&
    typeof image.ext === "string"
  );
};

// export const isIMedia = (media: any): media is IMedia => {
//   return ()
// };
