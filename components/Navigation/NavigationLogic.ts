import { useColorMode, useColorModeValue } from "@chakra-ui/react";

export const HeaderLogic = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const backgroundColor = useColorModeValue("white", "gray.800");

  return { colorMode, toggleColorMode, backgroundColor };
};
