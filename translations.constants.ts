import { ButtonStyleType, IButton } from "./types/button.interface";
import { IHeading } from "./types/heading";
import { IconType } from "./types/icon.enum";
import { IIntro } from "./types/intro.interface";
import { IJobProfifle } from "./types/job-profile.interface";
import { ILink, ILinkWithIcon } from "./types/link.interface";
import { IMenu } from "./types/menu.interface";
import { IPersonalInfo } from "./types/personal-info.interface";
import { ISeo } from "./types/seo.interface";
import { ISkills } from "./types/skills.interface";

interface ITranslations {
  [localization: string]: {
    [key: string]:
      | ISeo
      | IIntro
      | IHeading
      | IJobProfifle
      | IPersonalInfo
      | ISkills
      | string
      | undefined;
  };
}

interface IGlobalData {
  [localization: string]: {
    [key: string]: string | ILink | ILinkWithIcon[] | IMenu | IButton;
  };
}

export const GLOBAL_LABELS: IGlobalData = {
  pl: {
    ariaNewTabLabel: "Otwórz w nowej karcie",
    skipLinkLabel: "Przejdź do treści głównej",
    langSwitcher: {
      id: "LangSwitcher",
      label: "EN",
      href: "/en",
      newTab: false,
    },
    mainMenu: {
      items: [
        {
          id: "1",
          label: "Home",
          href: "/",
          "aria-labelledby": "Strona główna",
          "aria-describedby": "Nasza Strona główna",
          newTab: false,
          icon: IconType.HOME,
        },
        {
          id: "2",
          label: "O mnie",
          href: "/o-mnie",
          "aria-labelledby": "strona o mnie",
          newTab: false,
          icon: IconType.ABOUT,
        },
        {
          id: "3",
          label: "Portfolio",
          href: "/portfolio",
          "aria-labelledby": "moje projekty",
          newTab: false,
          icon: IconType.PORTFOLIO,
        },
        // {
        //   label: "Blog",
        //   href: "/blog",
        //   newTab: false,
        // },
        {
          id: "4",
          label: "Kontakt",
          href: "/kontakt",
          newTab: false,
          icon: IconType.CONTACT,
        },
      ],
    },

    socialLinks: {
      button: {
        id: "SocialLinksDesc",
        label: "Linki do social mediów",
        "aria-labelledby": "Sprawdź moje social media",
        icon: IconType.SOCIAL,
      },
      items: [
        {
          id: "sl1",
          label: "",
          href: "https://facebook.com",
          newTab: true,
          icon: IconType.FACEBOOK,
        },
        {
          id: "sl2",
          label: "",
          href: "https://instagram.com",
          newTab: true,
          icon: IconType.INSTAGRAM,
        },
        {
          id: "sl3",
          label: "",
          href: "https://linkedin.com",
          newTab: true,
          icon: IconType.LINKEDIN,
        },
        {
          id: "sl4",
          label: "",
          href: "https://twitter.com",
          newTab: true,
          icon: IconType.TWITTER,
        },
      ],
    },
  },
  en: {
    ariaNewTabLabel: "Open in new tab",
    skipLinkLabel: "Go to main content",
    langSwitcher: {
      id: "LangSwitcher",
      label: "PL",
      href: "/",
      newTab: false,
    },
    mainMenu: {
      items: [
        {
          id: "1",
          label: "Home",
          href: "/",
          newTab: false,
          icon: IconType.HOME,
        },
        {
          id: "2",
          label: "About me",
          href: "/about",
          newTab: false,
          icon: IconType.ABOUT,
        },
        {
          id: "3",
          label: "Portfolio",
          href: "/portfolio",
          "aria-labelledby": "moje projekty",
          newTab: false,
          icon: IconType.PORTFOLIO,
        },
        {
          id: "4",
          label: "Contact",
          href: "/contact",
          newTab: false,
          icon: IconType.CONTACT,
        },
      ],
    },
    socialLinks: {
      button: {
        id: "SocialLinksDesc",
        label: "Social links",
        "aria-labelledby": "Check my social media",
        icon: IconType.SOCIAL,
      },
      items: [
        {
          id: "sl1",
          label: "",
          href: "https://facebook.com",
          newTab: true,
          icon: IconType.FACEBOOK,
        },
        {
          id: "sl2",
          label: "",
          href: "https://instagram.com",
          newTab: true,
          icon: IconType.INSTAGRAM,
        },
        {
          id: "sl3",
          label: "",
          href: "https://linkedin.com",
          newTab: true,
          icon: IconType.LINKEDIN,
        },
        {
          id: "sl4",
          label: "",
          href: "https://twitter.com",
          newTab: true,
          icon: IconType.TWITTER,
        },
      ],
    },
  },
};

