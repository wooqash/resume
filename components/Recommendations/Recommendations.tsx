import { IRecommendation } from "@/types/portfolio.interface";
import {
  Avatar,
  Box,
  Flex,
  Text,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import BoxHeader from "../BoxHeader";
import SwiperCarousel from "../SwiperCarousel";

type RecommendationsProps = {
  recommendations: IRecommendation;
};

const Recommendations: React.FC<RecommendationsProps> = ({
  recommendations,
}) => {
  const { colorMode } = useColorMode();
  const { title, references } = recommendations;

  const referencesToShow = references.map((reference) => (
    <VStack textAlign="center" mb="4" key={reference.id}>
      {reference.image && (
        <Box
          as="span"
          border="4px solid"
          borderColor={colorMode === "dark" ? "teal.400" : "teal.600"}
          borderRadius="full"
          my="4"
        >
          <Avatar
            src={reference.image.url}
            name=""
            size="lg"
            overflow="hidden"
          ></Avatar>
        </Box>
      )}
      <Text mb="6">{reference.text}</Text>
      <Text variant="brand">{reference.client}</Text>
    </VStack>
  ));
  return (
    <Flex
      w="100%"
      justifyContent="center"
      alignItems="center"
      my="16"
      flexDirection="column"
    >
      {title && <BoxHeader title={title} />}
      {references && (
        <Flex w="80%" justifyContent="center">
          <SwiperCarousel nav={false} autoplay={true}>
            {referencesToShow}
          </SwiperCarousel>
        </Flex>
      )}
    </Flex>
  );
};

export default Recommendations;
