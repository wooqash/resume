import {
  Box,
  Flex,
  Heading,
  Icon,
  List,
  ListItem,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import { useLanguageContext } from "contexts/language";
import { isISkills } from "helpers/type-guards.helpers";
import { Fragment } from "react";
import { ABOUT_LABELS } from "translations.constants";
import BoxHeader from "../BoxHeader";

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

type SkillsProps = {};

const Skills: React.FC<SkillsProps> = () => {
  const { colorMode } = useColorMode();
  const { lang } = useLanguageContext();
  const pageTrans = ABOUT_LABELS[lang].skills;
  const skills = isISkills(pageTrans) ? pageTrans : null;

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
      case "metodologia bem":
        return <Icon as={SiBuildkite} mr="2" color="blue.400" />;
      case "koncepcja rwd":
        return (
          <Icon
            as={MdDevicesOther}
            mr="2"
            color={colorMode === "dark" ? "teal.400" : "black"}
          />
        );
      default:
        let x: never = type;
        return;
    }
  };

  return (
    skills && (
      <VStack
        alignItems={{ base: "flex-start", md: "center" }}
        mx={{ md: "8" }}
        my="8"
      >
        <BoxHeader title={skills.title} />
        <VStack alignItems={{ base: "flex-start" }}>
          {skills.types.map((type) => {
            return (
              <Fragment key={type.id}>
                <Heading
                  as="h3"
                  fontSize={{ base: "1.15rem", lg: "1.4rem" }}
                  fontWeight="600"
                  textTransform="capitalize"
                >
                  {type.name}
                </Heading>
                <Flex flexWrap="wrap" w="100%">
                  {Array.isArray(type.skillsGroups) ? (
                    type.skillsGroups.map((group) => {
                      return (
                        <Fragment key={group.id}>
                          <Box
                            as="div"
                            flex={{ base: "0 0 100%", md: "0 0 50%" }}
                            maxW={{ md: "50%" }}
                            py="4"
                          >
                            <Heading
                              as="h4"
                              fontSize={{ base: ".9rem", lg: "1rem" }}
                              textTransform="capitalize"
                              fontFamily="body"
                              fontWeight="bold"
                              mb="4"
                            >
                              {group.name}
                            </Heading>
                            {group.skills && (
                              <List display="flex" flexWrap="wrap">
                                {group.skills.map((skill, index) => {
                                  return (
                                    <ListItem key={skill} mr="2">
                                      <Box as="span" mr="2">{`${skill}`}</Box>
                                      <Box
                                        as="span"
                                        textTransform="capitalize"
                                        color={
                                          colorMode === "dark"
                                            ? "teal.200"
                                            : "teal.700"
                                        }
                                        verticalAlign="middle"
                                      >
                                        {getIcon(skill)}
                                      </Box>
                                      {index < group.skills.length - 1 && (
                                        <span
                                          dangerouslySetInnerHTML={{
                                            __html: "&#8226;",
                                          }}
                                        ></span>
                                      )}
                                    </ListItem>
                                  );
                                })}
                              </List>
                            )}
                          </Box>
                        </Fragment>
                      );
                    })
                  ) : (
                    <Box as="p">{type.skillsGroups}</Box>
                  )}
                </Flex>
              </Fragment>
            );
          })}
        </VStack>
      </VStack>
    )
  );
};

export default Skills;
