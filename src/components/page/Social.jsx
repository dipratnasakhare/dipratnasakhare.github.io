import React, { useState } from "react";
import {
  Button,
  Flex,
  Spacer,
  useColorMode,
  Grid,
  Image,
  Text,
  Box,
  Icon,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";
import {
  SiGithub,
  SiCodesandbox,
  SiHackerrank,
  SiAboutdotme,
} from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { GiSkills } from "react-icons/gi";
import { AiOutlineContacts } from "react-icons/ai";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

const Social = () => {
  let name = "Full Stack Developer";
  const lanuauges = [
    { icon: SiGithub, link: "https://github.com/dipratnasakhare" },
    {
      icon: FaLinkedinIn,
      link: "https://www.linkedin.com/in/dipratna-sakhare/",
    },
    { icon: SiCodesandbox, link: "https://codesandbox.io/u/dipratnasakhare" },
    { icon: SiHackerrank, link: "https://www.hackerrank.com/rickysakhare677" },
  ];

  const HomePage = [
    // { icon: BiHomeAlt, topath: "/" },
    { icon: SiAboutdotme, topath: "/about" },
    { icon: GiSkills, topath: "/skills" },
    { icon: BsGithub, topath: "/github" },
    { icon: AiOutlineFundProjectionScreen, topath: "/project" },
    { icon: AiOutlineContacts, topath: "/contact" },
  ];

  return (
    <div>
      <Flex
        position={"fixed"}
        w={["0%", "100%"]}
        display={["none", "flex"]}
        p={5}
        mt="15rem"
        alignItems="center"
        gap="2"
      >
        {/* <Box p="2"> */}
        <Grid gap={8}>
          {lanuauges.map((ele) => {
            return (
              <a href={ele.link} target="_blank">
                <Button>
                  <Icon boxSize="1.5rem" as={ele.icon} />
                </Button>
              </a>
            );
          })}
          <a
            href={"https://drive.google.com/file/d/1G4Kiz_dQ0KhSNRXm1Af6zhozyq9mS4Hy/view?usp=sharing"}
            target="_blank"
            rel="noopener"
          >
            <Button>
              <Image
                w="1.5rem"
                borderRadius={"100%"}
                src="https://png.pngtree.com/png-clipart/20190705/original/pngtree-vector-resume-icon-png-image_4187299.jpg"
              />
            </Button>
          </a>
        </Grid>

        <Spacer />
        {/* <Grid gap={8}>
          {HomePage.map((ele) => {
            return (
              <Link to={ele.topath}>
                <Button>
                  <Icon boxSize="1.5rem" as={ele.icon} />
                </Button>
              </Link>
            );
          })}
          <Button size="sm" onClick={toggleColorMode}>
            <div onClick={() => setbool(!bool)}>
              {!(colorMode === "light") ? (
                <Icon boxSize="1.5rem" as={BsSun} />
              ) : (
                <Icon boxSize="1.5rem" as={BiMoon} />
              )}
            </div>
          </Button>
        </Grid> */}
        <Box mr="-80px">
          <Text fontSize={"20px"} style={{ transform: `rotate(90deg)` }}>
            {name}
          </Text>
        </Box>
      </Flex>
    </div>
  );
};

export default Social;
