import { Icon, HStack, Switch, useColorMode } from "@chakra-ui/react";
import { FiMoon, FiSun } from "react-icons/fi";

type ModeSwitcherProps = {};

const ModeSwitcher: React.FC<ModeSwitcherProps> = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <HStack spacing="5px" pos="relative">
        {colorMode == "light" && (
          <Icon
            as={FiMoon}
            color="gray.200"
            pos="absolute"
            zIndex="2"
            right="4px"
            boxSize="10px"
          />
        )}
        {colorMode == "dark" && (
          <Icon
            as={FiSun}
            color="blackAlpha.900"
            pos="absolute"
            zIndex="2"
            left="10px"
            boxSize="10px"
          />
        )}
        <Switch
          colorScheme="yellow"
          onChange={toggleColorMode}
          pos="relative"
          zIndex="1"
          size="md"
          defaultChecked={true}
        />
      </HStack>
    </>
  );
};

export default ModeSwitcher;
