import React from "react";
import { Container, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useSnapStore } from "../store/snap";
import { useEffect } from "react";
import { Grid } from "@chakra-ui/react";
import SnapCard from "../components/SnapCard";

const HomePage = () => {
  const { fetchSnap, snaps } = useSnapStore();

  useEffect(() => {
    fetchSnap();
  }, [fetchSnap]);
  console.log("snaps", snaps);
  return (
    <div>
      <Container maxW="container.xl" py={12} >
        <VStack spacing={8}>
          <Text
            fontSize={{ base: "22", sm: "28" }}
            fontWeight={"bold"}
            bg="linear-gradient(to right, orange, yellow)"
            bgClip="text"
            color="transparent"
            textAlign={"center"}
          >
            Your Snap Page
          </Text>

          <Grid
            templateColumns={{
              base: "1fr",
              sm: "1fr 1fr",
              md: "1fr 1fr 1fr",
            }}
            gap={5}
            margin={30}
          >
            {snaps.map((snap) => (
              <SnapCard key={snap._id} snap={snap} />
            ))}
          </Grid>
          {snaps.length === 0 && (
            <Text
              fontSize="xl"
              textAlign={"center"}
              fontWeight="bold"
              color="gray.500"
            >
              No Snaps found 😢{" "}
              <Link to={"/create"}>
                <Text
                  as="span"
                  color="blue.500"
                  _hover={{ textDecoration: "underline" }}
                >
                  Create a Snap
                </Text>
              </Link>
            </Text>
          )}
        </VStack>
      </Container>
    </div>
  );
};

export default HomePage;
