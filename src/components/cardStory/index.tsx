import { Box, Image, Flex, Text, Button, Heading } from "@chakra-ui/react";

interface IProps {
  title: string;
  author: string;
  image: string;
}

const CardStory = ({ title, author, image }: IProps) => {
  return (
    <Box
      as="div"
      w="25%"
      h="450px"
      pos="relative"
      _before={{
        content: `""`,
        pos: "absolute",
        bg: "linear-gradient(0deg, rgba(0, 0, 0, 0.66) 0px, transparent);",
        w: "100%",
        h: "100%",
      }}
    >
      <Image src={image} alt="" w="100%" h="100%" />
      <Flex
        pos="absolute"
        direction="column"
        bottom="1px"
        px="3rem"
        py="2rem"
        w="100%"
      >
        <Heading as="h3" color="#fffd" fontSize="20px">
          {title}
        </Heading>
        <Text
          as="span"
          color="rgba(217, 217, 217, 0.914)"
          fontWeight="700"
          my="0rem"
          py="0.5rem"
          fontSize="14px"
          letterSpacing="1px"
          borderBottom="0.01rem solid rgba(217, 217, 217, 0.44);"
        >
          by {author}
        </Text>
        <Button
          mt="0.5rem"
          bg="transparent"
          color="#fff"
          p="0"
          w="100%"
          display="flex"
          justifyContent="space-between"
          fontSize="14px"
        >
          READ STORY
          <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
            <g fill="none" fill-rule="evenodd" stroke="#ffffff">
              <path d="M0 7h41.864M35.428 1l6 6-6 6" />
            </g>
          </svg>
        </Button>
      </Flex>
    </Box>
  );
};

export { CardStory };
