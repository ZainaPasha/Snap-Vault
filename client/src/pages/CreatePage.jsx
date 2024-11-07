import React from "react";
import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  VStack,
  
} from "@chakra-ui/react";
import { useState } from "react";
import { useSnapStore } from "../store/snap";
import { Toaster, toaster } from "@/components/ui/toaster"

const CreatePage = () => {
  const [newSnap, setNewSnap] = useState({
    title: "",
    description: "",
    image: "",
  });

  <Toaster />

  const { createSnap } = useSnapStore();

  const handleAddSnap = async () => {
    const { success, message } = await createSnap(newSnap);
    console.log("Success", success);
    console.log("Message", message);
    if (!success) {
      toaster.create({
        title: `Please fill in all the fields`,
        duration: 3000,
        type: "error",
      })
    } else {
      toaster.success({
        title: "Snap Created",
        description: "Your memory is safe in the Vault",
        duration: 3000,
        action: {
          label: "Undo",
          onClick: () => console.log("Undo"),
        },
      })
      
    setNewSnap({ title: "", description: "", image: "" });
  }};
  return (
    <Container maxW={"container.sm"}>
      <VStack spacing={8}>
        <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
          Create New Snap
        </Heading>

        <Box
          w={"full"}
          bg={{ base: "white", _dark: "gray.800" }}
          p={6}
          rounded={"lg"}
          shadow={"md"}
        >
          <VStack spacing={4}>
            <Input
              placeholder="Title"
              name="title"
              value={newSnap.title}
              onChange={(e) =>
                setNewSnap({ ...newSnap, title: e.target.value })
              }
            />
            <Input
              placeholder="Description"
              name="description"
              type="text"
              value={newSnap.description}
              onChange={(e) =>
                setNewSnap({ ...newSnap, description: e.target.value })
              }
            />
            <Input
              placeholder="Image URL"
              name="image"
              value={newSnap.image}
              onChange={(e) =>
                setNewSnap({ ...newSnap, image: e.target.value })
              }
            />

            <Button colorScheme="yellow" onClick={handleAddSnap} w="full">
              Add Your Memory
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default CreatePage;
