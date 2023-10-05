import { Header } from "../../components/header";
import {
  Flex,
  Box,
  Container,
  Text,
  Heading,
  Button,
  Image,
} from "@chakra-ui/react";
import "../../styles/table.css";
import { Footer } from "../../components/footer";
import { useState } from "react";

const Pricing = () => {
  const [check, setCheck] = useState(false);

  return (
    <>
      <Header />

      <Flex as="main" justify="center">
        <Container w="100%" maxW="1500px" p="0">
          <Flex
            as="section"
            direction={{
              base: "column-reverse",
              lg: "row",
              md: "row",
              sm: "column-reverse",
            }}
            justifyContent="space-between"
            w="100%"
          >
            <Flex
              as="div"
              direction="column"
              justify="center"
              bg="#000"
              w={{ base: "100%", lg: "50%", md: "50%", sm: "100%" }}
              p={{
                base: "5rem 2rem",
                lg: "2.5rem",
                md: "2.5rem",
                sm: "5rem 2rem",
              }}
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
                  fontSize="clamp(30px, 3vw, 41px)"
                  letterSpacing="5px"
                  lineHeight="52px"
                  fontWeight="700"
                >
                  PRICING
                </Heading>

                <Text
                  mt="1.2rem"
                  color="rgba(217, 217, 217, 0.624)"
                  maxW="420px"
                >
                  We make sure all of our features are designed to be loved by
                  Create a your stories, Photosnap is a platform for
                  photographers and visual storytellers. It’s the simple way to
                  create and share your photos.
                </Text>
              </Box>
            </Flex>

            <Box
              as="div"
              bg="#fff"
              w={{ base: "100%", lg: "50%", md: "50%", sm: "100%" }}
            >
              <Image
                src="../assets/pricing/desktop/hero.jpg"
                alt=""
                h="100%"
                objectFit="cover"
              />
            </Box>
          </Flex>

          <Flex as="section" justify="center" mt="6rem">
            <Container
              display="Flex"
              flexDirection="column"
              alignItems="center"
              maxW="1200px"
              w="100%"
            >
              <Flex
                as="label"
                mb="6rem"
                align="center"
                className="label__checkTheme"
              >
                <Text mr="1rem" fontWeight={check ? "400" : "700"}>
                  Monthly
                </Text>
                <input type="checkbox" className="input__checkbox" />
                <span className="check" onClick={() => setCheck(!check)}></span>
                <Text ml="1rem" fontWeight={check ? "700" : "400"}>
                  Yearly
                </Text>
              </Flex>

              <Flex
                justify="center"
                align="center"
                direction={{
                  base: "column",
                  lg: "row",
                  md: "column",
                }}
              >
                <Flex
                  direction="column"
                  px="1rem"
                  align="center"
                  w={{ base: "100%", lg: "35%", md: "100%" }}
                  mr={{ base: "0", lg: "2rem", md: "0", sm: "0" }}
                  maxW={{ base: "400px", lg: "100%", md: "400px" }}
                  mt="1rem"
                >
                  <Heading as="h3">Basic</Heading>
                  <Text textAlign="center" mt="2rem" mb="1rem" opacity="0.7">
                    includes basic usage of our platform. Recommended for new
                    and aspiring photographers.
                  </Text>

                  <Text as="span" fontWeight="600" fontSize="30px">
                    ${check ? (19 * 10).toFixed(2) : (19).toFixed(2)}
                  </Text>
                  <Text as="span" fontWeight="600" opacity="0.8">
                    per {check ? "year" : "month"}
                  </Text>

                  <Button
                    mt="2rem"
                    w="100%"
                    bg="#000"
                    color="#fff"
                    borderRadius="0"
                    letterSpacing="1px"
                  >
                    PICK PLAN
                  </Button>
                </Flex>

                <Flex
                  bg="#000"
                  direction="column"
                  align="center"
                  w={{ base: "100%", lg: "35%", md: "100%" }}
                  maxW={{ base: "400px", lg: "100%", md: "400px" }}
                  py="5rem"
                  px="1rem"
                  mr={{ base: "0", lg: "2rem", md: "0", sm: "0" }}
                  my={{ base: "5rem", lg: "1rem", md: "5rem" }}
                  pos="relative"
                  _before={{
                    content: `""`,
                    pos: "absolute",
                    bg: "linear-gradient(90deg, rgb(255, 197, 147), rgb(188, 113, 152) 25%, rgb(90, 119, 255) 50%);",
                    w: "100%",
                    h: "7px",
                    top: "-1px",
                  }}
                >
                  <Heading as="h3" color="#fff">
                    Pro
                  </Heading>
                  <Text
                    color="#fff"
                    textAlign="center"
                    mt="2rem"
                    mb="1rem"
                    opacity="0.7"
                  >
                    More advanced features available. Recommended for
                    photography veterans and professionals.
                  </Text>

                  <Text as="span" color="#fff" fontWeight="600" fontSize="30px">
                    ${check ? (39 * 10).toFixed(2) : (39).toFixed(2)}
                  </Text>
                  <Text as="span" color="#fff" fontWeight="600" opacity="0.8">
                    per {check ? "year" : "month"}
                  </Text>

                  <Button
                    mt="2rem"
                    w="100%"
                    bg="#ffffff"
                    color="#000000"
                    borderRadius="0"
                    letterSpacing="1px"
                  >
                    PICK PLAN
                  </Button>
                </Flex>

                <Flex
                  direction="column"
                  align="center"
                  w={{ base: "100%", lg: "35%", md: "100%" }}
                  maxW={{ base: "400px", lg: "100%", md: "400px" }}
                  mr={{ base: "0", lg: "2rem", md: "0", sm: "0" }}
                  mt="1rem"
                >
                  <Heading as="h3">Business</Heading>
                  <Text textAlign="center" mt="2rem" mb="1rem" opacity="0.7">
                    Additional features available such as more detailed metrics.
                    Recommended for business owners.
                  </Text>

                  <Text as="span" fontWeight="600" fontSize="30px">
                    ${check ? (99 * 10).toFixed(2) : (99).toFixed(2)}
                  </Text>
                  <Text as="span" fontWeight="600" opacity="0.8">
                    pear {check ? "year" : "month"}
                  </Text>

                  <Button
                    mt="2rem"
                    w="100%"
                    bg="#000"
                    color="#fff"
                    borderRadius="0"
                    letterSpacing="1px"
                  >
                    PICK PLAN
                  </Button>
                </Flex>
              </Flex>
            </Container>
          </Flex>

          <Flex justify="center" direction="column" align="center" my="10rem">
            <Heading mb="3rem">Compare</Heading>

            <Box as="table" w="50%">
              <Box as="tr">
                <Box as="th" w="265px">
                  The features
                </Box>
                <Box as="th">Basic</Box>
                <Box as="th">Pro</Box>
                <Box as="th">Business</Box>
              </Box>

              <Box as="tr">
                <Box as="td">Unlimited story posting</Box>

                <Box as="td">
                  <Text display="flex" justifyContent="center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="15"
                    >
                      <path
                        fill="none"
                        stroke="#000"
                        stroke-width="2"
                        d="M1 8.124L5.623 13 17 1"
                      />
                    </svg>
                  </Text>
                </Box>

                <Box as="td">
                  <Text display="flex" justifyContent="center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="15"
                    >
                      <path
                        fill="none"
                        stroke="#000"
                        stroke-width="2"
                        d="M1 8.124L5.623 13 17 1"
                      />
                    </svg>
                  </Text>
                </Box>

                <Box as="td">
                  <Text display="flex" justifyContent="center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="15"
                    >
                      <path
                        fill="none"
                        stroke="#000"
                        stroke-width="2"
                        d="M1 8.124L5.623 13 17 1"
                      />
                    </svg>
                  </Text>
                </Box>
              </Box>

              <Box as="tr">
                <Box as="td" pt="2.5rem">
                  Unlimited photo upload
                </Box>

                <Box as="td" pt="2.5rem">
                  <Text display="flex" justifyContent="center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="15"
                    >
                      <path
                        fill="none"
                        stroke="#000"
                        stroke-width="2"
                        d="M1 8.124L5.623 13 17 1"
                      />
                    </svg>
                  </Text>
                </Box>

                <Box as="td" pt="2.5rem">
                  <Text display="flex" justifyContent="center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="15"
                    >
                      <path
                        fill="none"
                        stroke="#000"
                        stroke-width="2"
                        d="M1 8.124L5.623 13 17 1"
                      />
                    </svg>
                  </Text>
                </Box>

                <Box as="td" pt="2.5rem">
                  <Text display="flex" justifyContent="center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="15"
                    >
                      <path
                        fill="none"
                        stroke="#000"
                        stroke-width="2"
                        d="M1 8.124L5.623 13 17 1"
                      />
                    </svg>
                  </Text>
                </Box>
              </Box>

              <Box as="tr">
                <Box as="td" pt="2.5rem">
                  Embedding custom content
                </Box>

                <Box as="td"></Box>

                <Box as="td" pt="2.5rem">
                  <Text display="flex" justifyContent="center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="15"
                    >
                      <path
                        fill="none"
                        stroke="#000"
                        stroke-width="2"
                        d="M1 8.124L5.623 13 17 1"
                      />
                    </svg>
                  </Text>
                </Box>

                <Box as="td" pt="2.5rem">
                  <Text display="flex" justifyContent="center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="15"
                    >
                      <path
                        fill="none"
                        stroke="#000"
                        stroke-width="2"
                        d="M1 8.124L5.623 13 17 1"
                      />
                    </svg>
                  </Text>
                </Box>
              </Box>

              <Box as="tr">
                <Box as="td" pt="2.5rem">
                  Customize metadata
                </Box>

                <Box as="td"></Box>

                <Box as="td" pt="2.5rem">
                  <Text display="flex" justifyContent="center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="15"
                    >
                      <path
                        fill="none"
                        stroke="#000"
                        stroke-width="2"
                        d="M1 8.124L5.623 13 17 1"
                      />
                    </svg>
                  </Text>
                </Box>

                <Box as="td" pt="2.5rem">
                  <Text display="flex" justifyContent="center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="15"
                    >
                      <path
                        fill="none"
                        stroke="#000"
                        stroke-width="2"
                        d="M1 8.124L5.623 13 17 1"
                      />
                    </svg>
                  </Text>
                </Box>
              </Box>

              <Box as="tr">
                <Box as="td" pt="2.5rem">
                  Advanced metrics
                </Box>

                <Box as="td"></Box>

                <Box as="td" pt="2.5rem">
                  <Text display="flex" justifyContent="center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="15"
                    >
                      <path
                        fill="none"
                        stroke="#000"
                        stroke-width="2"
                        d="M1 8.124L5.623 13 17 1"
                      />
                    </svg>
                  </Text>
                </Box>

                <Box as="td" pt="2.5rem">
                  <Text display="flex" justifyContent="center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="15"
                    >
                      <path
                        fill="none"
                        stroke="#000"
                        stroke-width="2"
                        d="M1 8.124L5.623 13 17 1"
                      />
                    </svg>
                  </Text>
                </Box>
              </Box>

              <Box as="tr">
                <Box as="td" pt="2.5rem">
                  Photo downloads
                </Box>

                <Box as="td"></Box>

                <Box as="td"></Box>

                <Box as="td" pt="2.5rem">
                  <Text display="flex" justifyContent="center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="15"
                    >
                      <path
                        fill="none"
                        stroke="#000"
                        stroke-width="2"
                        d="M1 8.124L5.623 13 17 1"
                      />
                    </svg>
                  </Text>
                </Box>
              </Box>

              <Box as="tr">
                <Box as="td" pt="2.5rem">
                  Search engine indexing
                </Box>

                <Box as="td"></Box>

                <Box as="td"></Box>

                <Box as="td" pt="2.5rem">
                  <Text display="flex" justifyContent="center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="15"
                    >
                      <path
                        fill="none"
                        stroke="#000"
                        stroke-width="2"
                        d="M1 8.124L5.623 13 17 1"
                      />
                    </svg>
                  </Text>
                </Box>
              </Box>

              <Box as="tr">
                <Box as="td" pt="2.5rem">
                  Custom analytics
                </Box>

                <Box as="td"></Box>

                <Box as="td"></Box>

                <Box as="td" pt="2.5rem">
                  <Text display="flex" justifyContent="center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="15"
                    >
                      <path
                        fill="none"
                        stroke="#000"
                        stroke-width="2"
                        d="M1 8.124L5.623 13 17 1"
                      />
                    </svg>
                  </Text>
                </Box>
              </Box>
            </Box>
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
              flexDirection={{
                base: "column",
                lg: "row",
                md: "row",
                sm: "column",
              }}
              alignItems="center"
            >
              <Heading
                color="#fff"
                maxW="350px"
                fontSize="clamp(35px, 3vw, 45px)"
                textAlign={{
                  base: "center",
                  lg: "start",
                  md: "start",
                  sm: "center",
                }}
              >
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
export { Pricing };
