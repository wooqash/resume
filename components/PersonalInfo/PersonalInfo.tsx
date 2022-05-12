import { Box, List, ListItem, VStack } from "@chakra-ui/react";
import BoxHeader from "../BoxHeader";

type PersonalInfoProps = {};

const PersonalInfo: React.FC<PersonalInfoProps> = () => {
  return (
    <VStack
      alignItems={{ base: "flex-start" }}
      // border="1px solid"
      // borderColor={colorMode === "dark" ? "whiteAlpha.200" : "blackAlpha.200"}
      py={{ lg: 8 }}

      // borderRadius="md"
    >
      <BoxHeader title="Personal Info" />
      <List display="flex" flexWrap="wrap" mt="0">
        <ListItem flex="0 0 50%" maxW="50%" my="0.5rem" pr="4">
          <Box as="span" mr="1" textTransform="capitalize" color="teal.200">
            Imię:
          </Box>
          <Box as="span" fontWeight="bold" display="block">
            Łukasz
          </Box>
        </ListItem>
        <ListItem flex="0 0 50%" maxW="50%" my="0.5rem" pr="4">
          <Box as="span" mr="1" textTransform="capitalize" color="teal.200">
            Nazwisko:
          </Box>
          <Box as="span" fontWeight="bold" display="block">
            Sobola
          </Box>
        </ListItem>
        <ListItem flex="0 0 50%" maxW="50%" my="0.5rem" pr="4">
          <Box as="span" mr="1" textTransform="capitalize" color="teal.200">
            Data urodzenia:
          </Box>
          <Box as="span" fontWeight="bold" display="block">
            17.01.1984
          </Box>
        </ListItem>
        <ListItem flex="0 0 50%" maxW="50%" my="0.5rem" pr="4">
          <Box as="span" mr="1" textTransform="capitalize" color="teal.200">
            Narodowość:
          </Box>
          <Box as="span" fontWeight="bold" display="block">
            Polska
          </Box>
        </ListItem>
        <ListItem flex="0 0 50%" maxW="50%" my="0.5rem" pr="4">
          <Box as="span" mr="1" textTransform="capitalize" color="teal.200">
            Telefon:
          </Box>
          <Box as="span" fontWeight="bold" display="block">
            +48 796 776 716
          </Box>
        </ListItem>
        <ListItem flex="0 0 50%" maxW="50%" my="0.5rem" pr="4">
          <Box as="span" mr="1" textTransform="capitalize" color="teal.200">
            Email:
          </Box>
          <Box as="span" fontWeight="bold" display="block">
            lukasz.sobola@gmail.com
          </Box>
        </ListItem>
        <ListItem flex="0 0 50%" maxW="50%" my="0.5rem" pr="4">
          <Box as="span" mr="1" textTransform="capitalize" color="teal.200">
            Miejsce zamieszkania:
          </Box>
          <Box as="span" fontWeight="bold" display="block">
            Łódź 91-165, ul. Prof. Eugeniusza Romera 21
          </Box>
        </ListItem>
        <ListItem flex="0 0 50%" maxW="50%" my="0.5rem" pr="4">
          <Box as="span" mr="1" textTransform="capitalize" color="teal.200">
            Języki:
          </Box>
          <Box as="span" fontWeight="bold" display="block">
            Polski (natywny), Angielski (B1)
          </Box>
        </ListItem>
      </List>
    </VStack>
  );
};

export default PersonalInfo;
