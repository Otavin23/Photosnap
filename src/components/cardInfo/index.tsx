import { Flex, Image, Heading, Text } from "@chakra-ui/react";

interface IProps {
  image: string;
  title: string;
  description: string;
}

const CardInfo = ({ image, title, description }: IProps) => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      maxW="300px"
      mb="5rem"
    >
      <Flex align="center" h="80px">
        <Image src={image} alt="" />
      </Flex>
      <Heading as="h4" mt="2rem" mb="1rem" fontSize="20px">
        {title}
      </Heading>
      <Text textAlign="center" fontSize="14px" color="rgb(137, 137, 143)">
        {description}
      </Text>
    </Flex>
  );
};

export { CardInfo };
