import { localStorageManager } from "@chakra-ui/react";
import { IButton } from "./types/button.interface";
import { IEducation } from "./types/education.interface";
import { IExperience } from "./types/experience.interface";
import { IHeading } from "./types/heading";
import { IconType } from "./types/icon.enum";
import { IIntro } from "./types/intro.interface";
import { IJobProfile } from "./types/job-profile.interface";
import { ILink, ILinkWithIcon } from "./types/link.interface";
import { IMenu } from "./types/menu.interface";
import { IPersonalInfo } from "./types/personal-info.interface";
import { IPortfolio } from "./types/portfolio.interface";
import { ISeo } from "./types/seo.interface";
import { ISkills } from "./types/skills.interface";

interface ITranslations {
  [localization: string]: {
    [key: string]:
      | ISeo
      | IIntro
      | IHeading
      | IJobProfile
      | IPersonalInfo
      | ISkills
      | IExperience
      | IEducation
      | IPortfolio
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
    experience: {
      title: "doświadczenie",
      companies: [
        {
          id: 1,
          name: "Sii",
          period: "01/2022 - aktualnie",
          position: "Frontend Developer (regular)",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias unde quia atque. Quia molestiae laudantium reiciendis quaerat qui maiores quasi quo aspernatur esse quod, rerum sunt facilis maxime labore ipsum.",
        },
        {
          id: 2,
          name: "Prime Force",
          period: "02/2019 - 01/2020",
          position: "Angular Developer (junior)",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias unde quia atque. Quia molestiae laudantium reiciendis quaerat qui maiores quasi quo aspernatur esse quod, rerum sunt facilis maxime labore ipsum.",
        },
        {
          id: 3,
          name: "Hypermedia/Isobar",
          period: "10/2012 - 02/2019",
          position: "Frontend Developer (regular -> senior)",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias unde quia atque. Quia molestiae laudantium reiciendis quaerat qui maiores quasi quo aspernatur esse quod, rerum sunt facilis maxime labore ipsum.",
        },
        {
          id: 4,
          name: "Makolab",
          period: "10/2010 - 10/2012",
          position: "Web Developer (junior)",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias unde quia atque. Quia molestiae laudantium reiciendis quaerat qui maiores quasi quo aspernatur esse quod, rerum sunt facilis maxime labore ipsum.",
        },
      ],
    },
    education: {
      title: "edukacja",
      schools: [
        {
          id: 1,
          name: "Uniwersytet Łódzki - Wydział Zarządzania",
          period: "2004-2009",
          direction: "Informatyka w zarządzaniu",
          thesisTitle:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
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
                "rwd conception",
                "bem metodology",
                "web accessibility standards",
              ],
            },
          ],
        },
        {
          id: 2,
          name: "non-technical",
          skillsGroups:
            "communicativeness, strong motivation and willingness to learn, ability to work in a team, perseverance",
        },
      ],
    },
    experience: {
      title: "experience",
      companies: [
        {
          id: 1,
          name: "Sii",
          period: "01/2022 - till now",
          position: "Frontend Developer (regular)",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias unde quia atque. Quia molestiae laudantium reiciendis quaerat qui maiores quasi quo aspernatur esse quod, rerum sunt facilis maxime labore ipsum.",
        },
        {
          id: 2,
          name: "Prime Force",
          period: "02/2019 - 01/2020",
          position: "Angular Developer (junior)",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias unde quia atque. Quia molestiae laudantium reiciendis quaerat qui maiores quasi quo aspernatur esse quod, rerum sunt facilis maxime labore ipsum.",
        },
        {
          id: 3,
          name: "Hypermedia/Isobar",
          period: "10/2012 - 02/2019",
          position: "Frontend Developer (regular -> senior)",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias unde quia atque. Quia molestiae laudantium reiciendis quaerat qui maiores quasi quo aspernatur esse quod, rerum sunt facilis maxime labore ipsum.",
        },
        {
          id: 4,
          name: "Makolab",
          period: "10/2010 - 10/2012",
          position: "Web Developer (junior)",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias unde quia atque. Quia molestiae laudantium reiciendis quaerat qui maiores quasi quo aspernatur esse quod, rerum sunt facilis maxime labore ipsum.",
        },
      ],
    },
    education: {
      title: "education",
      schools: [
        {
          id: 1,
          name: "University of Lodz - Faculty of Management",
          period: "2004-2009",
          direction: "Information Technology in Management",
          thesisTitle:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
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
    heading: {
      title: "Portfolio",
      shadowTitle: "Moje prace",
    },
    portfolio: {
      projectDetailsLabels: {
        type: "Projekt",
        technologies: "Technologie",
        client: "Klient",
        url: "Url",
      },
      projects: [
        {
          id: 1,
          title: "AHB Finance",
          details: {
            type: "Strona www",
            technologies: ["html5", "css3", "sass", "javascript", "typescript"],
            client: "Aleksandra Hetmańska",
            url: {
              href: "https://ahb-finance.com",
              label: "ahb-finance.com",
              newTab: true,
            },
            images: [
              {
                id: 1,
                width: 650,
                height: 400,
                url: "https://picsum.photos/600/450?random=1",
                ext: "webp",
              },
              {
                id: 2,
                width: 650,
                height: 400,
                url: "https://picsum.photos/600/450?random=2",
                ext: "webp",
              },
            ],
          },
          mainImage: {
            id: 1,
            width: 350,
            height: 250,
            url: "https://picsum.photos/350/250?random=1",
            ext: "webp",
          },
        },
        {
          id: 2,
          title: "Carlife",
          details: {
            type: "Strona www",
            technologies: ["html5", "css3", "sass", "javascript"],
            client: "Piotr Cygulski",
            url: {
              href: "https://carlifecygulski.pl",
              label: "carlifecygulski",
              newTab: true,
            },
          },
          mainImage: {
            id: 2,
            width: 350,
            height: 250,
            url: "https://picsum.photos/350/250?random=2",
            ext: "webp",
          },
        },
      ],
      recommendations: {
        title: "Rekomendacje",
        references: [
          {
            id: 1,
            client: "Carlife",
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, animi debitis! Repellendus quibusdam harum ullam eos dignissimos impedit hic officiis. Et itaque eligendi, commodi magnam eveniet mollitia expedita aliquam eius!",
            image: {
              id: 1,
              width: 200,
              height: 200,
              url: "https://picsum.photos/200/200?random=3",
              ext: "webp",
            },
          },
          {
            id: 2,
            client: "Hetmanska",
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, animi debitis! Repellendus quibusdam harum ullam eos dignissimos impedit hic officiis. Et itaque eligendi, commodi magnam eveniet mollitia expedita aliquam eius!",
            image: {
              id: 1,
              width: 100,
              height: 100,
              url: "https://picsum.photos/100/100?random=4",
              ext: "webp",
            },
          },
        ],
      },
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
    heading: {
      title: "Portfolio",
      shadowTitle: "My works",
    },
    portfolio: {
      projectDetailsLabels: {
        type: "Project",
        technologies: "Technologies",
        client: "Client",
        url: "Url",
      },
      projects: [
        {
          id: 1,
          title: "AHB Finance",
          details: {
            type: "Website",
            technologies: ["html5", "css3", "sass", "javascript", "typescript"],
            client: "Aleksandra Hetmańska",
            url: {
              href: "https://ahb-finance.com",
              label: "ahb-finance.com",
              newTab: true,
            },
            images: [
              {
                id: 1,
                width: 650,
                height: 400,
                url: "https://picsum.photos/600/450?random=1",
                ext: "webp",
              },
              {
                id: 2,
                width: 650,
                height: 400,
                url: "https://picsum.photos/600/450?random=2",
                ext: "webp",
              },
            ],
          },
          mainImage: {
            id: 1,
            width: 350,
            height: 250,
            url: "https://picsum.photos/350/250?random=1",
            ext: "webp",
          },
        },
        {
          id: 2,
          title: "Carlife",
          details: {
            type: "Website",
            technologies: ["html5", "css3", "sass", "javascript"],
            client: "Piotr Cygulski",
            url: {
              href: "https://carlifecygulski.pl",
              label: "carlifecygulski",
              newTab: true,
            },
          },
          mainImage: {
            id: 2,
            width: 350,
            height: 250,
            url: "https://picsum.photos/350/250?random=2",
            ext: "webp",
          },
        },
      ],
      recommendations: {
        title: "Recommendations",
        references: [
          {
            id: 1,
            client: "Carlife",
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, animi debitis! Repellendus quibusdam harum ullam eos dignissimos impedit hic officiis. Et itaque eligendi, commodi magnam eveniet mollitia expedita aliquam eius!",
            image: {
              id: 1,
              width: 200,
              height: 200,
              url: "https://picsum.photos/200/200?random=3",
              ext: "webp",
            },
          },
          {
            id: 2,
            client: "Hetmanska",
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, animi debitis! Repellendus quibusdam harum ullam eos dignissimos impedit hic officiis. Et itaque eligendi, commodi magnam eveniet mollitia expedita aliquam eius!",
            image: {
              id: 1,
              width: 100,
              height: 100,
              url: "https://picsum.photos/100/100?random=4",
              ext: "webp",
            },
          },
        ],
      },
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
