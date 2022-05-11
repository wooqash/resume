import { Text, VStack, useColorMode } from "@chakra-ui/react";
import { useLanguageContext } from "contexts/language";
import { isIJobProfile } from "helpers/type-guards.helpers";
import { ABOUT_LABELS } from "translations.constants";
import BoxHeader from "../BoxHeader";

type JobProfileProps = {};

const JobProfile: React.FC<JobProfileProps> = () => {
  const { colorMode } = useColorMode();
  const { lang } = useLanguageContext();
  const pageTrans = ABOUT_LABELS[lang].jobProfile;
  const jobProfile = pageTrans && isIJobProfile(pageTrans) ? pageTrans : null;

  return (
    jobProfile && (
      <VStack
        alignItems={{ base: "flex-start" }}
        border="1px solid"
        borderColor={colorMode === "dark" ? "whiteAlpha.200" : "blackAlpha.200"}
        p="8"
        borderRadius="md"
      >
        <BoxHeader title={jobProfile.title} />
        <Text>{jobProfile.text}</Text>
      </VStack>
    )
  );
};

export default JobProfile;
