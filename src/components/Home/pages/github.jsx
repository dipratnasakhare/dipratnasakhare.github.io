import {
  Box,
  Center,
  Heading,
  Image,
  ScaleFade,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";
import { useRef } from "react";
import { useInViewport } from "react-in-viewport";

export const Github = () => {
  const ref = useRef(null);
  const { enterCount } = useInViewport(
    ref,
    { rootMargin: "-300px" },
    { disconnectOnLeave: false }
  );

  return (
    <ScaleFade initialScale={0.9} in={enterCount > 0}>
      <section id="github"></section>

      <Box p="2rem" pt={["8rem", "3rem", "6rem"]} pb="4rem" ref={ref}>
        <Heading
          as="h3"
          border={"1px solid green"}
          size="xl"
          color={"#ccd6f6"}
          p="10px"
          w="90%"
          m="auto"
        >
          Github Details
        </Heading>

        <Center mb="25px" mt="5rem">
          <Image src="http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=dipratnasakhare&theme=github" />
        </Center>
        <Center>
          <SimpleGrid columns={[1, 2, 2, 2]} spacing={10}>
            <Box>
              <Image src="http://github-profile-summary-cards.vercel.app/api/cards/stats?username=dipratnasakhare&theme=github" />
            </Box>
            <Box mb="1rem">
              <Image src="http://github-profile-summary-cards.vercel.app/api/cards/productive-time?username=dipratnasakhare&theme=github&utcOffset=8" />
            </Box>
          </SimpleGrid>
        </Center>
        <Center mt="2rem">
          <GitHubCalendar
            username="dipratnasakhare"
            blockSize={15}
            blockMargin={5}
            fontSize={16}
          />{" "}
        </Center>
      </Box>
    </ScaleFade>
  );
};
