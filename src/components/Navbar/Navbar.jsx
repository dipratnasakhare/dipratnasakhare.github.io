import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  ButtonGroup,
  Spacer,
} from "@chakra-ui/react";
import React from "react";
import logo from "../Images/logo.png"

export const Navbar = () => {
  return (
    <Flex
      position={"fixed"}
      w={"100%"}
      p={5}
      border={"1px solid red"}
      alignItems="center"
      gap="2"
    >
      <Box p="2">
        <Image src={logo} width="60px" alt="logo"/>
      </Box>
      <Spacer />
      <ButtonGroup gap="2">
        <Button colorScheme="teal">Home</Button>
        <Button colorScheme="teal">About</Button>
        <Button colorScheme="teal">Skill</Button>
        <Button colorScheme="teal">Project</Button>
        <Button colorScheme="teal">Contact</Button>
      </ButtonGroup>
    </Flex>
  );
};
