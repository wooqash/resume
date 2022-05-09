import NextLink from "next/link";
import { Heading, VStack, Text, Button, Icon, Box } from "@chakra-ui/react";
import { FiArrowRight } from "react-icons/fi";
import { useLanguageContext } from "contexts/language";
import { HOME_LABELS } from "translations.constants";
import { isIIntro } from "helpers/type-guards.helpers";
type IntroProps = {};

const Intro: React.FC<IntroProps> = (props) => {
  const { lang } = useLanguageContext();
  const pageTrans = HOME_LABELS[lang].intro;
  const intro = isIIntro(pageTrans) ? pageTrans : null;

  return (
    <Box
      maxW={{ base: "550px", lg: "66.66666667%" }}
      ml={{ lg: "33.33333333%" }}
      zIndex="1"
    >
      <VStack
        alignItems={{ base: "center", lg: "flex-start" }}
        spacing="6"
        maxW={{ base: "100%", lg: "60%" }}
        m="0 auto"
        textAlign={{ base: "center", lg: "left" }}
      >
        {intro?.title && (
          <Heading textTransform="uppercase">
            {intro?.titlePrefix && (
              <Box as="p" color="teal.600">
                {intro?.titlePrefix}
              </Box>
            )}
            {intro?.title}
          </Heading>
        )}
        {intro?.introText && <Text>{intro?.introText}</Text>}
        {intro?.moreBtn && intro?.moreBtn.href && (
          <NextLink href={intro?.moreBtn.href} locale={lang} passHref>
            <Button as="a" rightIcon={<Icon as={FiArrowRight} />}>
              {intro?.moreBtn.label}
            </Button>
          </NextLink>
        )}
      </VStack>
    </Box>
  );
};

export default Intro;
