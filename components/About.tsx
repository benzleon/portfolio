import { Box, ColorModeScript, Heading, HStack, Text } from "@chakra-ui/react";
import React from "react";
import {
  SiCss3,
  SiFirebase,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiTypescript,
} from "react-icons/si";
import { COLORS, TechnologyIcon } from "./TechnologyIcon";

export const About = () => {
  return (
    <Box maxW="800px" mx="auto" px={5} py={10} id="about">
      <Heading my={5}>Über Mich</Heading>
      <Text fontSize="lg">
        Hallo ich bin Leon Benz, ein selbsterlernter Frontendentwickler in der
        Nähe von Mönchengladbach. Webseiten entwickeln ist mein
        leidenschafliches Hobby, was ich momentan noch neben dem Abitur mache.
        Die Technologien, die ich in meinen Projekten in der Regel benutze sind:
      </Text>
      <Box py={5}>
        <HStack pt={3}>
          <TechnologyIcon color={COLORS.html} icon={SiHtml5} hover="HTML5" />
          <TechnologyIcon color={COLORS.css} icon={SiCss3} hover="CSS3" />
          <TechnologyIcon
            color={COLORS.js}
            icon={SiJavascript}
            hover="Javascript"
          />
          <TechnologyIcon
            color={COLORS.ts}
            icon={SiTypescript}
            hover="Typescript"
          />
          <TechnologyIcon color={COLORS.react} icon={SiReact} hover="React" />
          <TechnologyIcon
            color={COLORS.next}
            icon={SiNextdotjs}
            hover="Next.js"
          />
          <TechnologyIcon color={COLORS.git} icon={SiGit} hover="Git" />
          <TechnologyIcon
            color={COLORS.firebase}
            icon={SiFirebase}
            hover="Firebase"
          />
        </HStack>
      </Box>
    </Box>
  );
};
