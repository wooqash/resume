import { Stack, Switch, useColorMode } from "@chakra-ui/react";

type ModeSwitcherProps = {};

const ModeSwitcher: React.FC<ModeSwitcherProps> = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <>
      <Stack direction="row">
        <Switch colorScheme="yellow" onChange={toggleColorMode} />
      </Stack>
    </>
  );
};

export default ModeSwitcher;
