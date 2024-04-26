import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  Spacer,
  useColorMode,
  Text,
  Icon,
  Center,
} from "@chakra-ui/react";
import { Link } from "react-scroll";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { BsSun } from "react-icons/bs";
import { BiMoon } from "react-icons/bi";

const Links = [
  { text: "Home", topath: "home" },
  { text: "About", topath: "about" },
  { text: "Skills", topath: "skills" },
  { text: "Github", topath: "github" },
  { text: "Project", topath: "project" },
  { text: "Contact", topath: "contact" },
];


export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box position={["fixed", "fixed", "fixed"]} width={"100%"}>
        <Flex
          h={"5rem"}
          p="25px"
          backgroundColor="teal"
          backdropFilter={"saturate(180% blur(10px)"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Avatar
            size={"lg"}
            src={"https://cdn-icons-png.flaticon.com/512/8133/8133826.png"}
          />

          <Spacer />
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={["flex", "flex", "flex", "none"]}
            onClick={isOpen ? onClose : onOpen}
          />

          <HStack spacing={8} alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={5}
              display={["none", "none", "none", "flex"]}
            >
              {Links.map(({ text, topath }) => (
                <Link activeClass="active" smooth spy to={topath}>
                  <Button colorScheme="teal">{text}</Button>
                </Link>
              ))}

              <Box textAlign={"start"}>
                <a
                  onClick={() => {
                    window.open(
                      "https://drive.google.com/file/d/1G4Kiz_dQ0KhSNRXm1Af6zhozyq9mS4Hy/view?usp=sharing"
                    );
                  }}
                  href="https://drive.google.com/uc?export=download&id=1G4Kiz_dQ0KhSNRXm1Af6zhozyq9mS4Hy"
                  download
                >
                  <Button colorScheme="teal" m="auto" >
                    <Text pr="8px"> Resume</Text>
                  </Button>
                </a>
              </Box>
            </HStack>
          </HStack>

          <Box ml="5">
            <Button onClick={toggleColorMode}>
              {!(colorMode === "light") ? (
                <Icon boxSize="1.5rem" as={BsSun} />
              ) : (
                <Icon boxSize="1.5rem" as={BiMoon} />
              )}
            </Button>
          </Box>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={["flex", "flex", "flex", "none"]}  bg="teal.500">
            <Box  w="80" m="auto">
         <Stack as={"nav"} spacing={5}  >
              {Links.map(({ text, topath }) => (
                <Link onClick={()=>onClose()} activeClass="active" smooth spy to={topath}>{text}</Link>
              ))}
            </Stack>
            </Box>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
