import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { SocialButtons } from "./SocialButton";

export const Hero = () => {
  return (
    <Box h="100vh">
      <Center h="full">
        <Stack alignItems="center" m={8} spacing={8}>
          <Heading size="2xl" textAlign="center">
            Hallo, ich bin{" "}
            <Text d="inline" color="green.400">
              Leon Benz
            </Text>
            ,<Text>ein leidenschaftlicher Frontend Entwickler.</Text>
          </Heading>
          <SocialButtons />
          <Box>
            <Button colorScheme="green" size="lg" fontSize="xl">
              Meine Projekte
            </Button>
          </Box>
        </Stack>
      </Center>
    </Box>
  );
};
