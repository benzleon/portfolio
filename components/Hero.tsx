import { Box, Button, Center, Heading, Text } from "@chakra-ui/react";
import React from "react";

export const Hero = () => {
  return (
    <Box h="100vh">
      <Center h="full">
        <Box m={8}>
          <Heading mb={8} size="2xl" textAlign="center">
            Hallo, ich bin{" "}
            <Text d="inline" color="green.400">
              Leon Benz
            </Text>
            .<Text>ein leidenschaftlicher Frontend Entwickler.</Text>
          </Heading>
          <Center>
            <Button colorScheme="green" size="lg" fontSize="xl">
              Meine Projekte
            </Button>
          </Center>
        </Box>
      </Center>
    </Box>
  );
};
