import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import {
  Badge,
  Box,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/media-query";
import React from "react";

type ProjectProps = {
  image: string;
  title: string;
  description: string;
  year: string;
  url: string;
};
const Project = ({ image, title, description, year, url }: ProjectProps) => {
  const cols = useBreakpointValue({ base: 1, md: 2 });
  const textAlign: "center" | "left" = useBreakpointValue({
    base: "center",
    md: "left",
  });
  const ml = useBreakpointValue({ base: 0, md: 10 });
  const py = useBreakpointValue({ base: 10, md: 0 });
  return (
    <Box w="full" py={5}>
      <SimpleGrid columns={cols}>
        <Image src={image}></Image>
        <Box ml={ml} my="auto" textAlign={textAlign} py={py}>
          <Heading mb={5} size="lg">
            {title}{" "}
            <Badge fontSize={15} color="green">
              {year}
            </Badge>
          </Heading>
          <Text mb={5}>{description}</Text>
          <Button onClick={() => window.open(url)} colorScheme="green">
            Seite öffnen
          </Button>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export const Projects = () => {
  return (
    <Box maxW="800px" mx="auto" px={5} py={10} id="projects">
      <Heading my={5}>Projekte</Heading>
      <VStack spacing={10}>
        <Project
          image="greenbite.png"
          title="Greenbite"
          description="Eine Webseite zur Inspiration zum Thema Nachhaltigkeit"
          year="2021"
          url="https://greenbite.vercel.app"
        />
        <Project
          image="securit.png"
          title="Securit"
          description="Eine Web-Anwendung um Passwörter zu verwalten"
          year="2020"
          url="https://securit-25055.web.app"
        />
      </VStack>
    </Box>
  );
};
