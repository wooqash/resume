import NextLink from "next/link";
import { Heading, VStack, Text, Button, Icon, Box } from "@chakra-ui/react";
import { FiArrowRight } from "react-icons/fi";
type IntroProps = {};

const Intro: React.FC<IntroProps> = (props) => {
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
        <Heading textTransform="uppercase">
          <Box as="p" color="teal.600">
            Łukasz Sobola
          </Box>
          Front-end developer
        </Heading>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          pariatur perferendis deserunt nemo, est at rerum fuga iure laboriosam
          dignissimos! Voluptas eligendi libero sint explicabo cum et
          praesentium sed quisquam.
        </Text>
        <NextLink href="/o-mnie" locale="pl" passHref>
          <Button as="a" rightIcon={<Icon as={FiArrowRight} />}>
            więcej o mnie
          </Button>
        </NextLink>
      </VStack>
    </Box>
  );
};

export default Intro;
