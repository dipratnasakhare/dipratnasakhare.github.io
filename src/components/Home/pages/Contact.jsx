import {
  Box,
  Button,
  Grid,
  Heading,
  Icon,
  Input,
  Link,
  Text,
  Flex,
  ScaleFade
} from "@chakra-ui/react";
import React from "react";
import { useRef } from "react";
import { useInViewport } from "react-in-viewport";

import { CiLocationOn } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

export const Contact = () => {
  const address = [
    { logo: CiLocationOn, add: "Gondia Maharashtra"},
    { logo: BsTelephone, add:"91+ 9109760018" },
    { logo: AiOutlineMail , add:"dipratnasakhare11@gmail.com"},
  ];

  
  const ref = useRef(null);
  const { enterCount } = useInViewport(
    ref,
    { rootMargin: "-300px" },
    { disconnectOnLeave: false },
  );


  return (
    <ScaleFade
    initialScale={0.9}
    in={enterCount > 0}
  >
              <section id="contact"></section>

    <Box pt={["8rem","3rem","6rem"]} mb="4rem" ref={ref}>
     <Heading as="h3" color={"#ccd6f6"}  border={"1px solid green"} size="xl" p="10px" w="90%" m="auto">
        Contact
     </Heading>
 
      <br />
      <Grid  pt="3rem"   w={["100%", "60%", "60%"]} gap="10" m="auto" mb="3rem"  textAlign="start" >
        {address.map((ele) => {
          return (
           <Flex>
            <Link href={ele.link}>
              <Button position={"-moz-initial"}>
                <Icon boxSize="1.5rem" as={ele.logo} />
              </Button>
            </Link>
            <Text p="5px" pl="8px" fontSize='xl'>{ele.add}</Text>
           </Flex>
          );
        })}
      </Grid>

      <Box w="60%" gap="10" m="auto">
        <Input
          borderRadius={"0px"}
          border="1px solid black"
          mb="8"
          h="45px"
          placeholder="Name"
          size="sm"
        />
        <Input
          borderRadius={"0px"}
          border="1px solid black"
          mb="8"
          h="45px"
          placeholder="Email"
          size="sm"
        />
        <Input
          borderRadius={"0px"}
          border="1px solid black"
          mb="8"
          h="45px"
          placeholder="Subject"
          size="sm"
        />
        <Input
          borderRadius={"0px"}
          border="1px solid black"
          mb="8"
          h="45px"
          placeholder="Message"
          size="sm"
        />
        <Button borderRadius={"0px"}
          w="100%"         
          h="45px"
          size="sm" colorScheme='teal' >
            Submit
  </Button>
      </Box>
    </Box>
    </ScaleFade>
  );
};
