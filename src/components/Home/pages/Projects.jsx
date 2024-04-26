import {
  Container,
  SimpleGrid,
  // Image,
  Flex,
  // Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  Badge,
  IconButton,
  Button,
  ScaleFade,
} from "@chakra-ui/react";

import { useRef } from "react";
import { useInViewport } from "react-in-viewport";
import { Box, Heading, Image } from "@chakra-ui/react";

import perfectpetals from "../../Images/Projects/perfectpetals.png";
import Bluemucurt from "../../Images/Projects/Bluemecurry.png";
import bestbuy from "../../Images/Projects/bestbuy.png";
import dearmstore from "../../Images/Projects/dreamstrore.png";

import React from "react";

import { SiGithub, SiNetlify, SiVercel } from "react-icons/si";

const Projects = () => {
  const ref = useRef(null);
  const { enterCount } = useInViewport(
    ref,
    { rootMargin: "-300px" },
    { disconnectOnLeave: false },
    {}
  );

  let Projects = [
    {
      name: "Perfect Petals",
      img: perfectpetals,
      lang: ["React", "Chakra-UI", "Express", "Mongoose"],
      data: "The Perfect Petals website makes it easy to shop for various types of flowers, you can buy flowers by website and mobile",
      myself:
        "On this project, I worked individually on this website Users can add the product to the cart, the user has a wishlist, and the user can comment on products and ratings. user can change their password. Admin are can track user Details and orders. Admin can add and edit products",
      lanuauges: [
        {
          icon: SiGithub,
          link: "https://github.com/dipratnasakhare/Style_Capsule_PRDProject",
        },
        {
          icon: SiVercel,
          link: "https://stylecapsule-dipratnasakhare.vercel.app",
        },
      ],
    },
    {
      name: "DearmStore",
      img: dearmstore,
      lang: ["React", "Chakra-UI"],
      data: "The Dermstore app makes it easy to shop for all your favorite skincare, hair care and beauty products from your mobile device",
      myself:
        "On this project, I worked individually, it takes 5 days to build completely. There is all pages are responsive, for product data using a Mock-Server. It includes all header tabs which are responsive we can add the product to the cart",
      lanuauges: [
        {
          icon: SiGithub,
          link: "https://github.com/dipratnasakhare/debonair-surprise-3863",
        },
        {
          icon: SiNetlify,
          link: "https://6370db3f42049a3981369b9a--exquisite-cactus-9e08bd.netlify.app",
        },
      ],
    },
    {
      name: "BestBuy",
      img: bestbuy,
      lang: ["React", "Chakra-UI"],
      data: "About Best Buy Co. Inc. is an American multinational consumer electronics retailer headquartered in Richfield, Minnesota",
      myself:
        "On this project, I worked individually. In this project, I build  Home Page, Navbaar, Footer, and slider for product data. As Back-end using Mock-Server",
      lanuauges: [
        {
          icon: SiGithub,
          link: "https://github.com/dipratnasakhare/ludicrous-range-5121",
        },
        { icon: SiVercel, link: "https://y-dipratnasakhare.vercel.app/" },
      ],
    },
    {
      name: "Bluemucury",
      img: Bluemucurt,
      lang: ["HTML", "CSS", "Javascript"],
      data: "Bluemercury.com is a leading luxury beauty retailer offering the best cosmetics, skincare, makeup, perfume, hair, and bath and body.",
      myself:
        "On This project, I work with the group. In this project, my part is to build a home page it containing a slider which I built using set interval and for product data, I am using mock-server",

      lanuauges: [
        { icon: SiGithub, link: "https://github.com/KKShakya/BlueMercury" },
        { icon: SiVercel, link: "https://spiffy-table-3415.vercel.app" },
      ],
    },
  ];

  return (
    <>
      <section id="project"></section>

      <Box pt={["8rem", "3rem", "6rem"]} pb="4rem">
        <Heading
          as="h3"
          border={"1px solid green"}
          size="xl"
          color={"#ccd6f6"}
          p="10px"
          w="90%"
          m="auto"
        >
          Projects
        </Heading>

        <ScaleFade initialScale={0.9} in={enterCount > 0}>
          <Box w="90%" mt="8rem" m="auto" ref={ref}>
            {Projects.map((ele) => {
              return (
                <Container maxW={"6xl"} py={12} mb="3rem">
                  <SimpleGrid
                    border="1px solid"
                    borderRadius={"10px"}
                    p="25px"
                    columns={[1, 1, 1, 2]}
                    spacing={10}
                  >
                    <Stack spacing={4} position={"-moz-initial"}>
                      <Heading position={"revert-layer"} color={"#8892b0"}>
                        {ele.name}
                      </Heading>
                      <Text color={"gray.500"} fontSize={"lg"}>
                        {ele.data}
                      </Text>
                      <Text
                        boxShadow="2xl"
                        p="6"
                        position="absulute"
                        rounded="md"
                        bg="teal.500"
                      >
                        {ele.myself}
                      </Text>

                      <SimpleGrid gap="10px" columns={[2, 2, 4]}>
                        {ele.lang.map((lan) => {
                          return (
                            <Badge
                              w="auto"
                              variant="outline"
                              colorScheme="green"
                            >
                              {lan}
                            </Badge>
                          );
                        })}
                      </SimpleGrid>
                      <Box display={"flex"} gap={"4"}>
                        {ele.lanuauges.map(({ icon, link }) => {
                          return (
                            <Flex>
                              <a href={link} target="_blank">
                                <Button>
                                  <Icon boxSize="1.5rem" as={icon} />
                                </Button>
                              </a>
                              {/* <Icon boxSize="1.5rem" as={icon} /> */}
                            </Flex>
                          );
                        })}
                      </Box>

                      <Stack
                        spacing={4}
                        divider={
                          <StackDivider
                          // borderColor={useColorModeValue("gray.100", "gray.700")}
                          />
                        }
                      ></Stack>
                    </Stack>

                    <Flex h={[null, null, "18rem"]}>
                      <Image
                        rounded={"lg"}
                        alt={"feature image"}
                        src={ele.img}
                        objectFit={"cover"}
                      />
                    </Flex>
                  </SimpleGrid>
                </Container>
              );
            })}
          </Box>
        </ScaleFade>
      </Box>
    </>
  );
};

export default Projects;
