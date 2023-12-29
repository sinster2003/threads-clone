import { Link } from "react-router-dom";
import {
  Avatar,
  Flex,
  Box,
  Image,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useToast,
  useColorMode,
} from "@chakra-ui/react";
import { Actions } from "./";
import { BsThreeDots } from "react-icons/bs";
import { useState } from "react";

const UserPost = ({ image, replies, text, likes }) => {
  const toast = useToast();
  const { colorMode } = useColorMode();
  const [isLiked, setIsLiked] = useState(false);

  const handleCopyPost = (link) => {
    console.log(link);
    navigator.clipboard.writeText(link).then(() => {
      toast({
        title: "Copied post link",
        description: "use Ctrl + V to access the post link",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    });
  };

  return (
    <Link to="/mark/post/1">
      <Flex mt={8}>
        <Flex
          flexDirection="column"
          alignItems="center"
          minW={{ base: 12, sm: 20 }}
        >
          <Avatar name="Mark Zuckerberg" size="md" src="zuck-avatar.png" />
          <Box h="full" w={0.001} bg="gray.500" my={6}></Box>
          <Flex
            flexDirection="row"
            flexWrap="wrap"
            gap={1}
            alignItems="center"
            justifyContent="center"
            w="80%"
          >
            <Avatar
              name="user1"
              h={{ base: "14px", sm: "16px", md: "24px" }}
              w={{ base: "14px", sm: "16px", md: "24px" }}
              src="https://bit.ly/ryan-florence"
            />
            <Avatar
              name="user2"
              h={{ base: "14px", sm: "16px", md: "24px" }}
              w={{ base: "14px", sm: "16px", md: "24px" }}
              src="https://bit.ly/prosper-baba"
            />
            <Avatar
              name="user3"
              h={{ base: "14px", sm: "16px", md: "24px" }}
              w={{ base: "14px", sm: "16px", md: "24px" }}
              src="https://bit.ly/dan-abramov"
            />
          </Flex>
        </Flex>
        <Flex flexDirection="column" ml={{ base: 2, md: 6 }} gap={4}>
          <Flex justifyContent="space-between">
            <Flex alignItems="center" gap={1}>
              <Text fontWeight="bold">markzuckerberg</Text>
              <Image src="verified.png" w={4} h={4} />
            </Flex>
            <Flex alignItems="center" gap={4}>
              <Text color="gray.light">1d</Text>
              <Box onClick={(e) => e.preventDefault()}>
                <Menu>
                  <MenuButton bg={colorMode === "dark" ? "gray.dark": "gray.200"} p={2} borderRadius="50%">
                    <BsThreeDots />
                  </MenuButton>
                  <MenuList bg={colorMode === "dark" ? "gray.dark": "gray.200"}>
                    <MenuItem
                      bg={colorMode === "dark" ? "gray.dark": "gray.200"}
                      onClick={() => handleCopyPost("/mark/post/1")}
                    >
                      Copy Post Link
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Box>
            </Flex>
          </Flex>
          <Flex flexDirection="column" gap={4}>
            <Text
              fontSize={{
                base: "sm",
                md: "md",
              }}
            >
              {text}
            </Text>
            {image && <Image src={image} borderRadius={4} />}
          </Flex>
          <Actions isLiked={isLiked} setIsLiked={setIsLiked}/>
          <Flex mb={8} gap={3} alignItems="center">
            <Text color="gray.light">{replies} replies</Text>
            <Box w={1} h={1} bg="gray.light" borderRadius="full"></Box>
            <Text color="gray.light">{likes + (isLiked ? 1 : 0)} likes</Text>
          </Flex>
        </Flex>
      </Flex>
    </Link>
  );
};

export default UserPost;
