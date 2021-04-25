import { Box, Heading, HStack, Icon, Text, Tooltip } from "@chakra-ui/react";
import React from "react";
import {
  SiGit,
  SiJavascript,
  SiNextDotJs,
  SiReact,
  SiTypescript,
} from "react-icons/si";

type TechnologyIconProps = {
  color: string;
  icon: React.ElementType<any>;
  hover?: string;
};
const TechnologyIcon = ({ icon, color, hover }: TechnologyIconProps) => {
  return (
    <Tooltip label={hover} placement="bottom">
      <span>
        <Icon
          boxSize={8}
          as={icon}
          color="gray"
          _hover={{ color: color }}
          transition=".2s"
        ></Icon>
      </span>
    </Tooltip>
  );
};

export const About = () => {
  return (
    <Box maxW="1000px" mx="auto" my={20} px={5} py={10}>
      <Heading my={5}>Über Mich</Heading>
      <Text>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet.
      </Text>
      <Box py={5}>
        <Heading size="md">Technologien:</Heading>
        <HStack pt={3}>
          <TechnologyIcon color="blue" icon={SiTypescript} hover="Typescript" />
          <TechnologyIcon
            color="yellow"
            icon={SiJavascript}
            hover="Javascript"
          />
          <TechnologyIcon color="lightblue" icon={SiReact} hover="ReactJs" />
          <TechnologyIcon color="black" icon={SiNextDotJs} hover="NextJs" />
          <TechnologyIcon color="orange" icon={SiGit} hover="Git" />
        </HStack>
      </Box>
    </Box>
  );
};
