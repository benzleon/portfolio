import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, Text, VStack } from "@chakra-ui/layout";
import React from "react";
import { SocialButtons } from "./SocialButton";

export const Footer = () => {
  const bg = useColorModeValue("gray.200", "gray.600");
  return (
    <Box w="full" bg={bg}>
      <Box maxW="800px" mx="auto" p={5}>
        <VStack>
          <Box mb={5}>
            <SocialButtons></SocialButtons>
          </Box>
          <Text>&#169; 2021 by Leon Benz</Text>
        </VStack>
      </Box>
    </Box>
  );
};
