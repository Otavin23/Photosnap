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

const Header = () => {
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
          <Image src="../assets/shared/desktop/logo.svg" alt="" w="170px" />
        </Box>

        <UnorderedList
          m="0"
          display="flex"
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
            FEATURES
          </ListItem>

          <ListItem
            fontWeight="700"
            color="#000"
            fontSize="14px"
            cursor="pointer"
            opacity="0.9"
          >
            PRICING
          </ListItem>
        </UnorderedList>

        <Button
          bg="#000"
          color="#fff"
          fontWeight="600"
          fontSize="14px"
          px="1.4rem"
          letterSpacing="1px"
        >
          GET AN INVITE
        </Button>
      </Container>
    </Flex>
  );
};

export { Header };
