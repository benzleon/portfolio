import {
  Box,
  Button,
  Center,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import { SocialButtons } from "./SocialButton";

export const Hero = () => {
  const wrap = useBreakpointValue({ base: true, lg: false });
  const pt = useBreakpointValue({ base: 20, lg: 0 });
  const display = useBreakpointValue({ base: "block", lg: "flex" });
  const ml = useBreakpointValue({ base: "auto", lg: "20px" });
  return (
    <Box>
      <Center h="full">
        <Box pt={36} maxW="1000px">
          <Center>
            <Stack alignItems="center" m={8} spacing={8}>
              <Heading size="2xl" textAlign="center">
                <Text d="inline" color="green.400">
                  Leon Benz
                </Text>{" "}
                - Frontend Entwickler
              </Heading>
              <Text fontSize="xl" color="gray">
                Frontend - TypeScript - React
              </Text>
              <SocialButtons />
              <Box>
                <Button colorScheme="green" size="lg" fontSize="xl">
                  Meine Projekte
                </Button>
              </Box>
            </Stack>
          </Center>
          <Image
            maxH="500px"
            mx="auto"
            px={5}
            pt={10}
            my="auto"
            src="undraw_feeling_proud_qne1.svg"
          ></Image>
        </Box>
      </Center>
    </Box>
  );
};
