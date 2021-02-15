import { useColorMode, useColorModeValue } from "@chakra-ui/react";
import useBackgroundColor from "../../helpers/useBackgroundColor";
import useWindowSize from "../../helpers/useWindowSize";

export const NavigationLogic = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const backgroundColor = useBackgroundColor();
  const size = useWindowSize();
  const burgerMenu = size.width < 535;

  return { colorMode, toggleColorMode, backgroundColor, burgerMenu };
};
