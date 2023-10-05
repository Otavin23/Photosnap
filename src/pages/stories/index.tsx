import { CardStory } from "../../components/cardStory";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { Flex, Container, Text, Heading, Button, Box } from "@chakra-ui/react";

const Stories = () => {
  return (
    <>
      <Header />

      <Flex as="main" justify="center">
        <Container w="100%" maxW="1500px" p="0">
          <Box
            as="section"
            flexDirection="column"
            justifyContent="center"
            alignItems="start"
            bg="url(../assets/stories/desktop/moon-of-appalacia.jpg)"
            bgRepeat="no-repeat"
            bgSize="cover"
            p={{
              base: "5rem 0 5rem 1rem",
              lg: "5rem",
              md: "5rem",
              sm: "3rem",
            }}
          >
            <Text as="span" color="#fff" letterSpacing="1px">
              LAST MONTH'S FEATURED STORY
            </Text>

            <Heading
              as="h1"
              color="#fff"
              letterSpacing="0.4rem"
              fontWeight="600"
              mt="2rem"
              fontSize="clamp(30px, 10vw, 3.5rem)"
              maxW="25rem"
            >
              HAZY FULL MOON OF APPLACHI
            </Heading>
            <Text color="rgb(217, 217, 217)">
              march 2nd w2020{" "}
              <Text as="span" fontWeight="600" color="#fff">
                by: John Applesseed
              </Text>
            </Text>

            <Text
              mt="1rem"
              color="rgba(217, 217, 217, 0.6)"
              maxW="450px"
              fontSize="17px"
            >
              The dissected plateau area, while not actually made up of
              geological mountains, is popularly called "mountains," especially
              in eastern Kentucky and West Virginia, and while the ridges are
              not high, the terrain is extremely rugged.
            </Text>

            <Button
              mt="1.5rem"
              bg="transparent"
              color="#fff"
              fontSize="14px"
              fontWeight="600"
              textAlign="start"
              p="0"
            >
              READ THE STORY
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
          </Box>

          <Flex as="section" justify="space-between" wrap="wrap">
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
            <CardStory
              title="World Tour 2019"
              author="Timothy Wagner"
              image="../assets/stories/desktop/world-tour.jpg"
            />
            <CardStory
              title="Unforeseen Corner"
              author="William Malcom"
              image="../assets/stories/desktop/unforeseen-corners.jpg"
            />
            <CardStory
              title="King on Africa: Part ||"
              author="Timothy Wagner"
              image="../assets/stories/desktop/king-on-africa.jpg"
            />
            <CardStory
              title="The Trip to Nowhere"
              author="Felicia Rourke"
              image="../assets/stories/desktop/trip-to-nowhere.jpg"
            />
            <CardStory
              title="Rage of The Sea"
              author="Mohammmed Abdul"
              image="../assets/stories/desktop/rage-of-the-sea.jpg"
            />
            <CardStory
              title="Running Free"
              author="Michele"
              image="../assets/stories/desktop/running-free.jpg"
            />
            <CardStory
              title="Behind the Waves"
              author="Felicia Rourke"
              image="../assets/stories/desktop/behind-the-waves.jpg"
            />
            <CardStory
              title="Calm Wwaters"
              author="Samantha Brooke"
              image="../assets/stories/desktop/calm-waters.jpg"
            />

            <CardStory
              title="The Miky Way"
              author="Benjamin Cruz"
              image="../assets/stories/desktop/milky-way.jpg"
            />

            <CardStory
              title="Night at The Dark"
              author="Mohammed Abdul"
              image="../assets/stories/desktop/dark-forest.jpg"
            />

            <CardStory
              title="Land of Dreams"
              author="William Malcolm"
              image="../assets/stories/desktop/land-of-dreams.jpg"
            />

            <CardStory
              title="Somwapet's Beauty"
              author="Michelle"
              image="../assets/stories/desktop/somwarpet.jpg"
            />
          </Flex>
        </Container>
      </Flex>

      <Footer />
    </>
  );
};
export { Stories };
