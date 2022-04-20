import { ISeo } from "types/seo";
import { IconType } from "./types/icon";
import { IMenuLink } from "./types/menu-link";

interface ITranslations {
  [localization: string]: { [key: string]: ISeo } | { [key: string]: string };
}

interface IGlobalData {
  [localization: string]: { [key: string]: string | IMenuLink[] };
}

export const DEFAULT_LABELS: IGlobalData = {
  pl: {
    ariaNewTabLabel: "Otwórz w nowej karcie",
    skipLinkLabel: "Przejdź do treści głównej",
    mainMenu: [
      {
        label: "Home",
        url: "/",
        newTab: false,
        icon: IconType.HOME,
      },
      {
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
        label: "Kontakt",
        url: "/kontakt",
        newTab: false,
        icon: IconType.CONTACT,
      },
    ],
    socialLinks: [
      {
        label: "Home",
        url: "/",
        newTab: false,
        icon: IconType.HOME,
      },
    ],
  },
  en: {
    ariaNewTabLabel: "Open in new tab",
    skipLinkLabel: "Go to main content",
    mainMenu: [
      {
        label: "Home",
        url: "/",
        newTab: false,
        icon: IconType.HOME,
      },
      {
        label: "About me",
        url: "/about",
        newTab: false,
        icon: IconType.ABOUT,
      },
      {
        label: "Contact",
        url: "/contact",
        newTab: false,
        icon: IconType.CONTACT,
      },
    ],
  },
};

export const HOME: ITranslations = {
  pl: {
    seo: {
      metaTitle: "Hello world - PL",
      metaTitleSuffix: "Łukasz Sobola",
      metaDescription: "",
      metaKeywords: "",
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
      metaTitle: "Hello world - EN",
      metaTitleSuffix: "Łukasz Sobola",
      metaDescription: "",
      metaKeywords: "",
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
      metaTitle: "O mnie",
      metaTitleSuffix: "Łukasz Sobola",
      metaDescription: "",
      metaKeywords: "",
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
      metaTitle: "About - EN",
      metaTitleSuffix: "Łukasz Sobola",
      metaDescription: "",
      metaKeywords: "",
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
      metaTitle: "Kontakt",
      metaTitleSuffix: "Łukasz Sobola",
      metaDescription: "",
      metaKeywords: "",
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
      metaTitle: "Contact",
      metaTitleSuffix: "Łukasz Sobola",
      metaDescription: "",
      metaKeywords: "",
      preventIndexing: false,
      preventFollowing: false,
      cannonicalLink: "",
      // shareImage: '',
      // openGraph: '',
      // twitterCard: '',
    },
  },
};
