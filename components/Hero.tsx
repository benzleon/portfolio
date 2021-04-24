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
    <Box h={wrap ? "" : "100vh"}>
      <Center h="full">
        <Box pt={pt} d={display} maxW="1000px">
          <Center w={wrap ? "" : "50%"}>
            <Stack alignItems="center" m={8} spacing={8}>
              <Heading size="2xl" textAlign="center">
                Hallo, ich bin{" "}
                <Text d="inline" color="green.400">
                  Leon Benz
                </Text>
                ,<Text> Frontend Entwickler aus Deutschland.</Text>
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
            maxH="400px"
            mx={ml}
            px={wrap ? "20px" : ""}
            my="auto"
            src="undraw_feeling_proud_qne1.svg"
          ></Image>
        </Box>
      </Center>
    </Box>
  );
};