export const HOME_LABELS: ITranslations = {
  pl: {
    seo: {
      id: "seoPL",
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
    intro: {
      titlePrefix: "Łukasz Sobola",
      title: "Front-end developer",
      introText: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
      pariatur perferendis deserunt nemo, est at rerum fuga iure laboriosam
      dignissimos! Voluptas eligendi libero sint explicabo cum et
      praesentium sed quisquam.`,
      moreBtn: {
        label: "więcej o mnie",
        href: "/o-mnie",
        newTab: false,
      },
    },
  },
  en: {
    seo: {
      id: "seoEN",
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
    intro: {
      titlePrefix: "Łukasz Sobola",
      title: "Front-end developer",
      introText: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
      pariatur perferendis deserunt nemo, est at rerum fuga iure laboriosam
      dignissimos! Voluptas eligendi libero sint explicabo cum et
      praesentium sed quisquam.`,
      moreBtn: {
        label: "more about me",
        href: "/about",
        newTab: false,
      },
    },
  },
};

export const ABOUT_LABELS: ITranslations = {
  pl: {
    seo: {
      id: "seoAboutPL",
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
    heading: {
      title: "o mnie",
      shadowTitle: "Resume",
    },
    jobProfile: {
      title: "Profil zawodowy",
      text: "Od 2012 roku pracuje jako frontend developer. W trakcie tego okresu byłem zaangażowany w kilkanaście a może i więcej projektów komercyjnych. Moją główną odpowiedzialnością jest tworznie warstwy prezentacyjnej stron internetowych na bazie projektów graficznych. Obecnie jestem skupiony na podnoszeniu moich kwalifikacji z zakresu JavaScript'u i jestem zaintersowany głównie tego typu projektami.",
    },
    personalInfo: {
      title: "Dane osobiste",
      info: [
        {
          id: "1",
          type: "name",
          label: "Imię",
          text: "Łukasz",
        },
        {
          id: "2",
          type: "surname",
          label: "Nazwisko",
          text: "Sobola",
        },
        {
          id: "3",
          type: "dateofbirth",
          label: "Data urodzenia",
          text: "17/01/1984",
        },
        {
          id: "4",
          type: "nationality",
          label: "Narodowość",
          text: "Polska",
        },
        {
          id: "5",
          type: "phoneno",
          label: "Telefon",
          text: "+48 796 776 716",
        },
        {
          id: "6",
          type: "email",
          label: "Email",
          text: "lukasz.sobola@gmail.com",
        },
        {
          id: "7",
          type: "address",
          label: "Miejsce zamieszkania",
          text: "Łódź 91-165, ul. Prof. Eugeniusza Romera 21",
        },
        {
          id: "8",
          type: "langs",
          label: "Języki",
          text: "Polski (natywny), Angielski (B1)",
        },
      ],
    },
    skills: {
      title: "Umiejętności",
      types: [
        {
          id: 1,
          name: "techniczne",
          skillsGroups: [
            {
              id: 1,
              name: "Technologie webowe",
              skills: ["html5", "css3", "sass", "javascript", "typescript"],
            },
            {
              id: 2,
              name: "Biblioteki i frameworki",
              skills: [
                "react",
                "angular",
                "nextjs",
                "jquery",
                "chakra-ui",
                "bootstrap",
                "foundation",
                "handlebars",
              ],
            },
            {
              id: 3,
              name: "Narzędzia",
              skills: [
                "git",
                "vscode",
                "photoshop",
                "figma",
                "gulp",
                "parcel",
                "webpack",
                "jira",
                "trello",
              ],
            },
            {
              id: 4,
              name: "Praktyki",
              skills: [
                "koncepcja rwd",
                "metodologia bem",
                "standardy web accessibility",
              ],
            },
          ],
        },
        {
          id: 2,
          name: "nietechniczne",
          skillsGroups:
            "komunikatywność, silna motywacja i chęć uczenia się, umiejętność pracy w zespole, wytrwałość",
        },
      ],
    },
  },
  en: {
    seo: {
      id: "seoAboutEN",
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
    heading: {
      title: "About me",
      shadowTitle: "Resume",
    },
    jobProfile: {
      title: "Job profile",
      text: "From 2012 I'm working as front-end developer. During this period I was involved in over a dozen or even more commercial projects. My main resposibility is creating a visual layer of websites based on graphic projects. At this moment I'm focused on improving my JavaScript skills and I'm interested in this type of projects.",
    },
    personalInfo: {
      title: "Personal Info",
      info: [
        {
          id: "1",
          type: "name",
          label: "Name",
          text: "Łukasz",
        },
        {
          id: "2",
          type: "surname",
          label: "Surname",
          text: "Sobola",
        },
        {
          id: "3",
          type: "dateofbirth",
          label: "Date of birth",
          text: "17/01/1984",
        },
        {
          id: "4",
          type: "nationality",
          label: "Nationality",
          text: "Poland",
        },
        {
          id: "5",
          type: "phoneno",
          label: "Phone No",
          text: "+48 796 776 716",
        },
        {
          id: "6",
          type: "email",
          label: "Email",
          text: "lukasz.sobola@gmail.com",
        },
        {
          id: "7",
          type: "address",
          label: "Address",
          text: "Łódź 91-165, ul. Prof. Eugeniusza Romera 21",
        },
        {
          id: "8",
          type: "langs",
          label: "Languages",
          text: "Polish (native), English (B1)",
        },
      ],
    },
    skills: {
      title: "Skills",
      types: [
        {
          id: 1,
          name: "technical",
          skillsGroups: [
            {
              id: 1,
              name: "Web technologies",
              skills: ["html5", "css3", "sass", "javascript", "typescript"],
            },
            {
              id: 2,
              name: "Libararies & Frameworks",
              skills: [
                "react",
                "angular",
                "nextjs",
                "jquery",
                "chakra-ui",
                "bootstrap",
                "foundation",
                "handlebars",
              ],
            },
            {
              id: 3,
              name: "Tools",
              skills: [
                "git",
                "vscode",
                "photoshop",
                "figma",
                "gulp",
                "parcel",
                "webpack",
                "jira",
                "trello",
              ],
            },
            {
              id: 4,
              name: "Practices",
              skills: [
                "koncepcja rwd",
                "metodologia bem",
                "standardy web accessibility",
              ],
            },
          ],
        },
        {
          id: 2,
          name: "nietechniczne",
          skillsGroups:
            "communicativeness, strong motivation and willingness to learn, ability to work in a team, perseverance",
        },
      ],
    },
  },
};

export const PORTFOLIO_LABELS: ITranslations = {
  pl: {
    seo: {
      id: "seoPortfolioPL",
      title: "Portfolio",
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
      id: "seoPortfolioEN",
      title: "Portfolio - EN",
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

export const CONTACT_LABELS: ITranslations = {
  pl: {
    seo: {
      id: "seoContactPL",
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
      id: "seoContactEN",
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
