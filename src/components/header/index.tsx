import {
  Box,
  Container,
  Image,
  ListItem,
  UnorderedList,
  Button,
  Flex,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [modal, setModal] = useState(false);

  return (
    <Flex as="header" justify="center" h="75px" bg="#fff">
      <Container
        maxW="1100px"
        w="95%"
        h="100%"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box as="div">
          <Link to="/">
            <Image src="../assets/shared/desktop/logo.svg" alt="" w="170px" />
          </Link>
        </Box>

        <UnorderedList
          m="0"
          display={{ base: "none", lg: "flex", md: "flex", sm: "none" }}
          alignItems="center"
          listStyleType="none"
        >
          <ListItem
            mr="2rem"
            fontWeight="700"
            color="#000"
            opacity="0.9"
            fontSize="14px"
            cursor="pointer"
          >
            <Link to="/stories">STORIES</Link>
          </ListItem>

          <ListItem
            mr="2rem"
            fontWeight="700"
            color="#000"
            opacity="0.9"
            fontSize="14px"
            cursor="pointer"
          >
            <Link to="/features">FEATURES</Link>
          </ListItem>

          <ListItem
            fontWeight="700"
            color="#000"
            fontSize="14px"
            cursor="pointer"
            opacity="0.9"
          >
            <Link to="/pricing">PRICING</Link>
          </ListItem>
        </UnorderedList>

        <Button
          display={{ base: "none", lg: "flex", md: "flex", sm: "none" }}
          bg="#000"
          color="#fff"
          fontWeight="600"
          fontSize="14px"
          px="1.4rem"
          letterSpacing="1px"
          borderRadius="0.1rem"
        >
          GET AN INVITE
        </Button>

        <Box
          onClick={() => setModal(!modal)}
          display={{ base: "flex", lg: "none", md: "flex" }}
        >
          {modal ? (
            <>
              <Image
                src="../assets/exit.png"
                alt=""
                w="40px"
                cursor="pointer"
              />
              <Flex
                justify="center"
                bg="#fff"
                pos="absolute"
                left="-1px"
                w="100%"
                top="60px"
                px="2.5rem"
                py="1rem"
              >
                <Flex maxW="150px" w="100%" direction="column" align="center">
                  <UnorderedList
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    m="0"
                    w="100%"
                    pb="0.5rem"
                    listStyleType="none"
                    borderBottom="2px solid rgb(17, 17, 17, 0.4);"
                  >
                    <ListItem
                      fontWeight="700"
                      color="#000"
                      opacity="0.9"
                      fontSize="14px"
                      cursor="pointer"
                      mt="0.5rem"
                    >
                      <Link to="/stories">STORIES</Link>
                    </ListItem>

                    <ListItem
                      fontWeight="700"
                      color="#000"
                      opacity="0.9"
                      fontSize="14px"
                      mt="0.5rem"
                      cursor="pointer"
                    >
                      <Link to="/features">FEATURES</Link>
                    </ListItem>

                    <ListItem
                      fontWeight="700"
                      color="#000"
                      fontSize="14px"
                      mt="0.5rem"
                      cursor="pointer"
                      opacity="0.9"
                    >
                      <Link to="/pricing">PRICING</Link>
                    </ListItem>
                  </UnorderedList>

                  <Button
                    bg="#000"
                    color="#fff"
                    fontWeight="600"
                    fontSize="14px"
                    w="100%"
                    mt="1rem"
                    px="1.4rem"
                    letterSpacing="1px"
                    borderRadius="0.1rem"
                  >
                    GET AN INVITE
                  </Button>
                </Flex>
              </Flex>
            </>
          ) : (
            <Image src="../assets/menu.png" alt="" w="25px" cursor="pointer" />
          )}
        </Box>
      </Container>
    </Flex>
  );
};

export { Header };
