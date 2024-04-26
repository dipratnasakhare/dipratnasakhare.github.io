import { Box, Button, Heading, Text } from "@chakra-ui/react";
import React from "react";
import About from "./pages/About";
import { Contact } from "./pages/Contact";
import Projects from "./pages/Projects";
import { Github } from "./pages/github";
import Skills from "./pages/Skills";

export const Home = () => {
  return (
    <Box w={["100%", "75%", "75%", "85%"]} pl="2rem" m="auto" pt="5rem">
      <section id="home"></section>
      <Box
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        p="3px"
        width={"100%"}
        backgroundSize="100%"
        mb={["6rem", "15rem"]}
      >
        {/* name section  */}
        <Box w={["100%", "90%"]} mt={["3rem", "8rem"]}>
          <Box
            gridGap={2}
            justifyContent="space-between"
            w={["90%", "100%"]}
            alignItems={"start"}
            m={"auto"}
            gap={"8px"}
          >
            <Box mb="20px" mt="8rem">
              <Heading
                textAlign={"start"}
                color={"teal"}
                m="auto"
                as="h2"
                size="xl"
                w={["90%", "100%"]}
                noOfLines={1}
              >
                Hi, my name is
              </Heading>
            </Box>

            <Box mb="15px">
              {" "}
              <Heading
                as="h2"
                w={["90%", "100%"]}
                m="auto"
                textAlign={"start"}
                size="3xl"
                color={"#ccd6f6"}
              >
                Dipratna Sakhare
              </Heading>
            </Box>

            <Box mb="25px">
              {" "}
              <Heading
                as="h2"
                w={["90%", "100%"]}
                m="auto"
                textAlign={"start"}
                size="3xl"
                color={"#8892b0"}
              >
                I build things for the web.
              </Heading>
            </Box>

            <Box mb="30px">
              <Heading
                w={["90%", "100%"]}
                m="auto"
                as="h4"
                textAlign={"start"}
                size="md"
                color={"#8892b0"}
              >
                {/* <Text>
                  “To Solve problem you did't need any degree it come from
                  understanding problem if you are able to understand problem
                  then your are able to solve problem.”
                </Text> */}
              </Heading>
            </Box>

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
                <Button colorScheme="teal" m="auto" variant="outline">
                  <Text pr="8px"> Resume</Text>
                </Button>
              </a>
            </Box>
          </Box>
        </Box>

        {/* image section  */}
      </Box>

      <About />
      <Skills />
      <Github />
      <Projects />
      <Contact />
    </Box>
  );
};
