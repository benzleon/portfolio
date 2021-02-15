import { useColorModeValue } from "@chakra-ui/react";

const useBackgroundColor = () => {
  const backgroundColor = useColorModeValue("white", "gray.800");
  return backgroundColor;
};

export default useBackgroundColor;
