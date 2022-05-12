import { Box, Heading, VStack } from "@chakra-ui/react";
import { useLanguageContext } from "contexts/language";
import { isIHeading } from "helpers/type-guards.helpers";
import { ABOUT_LABELS } from "translations.constants";

type PageTitleProps = {};

const PageTitle: React.FC<PageTitleProps> = () => {
  const { lang } = useLanguageContext();
  const pageTrans = ABOUT_LABELS[lang].heading;
  const heading = pageTrans && isIHeading(pageTrans) ? pageTrans : null;

  const colorLastWordOfTitle = (title: string) => {
    const titleElem = title.split(" ");
    if (titleElem.length > 1) {
      const wordsWithoutColor = title.substring(0, title.lastIndexOf(" "));
      const wordToColor = titleElem[titleElem.length - 1];
      return (
        <>
          {wordsWithoutColor}{" "}
          <Box as="span" color="teal.600">
            {wordToColor}
          </Box>
        </>
      );
    }
    return title;
  };

  return (
    heading && (
      <VStack
        pos="relative"
        textTransform="uppercase"
        alignItems="center"
        mb="20"
      >
        <Heading
          as="h1"
          position={{ sm: "absolute" }}
          top={{ sm: "40%" }}
          fontSize={{ base: "2.18rem", sm: "3.5rem" }}
          textAlign="center"
        >
          {colorLastWordOfTitle(heading.title)}
        </Heading>
        {heading?.shadowTitle && (
          <Heading
            as="span"
            opacity="0.07"
            fontSize="6.875rem"
            display={{ base: "none", sm: "block" }}
          >
            {heading.shadowTitle}
          </Heading>
        )}
      </VStack>
    )
  );
};

export default PageTitle;
