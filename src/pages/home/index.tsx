import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { CardStory } from "../../components/cardStory";
import {
  Container,
  Flex,
  Box,
  Image,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";

const Home = () => {
  return (
    <>
      <Header />

      <Flex as="main" w="100%" justify="center">
        <Container w="100%" p="0" maxW="1500px">
          <Flex as="section" justifyContent="space-between" w="100%">
            <Flex
              as="div"
              direction="column"
              justify="center"
              bg="#000"
              w="48%"
              px="2.5rem"
              pos="relative"
            >
              <Box
                as="div"
                w="6px"
                h="56%"
                pos="absolute"
                left="1px"
                borderRadius="0.5rem"
                bg="linear-gradient(rgb(90, 119, 255), rgb(188, 113, 152), rgb(255, 197, 147))"
              ></Box>
              <Box as="div" maxW="90%">
                <Heading
                  as="h1"
                  color="#fff"
                  maxW="400px"
                  fontSize="41px"
                  letterSpacing="5px"
                  lineHeight="52px"
                  fontWeight="700"
                >
                  CREATE AND SHARE YOUR PHOTO STORIES.
                </Heading>

                <Text
                  mt="1.2rem"
                  color="rgba(217, 217, 217, 0.624)"
                  maxW="420px"
                >
                  Photosnap is a plataform for photographers and visual
                  storytellers. We maake it easy to share photos, tell stories
                  and connect with others.
                </Text>

                <Button
                  bg="transparent"
                  mt="1.3rem"
                  color="#fff"
                  fontSize="14px"
                  fontWeight="600"
                  textAlign="start"
                  p="0"
                >
                  GET AN INVITE
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="43"
                    height="14"
                    style={{
                      marginLeft: "1rem",
                    }}
                  >
                    <g fill="none" fill-rule="evenodd" stroke="#ffffff">
                      <path d="M0 7h41.864M35.428 1l6 6-6 6" />
                    </g>
                  </svg>
                </Button>
              </Box>
            </Flex>

            <Box as="div" bg="#fff" w="100">
              <Image
                src="../assets/home/desktop/create-and-share.jpg"
                alt=""
                h="100%"
              />
            </Box>
          </Flex>

          <Flex as="section" justifyContent="space-between" w="100%">
            <Box as="div" w="100">
              <Image
                src="../assets/home/desktop/beautiful-stories.jpg"
                alt=""
                h="100%"
              />
            </Box>

            <Flex
              as="div"
              direction="column"
              justify="center"
              w="48%"
              px="2.5rem"
              pos="relative"
            >
              <Box as="div" maxW="90%">
                <Heading
                  color="#000000"
                  maxW="300px"
                  fontSize="41px"
                  letterSpacing="5px"
                  lineHeight="52px"
                  fontWeight="700"
                >
                  BEAUTIFUL STORIES EVERY TIME
                </Heading>

                <Text
                  mt="1.2rem"
                  color="rgba(0, 0, 0, 0.624)"
                  maxW="420px"
                  fontWeight="500"
                >
                  we provide designer templates to ensure your stories look
                  terrific. Easily add photo, text, embed maps and media from
                  other networks. Then share your story with everyone
                </Text>

                <Button
                  bg="transparent"
                  mt="1.3rem"
                  color="#000000"
                  fontSize="14px"
                  fontWeight="600"
                  textAlign="start"
                  p="0"
                >
                  GET AN INVITE
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="43"
                    height="14"
                    style={{
                      marginLeft: "1rem",
                    }}
                  >
                    <g fill="none" fill-rule="evenodd" stroke="#000">
                      <path d="M0 7h41.864M35.428 1l6 6-6 6" />
                    </g>
                  </svg>
                </Button>
              </Box>
            </Flex>
          </Flex>

          <Flex as="section" justifyContent="space-between" w="100%">
            <Flex
              as="div"
              direction="column"
              justify="center"
              w="48%"
              px="2.5rem"
              pos="relative"
            >
              <Box as="div" maxW="90%">
                <Heading
                  color="#000000"
                  maxW="300px"
                  fontSize="41px"
                  letterSpacing="5px"
                  lineHeight="52px"
                  fontWeight="700"
                >
                  DESIGNED FOR EVERYONE
                </Heading>

                <Text
                  mt="1.2rem"
                  color="rgba(0, 0, 0, 0.624)"
                  maxW="420px"
                  fontWeight="500"
                >
                  Photosnap can help you create stories that resonate with your
                  audience. Our tool is designed for photographers of all
                  levels, brands, businesses you name it.
                </Text>

                <Button
                  bg="transparent"
                  mt="1.3rem"
                  color="#000000"
                  fontSize="14px"
                  fontWeight="600"
                  textAlign="start"
                  p="0"
                >
                  VIEW THE STORIES
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="43"
                    height="14"
                    style={{
                      marginLeft: "1rem",
                    }}
                  >
                    <g fill="none" fill-rule="evenodd" stroke="#000">
                      <path d="M0 7h41.864M35.428 1l6 6-6 6" />
                    </g>
                  </svg>
                </Button>
              </Box>
            </Flex>

            <Box as="div" bg="#fff" w="100">
              <Image
                src="../assets/home/desktop/designed-for-everyone.jpg"
                alt=""
                h="100%"
              />
            </Box>
          </Flex>

          <Flex as="section" justifyContent="space-between">
            <CardStory
              title="The Mountain"
              author="John Appleseed"
              image="../assets/stories/desktop/mountains.jpg"
            />

            <CardStory
              title="Sunset Cityscapes"
              author="Benjamin Crud"
              image="../assets/stories/desktop/cityscapes.jpg"
            />

            <CardStory
              title="18 Days Voyage"
              author="Alexei Borodin"
              image="../assets/stories/desktop/18-days-voyage.jpg"
            />

            <CardStory
              title="Architecturals"
              author="John Apppleseed"
              image="../assets/stories/desktop/architecturals.jpg"
            />
          </Flex>

          <Flex as="section" justify="center">
            <Container
              my="5rem"
              maxW="1100px"
              w="95%"
              display="flex"
              justifyContent="space-between"
            >
              <Flex
                direction="column"
                align="center"
                justify="center"
                maxW="300px"
              >
                <Image
                  src="https://photosnap-wsl.netlify.app/static/media/responsive.d5fd70c1.svg"
                  alt=""
                />
                <Heading as="h4" mt="2rem" mb="1rem" fontSize="20px">
                  100% Responsive
                </Heading>
                <Text
                  textAlign="center"
                  fontSize="14px"
                  color="rgb(137, 137, 143)"
                >
                  No matter which the device you're on, ur site is fully
                  responsive and sotries look beautiful on any screen.
                </Text>
              </Flex>

              <Flex
                direction="column"
                align="center"
                justify="center"
                maxW="300px"
              >
                <Image
                  src="https://photosnap-wsl.netlify.app/static/media/no-limit.b8deb4d2.svg"
                  alt=""
                />
                <Heading as="h4" mt="3rem" mb="1rem" fontSize="20px">
                  100% Responsive
                </Heading>
                <Text
                  textAlign="center"
                  fontSize="14px"
                  color="rgb(137, 137, 143)"
                >
                  No matter which the device you're on, ur site is fully
                  responsive and sotries look beautiful on any screen.
                </Text>
              </Flex>

              <Flex
                direction="column"
                align="center"
                justify="center"
                maxW="300px"
              >
                <Image
                  src="https://photosnap-wsl.netlify.app/static/media/embed.78c81ce3.svg"
                  alt=""
                />
                <Heading as="h4" mt="2rem" mb="1rem" fontSize="20px">
                  100% Responsive
                </Heading>
                <Text
                  textAlign="center"
                  fontSize="14px"
                  color="rgb(137, 137, 143)"
                >
                  No matter which the device you're on, ur site is fully
                  responsive and sotries look beautiful on any screen.
                </Text>
              </Flex>
            </Container>
          </Flex>
        </Container>
      </Flex>

      <Footer />
    </>
  );
};

export { Home };
