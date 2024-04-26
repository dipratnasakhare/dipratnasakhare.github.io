import {
  Heading,
  Box,
  Text,
  Flex,
  Icon,
  SimpleGrid,
  ScaleFade,
} from "@chakra-ui/react";
import { useRef } from "react";
import { useInViewport } from "react-in-viewport";
import { DiCss3, DiJavascript1 } from "react-icons/di";
import { FaHtml5, FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiVercel,
  SiNetlify,
  SiVisualstudiocode,
} from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
function Skills() {
  const ref = useRef(null);
  const { enterCount } = useInViewport(
    ref,
    { rootMargin: "-300px" },
    { disconnectOnLeave: false },
  );

  const lanuauges2 = [
    { lang: "HTML", icon: FaHtml5 },
    { lang: "CSS", icon: DiCss3 },
    { lang: "Javascript", icon: DiJavascript1 },
    { lang: "React", icon: FaReact },
    { lang: "TypeScript", icon: SiTypescript },
    { lang: "Node.js", icon: FaNodeJs },
    { lang: "ExpressJS", icon: SiExpress },
    { lang: "MongoDb", icon: SiMongodb },
  ];

  const Tools = [
    { lang: "Postman", icon: SiPostman },
    { lang: "Vercel", icon: SiVercel },
    { lang: "GitHub", icon: AiFillGithub },
    { lang: "Netlify", icon: SiNetlify },
    { lang: "vsCode", icon: SiVisualstudiocode },
  ];

  return (
    <ScaleFade initialScale={0.9} in={enterCount > 0}>
      <section id="skills"></section>

      <Box pt={["8rem", "3rem", "6rem"]} pb="4rem" ref={ref}>
        <Heading
          p="10px"
          border={"1px solid green"}
          color={"#ccd6f6"}
          w="90%"
          m="auto"
        >
          Skills
        </Heading>

        <Flex gap={[10, 40, 45]} m="auto" mt={["3rem", "4rem", "4rem"]}>
          <SimpleGrid columns={[1, 2, 2, 4]} spacing={10} m="auto">
            {lanuauges2.map((ele) => {
              return (
                <Box pr="5px">
                  <Flex>
                    <Box>
                      <Icon boxSize="2rem" as={ele.icon} />
                    </Box>
                    <Box m="auto" ml="8px">
                      <Text fontSize="2xl">{ele.lang}</Text>
                    </Box>
                  </Flex>
                </Box>
              );
            })}
          </SimpleGrid>
        </Flex>
      </Box>

      <Box pt={["2rem"]} pb="4rem" ref={ref}>
        <Heading>Tools</Heading>

        <Flex gap={[10, 40, 45]} m="auto" mt={["3rem", "4rem", "4rem"]}>
          <SimpleGrid columns={[1, 2, 2, 4]} spacing={10} m="auto">
            {Tools.map((ele) => {
              return (
                <Box pr="5px">
                  <Flex>
                    <Box>
                      <Icon boxSize="2rem" as={ele.icon} />
                    </Box>
                    <Box m="auto" ml="8px">
                      <Text fontSize="2xl">{ele.lang}</Text>
                    </Box>
                  </Flex>
                </Box>
              );
            })}
          </SimpleGrid>
        </Flex>
      </Box>
    </ScaleFade>
  );
}

export default Skills;
