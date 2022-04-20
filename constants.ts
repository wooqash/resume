import { ISeo } from "types/seo";
import { ILink } from "./types/link";

interface ITranslations {
  [localization: string]: { [key: string]: ISeo } | { [key: string]: string };
}

interface IGlobalData {
  [localization: string]: { [key: string]: string | ILink[] };
}

export const DEFAULT_LABELS: IGlobalData = {
  pl: {
    ariaNewTabLabel: "Otwórz w nowej karcie",
    mainMenu: [
      {
        label: "Home",
        url: "/",
        newTab: false,
      },
      {
        label: "O mnie",
        url: "/o-mnie",
        newTab: false,
      },
      {
        label: "Blog",
        url: "/blog",
        newTab: false,
      },
      {
        label: "Kontakt",
        url: "/kontakt",
        newTab: false,
      },
    ],
  },
  en: {
    ariaNewTabLabel: "Open in new tab",
    mainMenu: [
      {
        label: "Home",
        url: "/",
        newTab: false,
      },
      {
        label: "About me",
        url: "/about",
        newTab: false,
      },
      {
        label: "Contact",
        url: "/contact",
        newTab: false,
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
