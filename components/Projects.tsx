import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/layout";
import React from "react";

const Project = () => {
  return (
    <Box rounded="md" w="full" h="200px" bg="gray.200" p={5}>
      <Heading size="md">Project</Heading>
      <Text>Eine Webseite </Text>
    </Box>
  );
};

export const Projects = () => {
  return (
    <Box maxW="800px" mx="auto" mb={20}>
      <Heading py={5}>Projekte</Heading>
      <Project />
    </Box>
  );
};
