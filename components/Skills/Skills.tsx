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
  DiAngularSimple,
  DiBootstrap,
  DiCss3,
  DiGit,
  DiGulp,
  DiHtml5,
  DiJira,
  DiJqueryLogo,
  DiPhotoshop,
  DiReact,
  DiSass,
  DiTrello,
  DiVisualstudio,
} from "react-icons/di";
import {
  SiFigma,
  SiHandlebarsdotjs,
  SiJavascript,
  SiNextdotjs,
  SiTypescript,
  SiWebpack,
} from "react-icons/si";

type SkillsProps = {};

const Skills: React.FC<SkillsProps> = () => {
  const { colorMode } = useColorMode();
  const { lang } = useLanguageContext();
  const pageTrans = ABOUT_LABELS[lang].skills;
  const skills = isISkills(pageTrans) ? pageTrans : null;

  const getIcon = (type: string) => {
    switch (type) {
      case "html5":
        return <Icon as={DiHtml5} mr="1" />;
      case "css3":
        return <Icon as={DiCss3} mr="1" />;
      case "sass":
        return <Icon as={DiSass} mr="1" />;
      case "javascript":
        return <Icon as={SiJavascript} mr="1" />;
      case "typescript":
        return <Icon as={SiTypescript} mr="1" />;
      case "react":
        return <Icon as={DiReact} mr="1" />;
      case "angular":
        return <Icon as={DiAngularSimple} mr="1" />;
      case "nextjs":
        return <Icon as={SiNextdotjs} mr="1" />;
      case "jquery":
        return <Icon as={DiJqueryLogo} mr="1" />;
      case "bootstrap":
        return <Icon as={DiBootstrap} mr="1" />;
      case "handlebars":
        return <Icon as={SiHandlebarsdotjs} mr="1" />;
      case "git":
        return <Icon as={DiGit} mr="1" />;
      case "vscode":
        return <Icon as={DiVisualstudio} mr="1" />;
      case "photoshop":
        return <Icon as={DiPhotoshop} mr="1" />;
      case "figma":
        return <Icon as={SiFigma} mr="1" />;
      case "gulp":
        return <Icon as={DiGulp} mr="1" />;
      case "webpack":
        return <Icon as={SiWebpack} mr="1" />;
      case "jira":
        return <Icon as={DiJira} mr="1" />;
      case "trello":
        return <Icon as={DiTrello} mr="1" />;
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
                                {group.skills.map((skill) => {
                                  return (
                                    <ListItem key={skill} mr="2">
                                      <Box
                                        as="span"
                                        mr="1"
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
                                      <Box as="span">{`${skill},`}</Box>
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
