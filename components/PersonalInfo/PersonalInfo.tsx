import { Box, List, ListItem, VStack } from "@chakra-ui/react";
import { useLanguageContext } from "contexts/language";
import { isIPersonalInfo } from "helpers/type-guards.helpers";
import { ABOUT_LABELS } from "translations.constants";
import BoxHeader from "../BoxHeader";

type PersonalInfoProps = {};

const PersonalInfo: React.FC<PersonalInfoProps> = () => {
  const { lang } = useLanguageContext();
  const pageTrans = ABOUT_LABELS[lang].personalInfo;
  const personalInfo =
    pageTrans && isIPersonalInfo(pageTrans) ? pageTrans : null;

  return (
    personalInfo && (
      <VStack alignItems={{ base: "flex-start" }} py={{ lg: 8 }}>
        <BoxHeader title={personalInfo.title} />
        <List display="flex" flexWrap="wrap" mt="0" w="100%">
          {personalInfo.info.map((item) => {
            return (
              <ListItem
                flex="0 0 50%"
                maxW="50%"
                my="0.5rem"
                pr="4"
                key={item.id}
              >
                <Box
                  as="span"
                  mr="1"
                  textTransform="capitalize"
                  color="teal.200"
                >
                  {`${item.label}:`}
                </Box>
                <Box as="span" fontWeight="bold" display="block">
                  {item.text}
                </Box>
              </ListItem>
            );
          })}
        </List>
      </VStack>
    )
  );
};

export default PersonalInfo;
