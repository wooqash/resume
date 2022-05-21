import { Box, Flex, useColorMode, VStack } from "@chakra-ui/react";
import { useLanguageContext } from "contexts/language";
import { isIEducation, isIExperience } from "helpers/type-guards.helpers";
import { ABOUT_LABELS } from "translations.constants";
import BoxHeader from "../BoxHeader";
import TimelineItem from "./TimelineItem";

const PersonalTimeline: React.FC = () => {
  const { colorMode } = useColorMode();
  const { lang } = useLanguageContext();
  const pageTransExperience = ABOUT_LABELS[lang].experience;
  const pageTransEducation = ABOUT_LABELS[lang].education;
  const experience = isIExperience(pageTransExperience)
    ? pageTransExperience
    : null;
  const education = isIEducation(pageTransEducation)
    ? pageTransEducation
    : null;

  return (
    experience &&
    education && (
      <VStack mb="8">
        <BoxHeader title={`${experience.title} & ${education.title}`} />
        <Flex direction="column" pos="relative">
          {experience.companies.map((company, index) => {
            return <TimelineItem element={company} index={index} key={index} />;
          })}
          {education.schools.map((school, index) => {
            return <TimelineItem element={school} index={index} key={index} />;
          })}
          <Box
            as="div"
            w="1px"
            h="100%"
            backgroundColor={
              colorMode === "dark" ? "whiteAlpha.100" : "blackAlpha.100"
            }
            pos="absolute"
            top="0"
            left={{ base: 0, lg: "50%" }}
            zIndex="1"
          />
          <Box
            as="span"
            dangerouslySetInnerHTML={{
              __html: "&#8226;",
            }}
            color="teal.600"
            pos="absolute"
            top="-20px"
            fontSize="3xl"
            left={{ base: "-5px", lg: "calc(50% - 5px)" }}
            zIndex="2"
          />
          <Box
            as="span"
            dangerouslySetInnerHTML={{
              __html: "&#8226;",
            }}
            color="teal.600"
            pos="absolute"
            bottom="-20px"
            fontSize="3xl"
            left={{ base: "-5px", lg: "calc(50% - 5px)" }}
            zIndex="2"
          />
        </Flex>
      </VStack>
    )
  );
};

export default PersonalTimeline;
