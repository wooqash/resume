import { ButtonType, IButton } from "./types/button.interface";
import { IconType } from "./types/icon.enum";
import { ILink } from "./types/link.interface";
import { IMenuLink } from "./types/menu-link.interface";
import { ISeo } from "./types/seo.interface";
import { ISocialLink } from "./types/social-link.interface";

interface ITranslations {
  [localization: string]: { [key: string]: ISeo } | { [key: string]: string };
}

interface IGlobalData {
  [localization: string]: {
    [key: string]: string | ILink | IMenuLink[] | ISocialLink[] | IButton;
  };
}

export const GLOBAL_LABELS: IGlobalData = {
  pl: {
    ariaNewTabLabel: "Otwórz w nowej karcie",
    skipLinkLabel: "Przejdź do treści głównej",
    langSwitcher: {
      id: "LangSwitcher",
      label: "PL",
      url: "/",
      newTab: false,
    },
    mainMenu: [
      {
        id: 1,
        label: "Home",
        url: "/",
        newTab: false,
        icon: IconType.HOME,
      },
      {
        id: 2,
        label: "O mnie",
        url: "/o-mnie",
        newTab: false,
        icon: IconType.ABOUT,
      },
      // {
      //   label: "Blog",
      //   url: "/blog",
      //   newTab: false,
      // },
      {
        id: 3,
        label: "Kontakt",
        url: "/kontakt",
        newTab: false,
        icon: IconType.CONTACT,
      },
    ],
    socialButton: {
      id: "SocialLinksDesc",
      label: "Linki do social mediów",
      "aria-description": "Sprawdź moje social media",
      type: ButtonType.PRIMARY,
    },
    socialLinks: [
      {
        id: "sl1",
        label: "",
        url: "https://facebook.com",
        newTab: true,
        icon: IconType.FACEBOOK,
      },
      {
        id: "sl2",
        label: "",
        url: "https://instagram.com",
        newTab: true,
        icon: IconType.INSTAGRAM,
      },
      {
        id: "sl3",
        label: "",
        url: "https://linkedin.com",
        newTab: true,
        icon: IconType.LINKEDIN,
      },
    ],
  },
  en: {
    ariaNewTabLabel: "Open in new tab",
    skipLinkLabel: "Go to main content",
    langSwitcher: {
      id: "LangSwitcher",
      label: "EN",
      url: "/",
      newTab: false,
    },
    mainMenu: [
      {
        id: 1,
        label: "Home",
        url: "/",
        newTab: false,
        icon: IconType.HOME,
      },
      {
        id: 2,
        label: "About me",
        url: "/about",
        newTab: false,
        icon: IconType.ABOUT,
      },
      {
        id: 3,
        label: "Contact",
        url: "/contact",
        newTab: false,
        icon: IconType.CONTACT,
      },
    ],
    socialButton: {
      id: "SocialLinksDesc",
      label: "Social links",
      "aria-description": "Check my social media",
      type: ButtonType.PRIMARY,
    },
    socialLinks: [
      {
        id: "sl1",
        label: "",
        url: "https://facebook.com",
        newTab: true,
        icon: IconType.FACEBOOK,
      },
      {
        id: "sl2",
        label: "",
        url: "https://instagram.com",
        newTab: true,
        icon: IconType.INSTAGRAM,
      },
      {
        id: "sl3",
        label: "",
        url: "https://linkedin.com",
        newTab: true,
        icon: IconType.LINKEDIN,
      },
    ],
  },
};

export const HOME: ITranslations = {
  pl: {
    seo: {
      title: "Hello world - PL",
      titleSuffix: "Łukasz Sobola",
      description: "",
      keywords: "",
      preventIndexing: false,
      preventFollowing: false,
      cannonicalLink: "",
      // shareImage: '',
      // openGraph: '',
      // twitterCard: '',
    },
  },
  en: {
    seo: {
      title: "Hello world - EN",
      titleSuffix: "Łukasz Sobola",
      description: "",
      keywords: "",
      preventIndexing: false,
      preventFollowing: false,
      cannonicalLink: "",
      // shareImage: '',
      // openGraph: '',
      // twitterCard: '',
    },
  },
};

export const ABOUT: ITranslations = {
  pl: {
    seo: {
      title: "O mnie",
      titleSuffix: "Łukasz Sobola",
      description: "",
      keywords: "",
      preventIndexing: false,
      preventFollowing: false,
      cannonicalLink: "",
      // shareImage: '',
      // openGraph: '',
      // twitterCard: '',
    },
  },
  en: {
    seo: {
      title: "About - EN",
      titleSuffix: "Łukasz Sobola",
      description: "",
      keywords: "",
      preventIndexing: false,
      preventFollowing: false,
      cannonicalLink: "",
      // shareImage: '',
      // openGraph: '',
      // twitterCard: '',
    },
  },
};

export const CONTACT: ITranslations = {
  pl: {
    seo: {
      title: "Kontakt",
      titleSuffix: "Łukasz Sobola",
      description: "",
      keywords: "",
      preventIndexing: false,
      preventFollowing: false,
      cannonicalLink: "",
      // shareImage: '',
      // openGraph: '',
      // twitterCard: '',
    },
  },
  en: {
    seo: {
      title: "Contact",
      titleSuffix: "Łukasz Sobola",
      description: "",
      keywords: "",
      preventIndexing: false,
      preventFollowing: false,
      cannonicalLink: "",
      // shareImage: '',
      // openGraph: '',
      // twitterCard: '',
    },
  },
};
