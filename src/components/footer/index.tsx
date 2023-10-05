import {
  Flex,
  Container,
  Image,
  UnorderedList,
  ListItem,
  Button,
  Text,
} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex as="footer" bg="#000">
      <Container
        display="flex"
        justifyContent="space-between"
        flexDirection={{
          base: "column",
          lg: "row",
          md: "row",
          sm: "column",
        }}
        alignItems={{
          base: "center",
          lg: "normal",
          md: "normal",
          sm: "center",
        }}
        maxW="1500px"
        w="95%"
        h="100%"
        py="4rem"
      >
        <Flex
          w={{ base: "100%", lg: "auto", md: "auto", sm: "100%" }}
          direction={{ base: "column", lg: "row", md: "row", sm: "column" }}
          alignItems="center"
        >
          <Flex
            direction="column"
            justify="space-between"
            align={{ base: "center", lg: "normal", md: "normal", sm: "center" }}
          >
            <Image src="../assets/shared/desktop/logo-white.svg" alt="" />

            <UnorderedList m="4rem 0 0 0" display="flex" listStyleType="none">
              <ListItem mr="1rem">
                <Image src="../assets/shared/desktop/facebook.svg" alt="" />
              </ListItem>

              <ListItem mr="1rem">
                <Image src="../assets/shared/desktop/youtube.svg" alt="" />
              </ListItem>

              <ListItem mr="1rem">
                <Image src="../assets/shared/desktop/twitter.svg" alt="" />
              </ListItem>

              <ListItem mr="1rem">
                <Image src="../assets/shared/desktop/pinterest.svg" alt="" />
              </ListItem>

              <ListItem>
                <Image src="../assets/shared/desktop/instagram.svg" alt="" />
              </ListItem>
            </UnorderedList>
          </Flex>

          <UnorderedList
            display={{ bases: "flex", lg: "block", md: "block", sm: "flex" }}
            justifyContent={{
              base: "space-between",
              lg: "start",
              md: "start",
              sm: "space-between",
            }}
            flexWrap="wrap"
            m={{
              base: "2.5rem 0 0 0",
              lg: "0 0 0 15rem",
              md: "0 0 0 6rem",
              sm: "2.5rem 0 0 0",
            }}
            maxW="300px"
            w={{ base: "100%", lg: "auto", md: "auto", sm: "100%" }}
            listStyleType="none"
          >
            <ListItem mb="0.3rem" color="#fff" fontWeight="600">
              Home
            </ListItem>
            <ListItem mb="0.3rem" color="#fff" fontWeight="600">
              Stories
            </ListItem>
            <ListItem mb="0.3rem" color="#fff" fontWeight="600">
              Features
            </ListItem>
            <ListItem color="#fff" fontWeight="600">
              Princing
            </ListItem>
          </UnorderedList>
        </Flex>

        <Flex
          direction="column"
          justify={{
            base: "start",
            lg: "space-between",
            md: "space-between",
            sm: "start",
          }}
        >
          <Button
            bg="transparent"
            color="#fff"
            display="flex"
            mt={{ base: "3rem", lg: "0", md: "0", sm: "3rem" }}
            justifyContent={{
              base: "center",
              lg: "space-between",
              md: "space-between",
              sm: "center",
            }}
          >
            GET AN INVITE
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="43"
              height="14"
              style={{
                marginLeft: "1.5rem",
              }}
            >
              <g fill="none" fill-rule="evenodd" stroke="#ffffff">
                <path d="M0 7h41.864M35.428 1l6 6-6 6" />
              </g>
            </svg>
          </Button>

          <Text
            as="span"
            textAlign="center"
            color="rgba(217, 217, 217, 0.537);"
          >
            Copyright 2018. All Rights Reserved
          </Text>
        </Flex>
      </Container>
    </Flex>
  );
};

export { Footer };
