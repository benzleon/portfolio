import { HStack, Icon, IconButton } from "@chakra-ui/react";
import React from "react";
import { ThemeTypings } from "@chakra-ui/styled-system";
import { FaGithub, FaLinkedinIn, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import useBackgroundColor from "../helpers/useBackgroundColor";

type SocialButtonProps = {
  account: ThemeTypings["colorSchemes"] | (string & {});
  icon: React.ElementType<any>;
  href?: string;
};

const SocialButton = ({ account, icon, href }: SocialButtonProps) => {
  const backgroundColor = useBackgroundColor();
  return (
    <IconButton
      as="a"
      size="lg"
      backgroundColor={account + ".500"}
      color="white"
      aria-label={account}
      icon={<Icon as={icon} />}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      _hover={{
        color: account + ".500",
        backgroundColor: backgroundColor,
      }}
    ></IconButton>
  );
};

export const SocialButtons = () => {
  return (
    <HStack>
      <SocialButton
        account="whatsapp"
        icon={FaWhatsapp}
        href="https://api.whatsapp.com/send?phone=491784935503"
      ></SocialButton>
      <SocialButton
        account="linkedin"
        icon={FaLinkedinIn}
        href="https://www.linkedin.com/in/leon-benz-204224211/"
      ></SocialButton>
      <SocialButton
        account="gray"
        icon={FaGithub}
        href="https://github.com/benzleon"
      ></SocialButton>
      <SocialButton
        account="purple"
        icon={AiOutlineMail}
        href="mailto:benzleon02@gmail.com"
      ></SocialButton>
    </HStack>
  );
};
