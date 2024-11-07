import React, { useState } from "react";
import {
  Box,
  Image,
  Heading,
  Text,
  HStack,
  IconButton,
  Button,
  VStack,
  Input,
} from "@chakra-ui/react";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDeleteForever } from "react-icons/md";
import {
  DrawerActionTrigger,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerRoot,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useSnapStore } from "../store/snap";
import { toaster } from "@/components/ui/toaster";

const SnapCard = ({ snap }) => {
  const [open, setOpen] = useState(false);
  const [updatedSnap, setUpdatedSnap] = useState(snap);
  const { deleteSnap, updateSnap } = useSnapStore();

  const handleDeleteSnap = async (pid) => {
    const { success, message } = await deleteSnap(pid);
    if (!success) {
      toaster.create({
        title: "Error",
        description: message,
        type: "error",
      });
    } else {
      toaster.create({
        title: "Success",
        description: message,
        type: "success",
      });
    }
  };

  const handleUpdateSnap = async (pid, updatedSnap) => {
    const { success, message } = await updateSnap(pid, updatedSnap);
    onClose();
    if (!success) {
      toaster.create({
        title: "Error",
        description: message,
        type: "error",
      });
    } else {
      toaster.create({
        title: "Success",
        description: "Snap updated successfully",
        type: "success",
      });
    }
  };

  return (
    <Box
      shadow="lg"
      rounded="lg"
      overflow="hidden"
      transition="all 0.3s"
      _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
      bg="white"
      width="320px"
    >
      <Image
        src={snap.image}
        alt={snap.title}
        h={48}
        w="full"
        objectFit="cover"
      />

      <Box p={4}>
        <Heading as="h3" size="md" mb={2}>
          {snap.title}
        </Heading>

        <Text fontWeight="bold" fontSize="xl" color="gray.600" mb={4}>
          ${snap.description}
        </Text>

        <HStack spacing={2}>
          <DrawerRoot open={open} onOpenChange={(e) => setOpen(e.open)}>
            <DrawerTrigger asChild>
              <IconButton onClick={() => setOpen(true)}>
                <FaRegEdit />
              </IconButton>
            </DrawerTrigger>
            <DrawerBackdrop />
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Update Snap</DrawerTitle>
              </DrawerHeader>
              <DrawerBody>
                <VStack spacing={4}>
                  <Input
                    placeholder="Snap Name"
                    name="title"
                    value={updatedSnap.title}
                    onChange={(e) =>
                      setUpdatedSnap({ ...updatedSnap, title: e.target.value })
                    }
                  />
                  <Input
                    placeholder="Description"
                    name="description"
                    value={updatedSnap.description}
                    onChange={(e) =>
                      setUpdatedSnap({
                        ...updatedSnap,
                        description: e.target.value,
                      })
                    }
                  />
                  <Input
                    placeholder="Image URL"
                    name="image"
                    value={updatedSnap.image}
                    onChange={(e) =>
                      setUpdatedSnap({ ...updatedSnap, image: e.target.value })
                    }
                  />
                </VStack>
              </DrawerBody>
              <DrawerFooter>
                <DrawerActionTrigger asChild>
                  <Button variant="outline" onClick={() => setOpen(false)}>
                    Cancel
                  </Button>
                </DrawerActionTrigger>
                <Button
                  onClick={() => {
                    handleUpdateSnap(snap._id, updatedSnap);
                    setOpen(false);
                  }}
                >
                  Update
                </Button>
                <DrawerCloseTrigger />
              </DrawerFooter>
            </DrawerContent>
          </DrawerRoot>

          <IconButton onClick={() => handleDeleteSnap(snap._id)}>
            <MdOutlineDeleteForever />
          </IconButton>
        </HStack>
      </Box>
    </Box>
  );
};

export default SnapCard;
