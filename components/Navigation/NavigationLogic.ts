import { useColorMode } from "@chakra-ui/react";
import React from "react";
import useBackgroundColor from "../../helpers/useBackgroundColor";
import useWindowSize from "../../helpers/useWindowSize";

export const NavigationLogic = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const backgroundColor = useBackgroundColor();
  const size = useWindowSize();
  const [burgerMenu, setBurgerMenu] = React.useState(true);

  React.useEffect(() => {
    setBurgerMenu(size.width < 800);
  }, [size.width]);

  return { colorMode, toggleColorMode, backgroundColor, burgerMenu };
};
