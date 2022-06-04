import { Box, List, ListItem, useColorMode } from "@chakra-ui/react";
import TechnicalIcon from "./TechnicalIcon";

type ListWithTechnicalIconsProps = {
  collection: string[];
};

const ListWithTechnicalIcons: React.FC<ListWithTechnicalIconsProps> = ({
  collection,
}) => {
  const { colorMode } = useColorMode();
  return (
    <List display="flex" flexWrap="wrap">
      {collection.map((elem, index) => {
        return (
          <ListItem key={elem} mr="2">
            <Box as="span" mr="2">{`${elem}`}</Box>
            <Box as="span" verticalAlign="middle">
              <TechnicalIcon name={elem} />
            </Box>
            {index < collection.length - 1 && (
              <Box
                as="span"
                dangerouslySetInnerHTML={{
                  __html: "&#8226;",
                }}
                color={colorMode === "dark" ? "teal.200" : "teal.700"}
              />
            )}
          </ListItem>
        );
      })}
    </List>
  );
};

export default ListWithTechnicalIcons;
