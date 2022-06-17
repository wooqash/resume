import { useEffect, useState } from "react";
import {
  Box,
  Center,
  Divider,
  HStack,
  Icon,
  IconButton,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import { isMobile } from "react-device-detect";

import LangSwitcher from "../LangSwitcher";
import ModeSwitcher from "../ModeSwitcher";
import SocialMenu from "../SocialMenu";
import MainMenu from "../MainMenu/MainMenu";
import { FiChevronsDown, FiChevronsUp } from "react-icons/fi";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  const { colorMode } = useColorMode();
  const menuBgColor = colorMode === "light" ? "gray.50" : "gray.700";

  const [stickyTopNavAnimation, setStickyTopNavAnimation] = useState(false);
  const [stickyBottomNavAnimation, setStickyBottomNavAnimation] =
    useState(false);

  const [mobileNavAnimation, setMobileNavAnimation] = useState(false);
  const [desktopNavAnimation, setDesktopNavAnimation] = useState(false);

  const [scrollDownButtonAnimation, setScrollDownButtonAnimation] =
    useState(false);
  const [scrollTopButtonAnimation, setScrollTopButtonAnimation] =
    useState(false);

  const onScrollDownHandle = () => {
    if (window) {
      window.scrollTo(0, window.innerHeight);
    }
  };
  const onScrollTopHandle = () => {
    if (window) {
      window.scrollTo(0, 0);
    }
  };

  const setStickyBottomNav = () => {
    const scrollHeight = document?.querySelector("body")?.offsetHeight;
    const isScrollHeightIsNumber = typeof scrollHeight === "number";

    if (
      isMobile &&
      isScrollHeightIsNumber &&
      window.innerHeight >= scrollHeight
    ) {
      setStickyBottomNavAnimation(true);
      return;
    }

    setStickyBottomNavAnimation(false);
  };

  const setVisiblityScrollDownButton = () => {
    const scrollHeight = document?.querySelector("body")?.offsetHeight;
    const isScrollHeightIsNumber = typeof scrollHeight === "number";
    if (isScrollHeightIsNumber && window.innerHeight < scrollHeight) {
      setScrollDownButtonAnimation(true);
      return;
    }

    setScrollDownButtonAnimation(false);
  };

  const setStickyOnScroll = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;

      if (windowHeight > 50) {
        setStickyTopNavAnimation(true);
        setStickyBottomNavAnimation(true);
        setScrollDownButtonAnimation(false);
        setScrollTopButtonAnimation(true);
        return;
      }

      setStickyTopNavAnimation(false);
      setStickyBottomNavAnimation(false);
      setScrollTopButtonAnimation(false);
    }
  };

  const runNavAnimation = () => {
    if (window.innerWidth < 1024) {
      setMobileNavAnimation(true);
      setDesktopNavAnimation(false);
      return;
    }

    setMobileNavAnimation(false);
    setDesktopNavAnimation(true);
  };

  const refreshNavAnimation = () => {
    setStickyBottomNav();
    runNavAnimation();
  };

  useEffect(() => {
    runNavAnimation();
    setStickyBottomNav();
    setVisiblityScrollDownButton();
    window.addEventListener("scroll", setStickyOnScroll);
    window.addEventListener("resize", refreshNavAnimation);

    return () => {
      window.removeEventListener("scroll", setStickyOnScroll);
      window.removeEventListener("resize", refreshNavAnimation);
    };
  }, [refreshNavAnimation]);

  return (
    <nav>
      <Box
        backgroundColor={menuBgColor}
        display={{ base: "block", lg: "none" }}
        height="72px"
        left="0"
        opacity="0.8"
        pos="fixed"
        top={{ base: stickyTopNavAnimation ? 0 : "-100%", lg: 0 }}
        transition="1s ease-out top"
        width="100%"
        zIndex="9"
      />
      <HStack
        position="fixed"
        right={{
          base: mobileNavAnimation ? 4 : "-100%",
          lg: desktopNavAnimation ? 8 : "-100%",
        }}
        spacing="3"
        top={{ base: 4, lg: 8 }}
        transition="1s ease-out right"
        zIndex="11"
      >
        <ModeSwitcher />
        <Center height="20px">
          <Divider orientation="vertical" borderColor="teal.600" />
        </Center>
        <LangSwitcher />
        <Stack
          bottom={{ base: "auto", lg: 8 }}
          left={{ base: mobileNavAnimation ? 4 : "-100%", lg: "auto" }}
          position="fixed"
          marginInlineStart="0 !important"
          right={{ base: "auto", lg: desktopNavAnimation ? 8 : "-100%" }}
          top={{ base: 4, lg: "auto" }}
          transition={{ base: "1s ease-out left", lg: "1s ease-out right" }}
          zIndex="11"
        >
          <SocialMenu />
        </Stack>
      </HStack>
      <Stack
        alignItems="center"
        backgroundColor={{ base: menuBgColor, lg: "transparent" }}
        bottom={{ base: stickyBottomNavAnimation ? 0 : "-100%", lg: 0 }}
        display="flex"
        flexDir={{ base: "row", lg: "column" }}
        height={{ base: "auto", lg: "100%" }}
        justifyContent={{ base: "flex-start", lg: "center" }}
        position="fixed"
        right={{ base: 0, lg: desktopNavAnimation ? 8 : "-100%" }}
        transition={{ base: "1s ease-out bottom", lg: "1s ease-out right" }}
        width={{ base: "100%", lg: "auto" }}
        zIndex="10"
      >
        <MainMenu />
      </Stack>
      <IconButton
        aria-label="Scroll down"
        icon={<FiChevronsDown />}
        pos="fixed"
        bottom="4"
        left="50%"
        transform="translateX(-50%)"
        zIndex="8"
        opacity={{ base: scrollDownButtonAnimation ? 1 : 0, lg: 0 }}
        onClick={onScrollDownHandle}
      />
      <IconButton
        aria-label="Scroll top"
        icon={<FiChevronsUp />}
        pos="fixed"
        bottom={{ base: 24, lg: 20 }}
        right={{ base: 4, lg: 8 }}
        zIndex={{ base: 8, lg: 12 }}
        opacity={scrollTopButtonAnimation ? 1 : 0}
        onClick={onScrollTopHandle}
      />
    </nav>
  );
};

export default Navbar;
