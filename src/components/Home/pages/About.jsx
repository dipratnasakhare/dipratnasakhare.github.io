import {
  Heading,
  Text,
  Box,
  SimpleGrid,
  Image,
  ScaleFade,
} from "@chakra-ui/react";
import React from "react";
import { useRef } from "react";
import { useInViewport } from "react-in-viewport";
import profile from "../../Images/profile.JPG";
const About = () => {
  const ref = useRef(null);
  const { enterCount } = useInViewport(
    ref,
    { rootMargin: "-300px" },
    { disconnectOnLeave: false }
  );

  return (
    <ScaleFade
      initialScale={0.9}
      in={enterCount > 0}
      // pt="2rem"
    >
      <section id="about"></section>

      <Box pt={["8rem", "3rem", "6rem"]} pb="4rem" ref={ref}>
        <Heading
          p="10px"
          border={"1px solid green"}
          color={"#ccd6f6"}
          w="90%"
          m="auto"
        >
          About
        </Heading>

        <SimpleGrid
          m="auto"
          w="80%"
          columns={[1, 1, 1, 2]}
          mt={["1.5rem", "3rem"]}
          spacing={10}
        >
          <Box w="100%" m="auto">
            <Box>
              <Text textAlign={"start"} fontSize="lg" color={"#8892b0"}>
                Hello! I am Dipratna Sakhare my interest in web development
                starts in jan 2022 when I join hacking bootcamp i saw there they
                are using some code to create malware and i think it is very
                awesome then i decided to learn coding but it is new to me then
                i talk with my brother he suggest me to do Masai course Beacuase
                he already working as software developer in reputed company
                before joining masai. I am very scared about coding that how to
                do it because everyone says coding is very hard. But, when i
                started to doing it. I didn't know when i fall in love with my
                coding. I am very thankful to brother who suggest me about "THE
                WORD OF CODING"....
              </Text>
            </Box>
          </Box>

          <Box w={"60%"} m="auto">
            <Image borderRadius={"8px"} src={profile} />
          </Box>
        </SimpleGrid>
      </Box>
    </ScaleFade>
  );
};

export default About;
