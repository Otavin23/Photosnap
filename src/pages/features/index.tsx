import { Header } from "../../components/header";
import {
  Flex,
  Box,
  Heading,
  Text,
  Image,
  Container,
  Button,
} from "@chakra-ui/react";
import { CardInfo } from "../../components/cardInfo";
import { Footer } from "../../components/footer";

const Features = () => {
  return (
    <>
      <Header />

      <Flex as="main" justify="center">
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
                  FEATURES
                </Heading>

                <Text
                  mt="1.2rem"
                  color="rgba(217, 217, 217, 0.624)"
                  maxW="420px"
                >
                  We make sure all of our features are designed to be loved by
                  every aspiring and even professional photograpers who wanted
                  to share their stories.
                </Text>
              </Box>
            </Flex>

            <Box as="div" bg="#fff" w="100">
              <Image
                src="../assets/features/desktop/hero.jpg"
                alt=""
                h="100%"
              />
            </Box>
          </Flex>

          <Flex as="section" justify="center">
            <Container
              my="5rem"
              maxW="1100px"
              w="95%"
              display="flex"
              justifyContent="space-between"
              flexWrap="wrap"
            >
              <CardInfo
                title="100% Responsive"
                image="https://photosnap-wsl.netlify.app/static/media/responsive.d5fd70c1.svg"
                description="                  No matter which the device you're on, ur site is fully
                  responsive and sotries look beautiful on any screen."
              />

              <CardInfo
                title="No Photo Upload Limit

"
                image="https://photosnap-wsl.netlify.app/static/media/no-limit.b8deb4d2.svg"
                description="No matter which the device you're on, ur site is fully
                  responsive and sotries look beautiful on any screen."
              />

              <CardInfo
                title="Available to Embed"
                image="https://photosnap-wsl.netlify.app/static/media/embed.78c81ce3.svg"
                description="Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more."
              />

              <CardInfo
                title="Custom Domain"
                image="https://photosnap-wsl.netlify.app/static/media/custom-domain.40b46c11.svg"
                description="With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!"
              />

              <CardInfo
                title="Best Your Exposure"
                image="https://photosnap-wsl.netlify.app/static/media/boost-exposure.1e05bf1c.svg"
                description="Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list."
              />

              <CardInfo
                title="Drag & Drop Image"
                image="https://photosnap-wsl.netlify.app/static/media/drag-drop.7716476b.svg"
                description="Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories."
              />
            </Container>
          </Flex>

          <Flex
            justify="center"
            bgImage="../assets/shared/desktop/bg-beta.jpg"
            bgRepeat="no-repeat"
            bgSize="cover"
            w="100%"
            _before={{
              content: `""`,
              bg: "linear-gradient(rgb(90, 119, 255), rgb(188, 113, 152), rgb(255, 197, 147))",
              w: "6px",
            }}
          >
            <Container
              py="3rem"
              maxW="1100px"
              w="95%"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Heading color="#fff" maxW="350px" fontSize="45px">
                WE'RE IN BETA. GET YOUR INVITE TODAY
              </Heading>
              <Button
                display="flex"
                variant="unstyled"
                color="#fff"
                fontSize="14px"
                fontWeight="600"
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
            </Container>
          </Flex>
        </Container>
      </Flex>

      <Footer />
    </>
  );
};

export { Features };
