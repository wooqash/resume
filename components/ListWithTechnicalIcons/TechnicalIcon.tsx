import {
  MdAccessibilityNew,
  MdDevicesOther,
  MdOfflineBolt,
} from "react-icons/md";
import { GoPackage } from "react-icons/go";
import {
  SiAdobephotoshop,
  SiAngular,
  SiBootstrap,
  SiBuildkite,
  SiCss3,
  SiFigma,
  SiFoursquarecityguide,
  SiGit,
  SiGulp,
  SiHandlebarsdotjs,
  SiHtml5,
  SiJavascript,
  SiJira,
  SiJquery,
  SiNextdotjs,
  SiReact,
  SiSass,
  SiTrello,
  SiTypescript,
  SiVisualstudiocode,
  SiWebpack,
} from "react-icons/si";
import { Icon, useColorMode } from "@chakra-ui/react";

type TechnicalIconProps = {
  name: string;
};

const TechnicalIcon: React.FC<TechnicalIconProps> = ({ name }) => {
  const { colorMode } = useColorMode();
  const getIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case "html5":
        return <Icon as={SiHtml5} mr="2" color="red.400" />;
      case "css3":
        return <Icon as={SiCss3} mr="2" color="blue.400" />;
      case "sass":
        return <Icon as={SiSass} mr="2" color="pink.400" />;
      case "javascript":
        return <Icon as={SiJavascript} mr="2" color="yellow.400" />;
      case "typescript":
        return <Icon as={SiTypescript} mr="2" color="blue.400" />;
      case "react":
        return <Icon as={SiReact} mr="2" color="blue.400" />;
      case "angular":
        return <Icon as={SiAngular} mr="2" color="red.400" />;
      case "nextjs":
        return (
          <Icon
            as={SiNextdotjs}
            mr="2"
            color={colorMode === "dark" ? "teal.400" : "black"}
          />
        );
      case "jquery":
        return <Icon as={SiJquery} mr="2" color="blue.400" />;
      case "chakra-ui":
        return <Icon as={MdOfflineBolt} mr="2" color="green.200" />;
      case "bootstrap":
        return <Icon as={SiBootstrap} mr="2" color="violet" />;
      case "foundation":
        return <Icon as={SiFoursquarecityguide} mr="2" color="blue.400" />;
      case "handlebars":
        return <Icon as={SiHandlebarsdotjs} mr="2" color="orange.400" />;
      case "git":
        return <Icon as={SiGit} mr="2" color="red.400" />;
      case "vscode":
        return <Icon as={SiVisualstudiocode} mr="2" color="blue.400" />;
      case "photoshop":
        return <Icon as={SiAdobephotoshop} mr="2" color="blue.400" />;
      case "figma":
        return (
          <Icon
            as={SiFigma}
            mr="2"
            color={colorMode === "dark" ? "teal.400" : "black"}
          />
        );
      case "gulp":
        return <Icon as={SiGulp} mr="2" color="red.400" />;
      case "parcel":
        return <Icon as={GoPackage} mr="2" color="yellow.600" />;
      case "webpack":
        return <Icon as={SiWebpack} mr="2" color="blue.200" />;
      case "jira":
        return <Icon as={SiJira} mr="2" color="blue.600" />;
      case "trello":
        return <Icon as={SiTrello} mr="2" color="blue.400" />;
      case "standardy web accessibility":
        return <Icon as={MdAccessibilityNew} mr="2" color="blue.400" />;
      case "web accessibility standards":
        return <Icon as={MdAccessibilityNew} mr="2" color="blue.400" />;
      case "metodologia bem":
        return <Icon as={SiBuildkite} mr="2" color="blue.400" />;
      case "bem metodology":
        return <Icon as={SiBuildkite} mr="2" color="blue.400" />;
      case "koncepcja rwd":
        return (
          <Icon
            as={MdDevicesOther}
            mr="2"
            color={colorMode === "dark" ? "teal.400" : "black"}
          />
        );
      case "rwd conception":
        return (
          <Icon
            as={MdDevicesOther}
            mr="2"
            color={colorMode === "dark" ? "teal.400" : "black"}
          />
        );
      default:
        return;
    }
  };
  return <>{getIcon(name)}</>;
};

export default TechnicalIcon;
