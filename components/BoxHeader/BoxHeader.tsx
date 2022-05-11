import { Heading } from "@chakra-ui/react";

type BoxHeaderProps = {
  title: string;
};

const BoxHeader: React.FC<BoxHeaderProps> = ({ title }) => {
  return (
    <Heading
      as="h2"
      fontSize={{ base: "1.31rem", lg: "1.625rem" }}
      fontWeight="600"
      textTransform="uppercase"
      mb="4"
    >
      {title}
    </Heading>
  );
};

export default BoxHeader;
