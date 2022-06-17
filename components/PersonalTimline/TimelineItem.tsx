import { ISchool } from "@/types/education.interface";
import { ICompany } from "@/types/experience.interface";
import {
  Badge,
  Heading,
  Icon,
  Text,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import { isIComapny } from "helpers/type-guards.helpers";

import { HiOfficeBuilding } from "react-icons/hi";
import { MdSchool } from "react-icons/md";

type TimelineItemProps = {
  element: ICompany | ISchool;
  index: number;
};

const TimelineItem: React.FC<TimelineItemProps> = ({ element, index }) => {
  const { colorMode } = useColorMode();
  const isOdd = index % 2 == 0;
  const isCompany = isIComapny(element);
  return (
    <VStack
      key={element.id}
      textAlign={
        isOdd ? { base: "left", lg: "right" } : { base: "left", lg: "left" }
      }
      alignItems={
        isOdd
          ? { base: "flex-start", lg: "flex-end" }
          : { base: "flex-start", lg: "flex-start" }
      }
      w={{ lg: "47%" }}
      my="8"
      pl={{ base: 8, lg: 0 }}
      alignSelf={isOdd ? { lg: "flex-start" } : { lg: "flex-end" }}
      pos="relative"
    >
      <Badge colorScheme="teal" variant="solid" w="auto">
        {element.period}
      </Badge>
      <Icon
        as={isCompany ? HiOfficeBuilding : MdSchool}
        w="6"
        h="6"
        pos="absolute"
        top="18px"
        right={isOdd ? { base: "auto", lg: "-8.6%" } : "auto"}
        left={
          !isOdd
            ? { base: "-10px", lg: "-8.5%" }
            : { base: "-10px", lg: "auto" }
        }
        color={colorMode === "dark" ? "teal.400" : "teal.700"}
        zIndex="2"
      />
      <Heading
        as="h3"
        fontSize={{ base: "1.15rem", lg: "1.4rem" }}
        fontWeight="600"
        textTransform="capitalize"
      >
        {element.name}
      </Heading>
      <Heading
        as="h4"
        color={colorMode === "dark" ? "teal.400" : "teal.700"}
        fontSize={{ base: ".9rem", lg: "1rem" }}
        textTransform="capitalize"
        fontFamily="body"
        fontWeight="bold"
        mb="4"
      >
        {isCompany ? element.position : element.direction}
      </Heading>
      <Text textAlign={isOdd ? { lg: "right" } : "left"} pt="2">
        {isCompany ? element.description : element.thesisTitle}
      </Text>
    </VStack>
  );
};

export default TimelineItem;
