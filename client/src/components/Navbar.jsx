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
    bg={{
      base: "orange.50", 
      _dark: "gray.800", 
    }}
    borderRadius="md" 
    boxShadow="md" 
    borderWidth="1px" 
    borderColor={{ base: "orange.200", _dark: "yellow.500" }} 
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
          bg={{base:"orange"}}
          bgClip="text"
         
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
