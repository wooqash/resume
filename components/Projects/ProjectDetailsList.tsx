import { ILink } from "@/types/link.interface";
import { Box, Icon, List, ListItem, useColorMode } from "@chakra-ui/react";
import { HiDocument, HiOutlineCode, HiOutlineGlobeAlt } from "react-icons/hi";
import { FiUser } from "react-icons/fi";
import ListWithTechnicalIcons from "../ListWithTechnicalIcons";
import CustomLink from "../CustomLink";

type ProjectDetailsListProps = {
  details: { type: string; technologies: string[]; client: string; url: ILink };
  labels: { type: string; technologies: string; client: string; url: string };
};

const ProjectDetailsList: React.FC<ProjectDetailsListProps> = ({
  details,
  labels,
}) => {
  const { colorMode } = useColorMode();
  return (
    <List display="flex" flexWrap="wrap" w="100%" mb="8">
      <ListItem
        flex={{ sm: "0 0 50%" }}
        maxW={{ sm: "50%" }}
        my="0.5rem"
        pr="4"
      >
        <Box
          as="span"
          mr="1"
          textTransform="capitalize"
          color={colorMode === "dark" ? "teal.200" : "teal.700"}
          display="flex"
          alignItems="center"
        >
          <Icon as={HiDocument} mr="1" />
          {labels.type}:
        </Box>
        <Box as="span" fontWeight="bold" display="block">
          {details.type}
        </Box>
      </ListItem>
      <ListItem
        flex={{ sm: "0 0 50%" }}
        maxW={{ sm: "50%" }}
        my="0.5rem"
        pr="4"
      >
        <Box
          as="span"
          mr="1"
          textTransform="capitalize"
          color={colorMode === "dark" ? "teal.200" : "teal.700"}
          display="flex"
          alignItems="center"
        >
          <Icon as={FiUser} mr="1" />
          {labels.client}:
        </Box>
        <Box as="span" fontWeight="bold" display="block">
          {details.client}
        </Box>
      </ListItem>
      <ListItem
        flex={{ sm: "0 0 50%" }}
        maxW={{ sm: "50%" }}
        my="0.5rem"
        pr="4"
      >
        <Box
          as="span"
          mr="1"
          textTransform="capitalize"
          color={colorMode === "dark" ? "teal.200" : "teal.700"}
          display="flex"
          alignItems="center"
        >
          <Icon as={HiOutlineCode} mr="1" />
          {labels.technologies}:
        </Box>
        {details.technologies && (
          <Box fontSize="bold">
            <ListWithTechnicalIcons collection={details.technologies} />
          </Box>
        )}
      </ListItem>
      <ListItem
        flex={{ sm: "0 0 50%" }}
        maxW={{ sm: "50%" }}
        my="0.5rem"
        pr="4"
      >
        <Box
          as="span"
          mr="1"
          textTransform="capitalize"
          color={colorMode === "dark" ? "teal.200" : "teal.700"}
          display="flex"
          alignItems="center"
        >
          <Icon as={HiOutlineGlobeAlt} mr="1" />
          {labels.url}:
        </Box>
        <Box
          as="span"
          fontWeight="bold"
          display="block"
          textDecoration="underline"
        >
          <CustomLink link={details.url}>{details.url.href}</CustomLink>
          {/* {details.url.href} */}
        </Box>
      </ListItem>
    </List>
  );
};

export default ProjectDetailsList;
