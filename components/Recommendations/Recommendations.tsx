import { IRecommendation } from "@/types/portfolio.interface";
import { Avatar, Box, Flex, Text, VStack } from "@chakra-ui/react";
import BoxHeader from "../BoxHeader";
import SwiperCarousel from "../SwiperCarousel";

type RecommendationsProps = {
  recommendations: IRecommendation;
};

const Recommendations: React.FC<RecommendationsProps> = ({
  recommendations,
}) => {
  const { title, references } = recommendations;

  const referencesToShow = references.map((reference) => (
    <VStack textAlign="center" mb="4" key={reference.id}>
      {reference.image && (
        <Avatar
          src={reference.image.url}
          name=""
          size="lg"
          overflow="hidden"
          my="4"
        ></Avatar>
      )}
      <Text mb="6">{reference.text}</Text>
      <Text>{reference.client}</Text>
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
