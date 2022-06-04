import { extendTheme, theme as base } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
const theme = extendTheme({
  config: {
    initialColorMode: "dark",
  },
  colors: {
    teal: {
      "50": "#EBF9F9",
      "100": "#C8EDEF",
      "200": "#A4E1E5",
      "300": "#80D6DA",
      "400": "#5DCAD0",
      "500": "#39BEC6",
      "600": "#2E989E",
      "700": "#227277",
      "800": "#174C4F",
      "900": "#0B2628",
    },
  },
  fonts: {
    heading: `Poppins, ${base.fonts?.heading}, sans-serif`,
    body: `Open Sans, ${base.fonts?.body}, sans-serif`,
  },
  components: {
    Switch: {
      parts: ["track", "thumb"],
      baseStyle: (props: { colorMode: string }) => ({
        track: {
          background: "teal.600",
          _focus: {
            boxShadow: "0 0 0 3px rgba(93,202,208, 0.6)",
          },
        },
        thumb: {
          background: props.colorMode === "dark" ? "teal.600" : "teal.300",
        },
      }),
    },
    Button: {
      baseStyle: {
        fontFamily: `Poppins, ${base.fonts?.heading}, sans-serif`,
        fontWeight: "bold",
        textTransform: "uppercase",
      },
      variants: {
        brand: (props: { colorMode: string }) => ({
          bg: "teal.600",
          color: props.colorMode === "dark" ? "gray.800" : "gray.200",
          letterSpacing: "1px",
          _hover: {
            bg: "teal.700",
          },
          _focus: {
            bg: "teal.700",
            outlineColor: "teal.400",
          },
        }),
      },
      defaultProps: {
        variant: "brand",
      },
    },
    Menu: {
      parts: ["list", "item"],
      variants: {
        brand: (props: { colorMode: string }) => ({
          item: {
            bg: "transparent",
            borderRadius: "5px",
            _focus: {
              bg: "teal.600",
            },
          },
          button: {
            background: "teal.600",
            color: props.colorMode === "dark" ? "gray.800" : "gray.200",
          },
        }),
      },
      defaultProps: {
        variant: "brand",
      },
    },
    Heading: {
      variants: {
        brand: (props: { colorMode: string }) => ({
          color: props.colorMode === "dark" ? "teal.600" : "teal.400",
        }),
      },
    },
  },
});

export default theme;
