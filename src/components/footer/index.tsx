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
        maxW="1500px"
        w="95%"
        h="100%"
        py="4rem"
      >
        <Flex>
          <Flex direction="column" justify="space-between">
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

          <UnorderedList m="0 0 0 15rem" listStyleType="none">
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

        <Flex direction="column" justify="space-between">
          <Button
            bg="transparent"
            color="#fff"
            display="flex"
            justifyContent="end"
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

          <Text as="span" color="rgba(217, 217, 217, 0.537);">
            Copyright 2018. All Rights Reserved
          </Text>
        </Flex>
      </Container>
    </Flex>
  );
};

export { Footer };
