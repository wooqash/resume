import { Text, VStack, useColorMode } from "@chakra-ui/react";
import BoxHeader from "../BoxHeader";

type JobProfileProps = {};

const JobProfile: React.FC<JobProfileProps> = () => {
  const { colorMode } = useColorMode();
  return (
    <VStack
      alignItems={{ base: "flex-start" }}
      border="1px solid"
      borderColor={colorMode === "dark" ? "whiteAlpha.200" : "blackAlpha.200"}
      p="8"
      borderRadius="md"
    >
      <BoxHeader title="Profil zawodowy" />
      <Text>
        {`Od 2012 roku pracuje jako frontend developer. W trakcie tego okresu
        byłem zaangażowany w kilkanaście a może i więcej projektów komercyjnych.
        Moją główną odpowiedzialnością jest tworznie warstwy prezentacyjnej
        stron internetowych na bazie projektów graficznych. Obecnie jestem
        skupiony na podnoszeniu moich kwalifikacji z zakresu JavaScript'u i
        jestem zaintersowany głównie tego typu projektami.`}
      </Text>
    </VStack>
  );
};

export default JobProfile;
