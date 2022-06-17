import { Box, Flex, Heading, useColorMode, VStack } from "@chakra-ui/react";
import { useLanguageContext } from "contexts/language";
import { isISkills } from "helpers/type-guards.helpers";
import { Fragment } from "react";
import { ABOUT_LABELS } from "translations.constants";
import BoxHeader from "../BoxHeader";
import ListWithTechnicalIcons from "../ListWithTechnicalIcons";

type SkillsProps = {};

const Skills: React.FC<SkillsProps> = () => {
  const { colorMode } = useColorMode();
  const { lang } = useLanguageContext();
  const pageTrans = ABOUT_LABELS[lang].skills;
  const skills = isISkills(pageTrans) ? pageTrans : null;

  return (
    skills && (
      <VStack alignItems={{ base: "flex-start", md: "center" }} mb="12">
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
                <Flex flexWrap="wrap" w="100%" pb="8">
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
                              color={
                                colorMode === "dark" ? "teal.400" : "teal.700"
                              }
                              fontSize={{ base: ".9rem", lg: "1rem" }}
                              textTransform="capitalize"
                              fontFamily="body"
                              fontWeight="bold"
                              mb="4"
                            >
                              {group.name}
                            </Heading>
                            {group.skills && (
                              <ListWithTechnicalIcons
                                collection={group.skills}
                              />
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
