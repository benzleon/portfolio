import { Icon, Tooltip } from "@chakra-ui/react";
import React from "react";

export const COLORS = {
  react: "#61dafb",
  next: "black",
  js: "#fcdc00",
  ts: "#3178c6",
  git: "#f14e32",
  html: "#f16529",
  css: "#2965f1",
  firebase: "#FFCA28",
};

type TechnologyIconProps = {
  color: string;
  icon: React.ElementType<any>;
  hover?: string;
};
export const TechnologyIcon = ({ icon, color, hover }: TechnologyIconProps) => {
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
