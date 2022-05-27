import { ILink } from "@/types/link.interface";
import { Box, List, ListItem, useColorMode } from "@chakra-ui/react";

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
    <List display="flex" flexWrap="wrap" mt="0" w="100%">
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
          {labels.type}
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
          {labels.client}
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
          {labels.technologies}
        </Box>
        <Box as="span" fontWeight="bold" display="block">
          {details.technologies.map((technology) => {
            return technology + ",";
          })}
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
          {labels.url}
        </Box>
        <Box as="span" fontWeight="bold" display="block">
          {details.url.href}
        </Box>
      </ListItem>
    </List>
  );
};

export default ProjectDetailsList;
