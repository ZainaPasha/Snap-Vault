import React from "react";
import { Container, Flex, HStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { MdOutlineAddAPhoto } from "react-icons/md";
import { IconButton } from "@chakra-ui/react";
import { ColorModeButton } from "@/components/ui/color-mode";


const Navbar = () => {
  
  return (
    <Container
      maxW={"1140px"}
      px={4}
      marginBlock={4}
      bg={{ base: "white", _dark: "transparent" }}
      border={{ _dark: "2px solid yellow" }}
    >
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base: "column",
          sm: "row",
        }}
      >
        <Text
          fontSize={{ base: "22", sm: "28" }}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          textAlign={"center"}
          bg="linear-gradient(to right, orange, yellow)"
          bgClip="text"
          color="transparent"
        >
          <Link to={"/"}>Snap Vault</Link>
        </Text>

        <HStack spacing={2} alignItems={"center"}>
          <Link to={"/create"}>
            <IconButton
              key={"surface"}
              variant={"surface"}
              borderWidth="1px"
              borderColor="gray.500"
              border={{ _dark: "1px solid yellow" }}
            >
              <MdOutlineAddAPhoto />
            </IconButton>
          </Link>
          <ColorModeButton
            size="md"
            borderWidth="1px"
            borderColor="gray.500"
            border={{ _dark: "1px solid yellow" }}
          />
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
