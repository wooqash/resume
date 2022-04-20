import { ISeo } from "types/seo";

interface Translations {
  [localization: string]: { [key: string]: ISeo } | { [key: string]: string };
}

export const DEFAULT_LABELS: Translations = {
  pl: {
    ariaNewTabLabel: "Otwórz w nowej karcie",
  },
  en: {
    ariaNewTabLabel: "Open in new tab",
  },
};

export const HOME: Translations = {
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

export const ABOUT: Translations = {
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

export const CONTACT: Translations = {
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
