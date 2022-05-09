import { Box } from "@chakra-ui/react";

type MainImageProps = {};

const MainImage: React.FC<MainImageProps> = (props) => {
  return (
    <Box
      w={{ base: "220px", lg: "33.33333333%" }}
      maxW="640px"
      h={["220px", null, null, "calc(100% - 80px)"]}
      pos={["relative", null, null, "fixed"]}
      left={[null, null, null, "10"]}
      top={[null, null, null, "10"]}
      backgroundImage="/images/Łukasz_Sobola.webp"
      bgPosition="top"
      bgRepeat="no-repeat"
      bgSize="cover"
      zIndex="11"
      borderRadius={["50%", null, null, "40"]}
      border={["4px solid", null, null, "none"]}
      borderColor={["teal.600", null, null, null]}
      m={["0 auto", null, null, "0"]}
      mb={["6", null, null, "0"]}
      boxShadow="dark-lg"
      filter="auto"
      brightness="80%"
    ></Box>
  );
};

export default MainImage;
