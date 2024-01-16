import { Link, useNavigate } from "react-router-dom";
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
import { formatDistanceToNow } from "date-fns";

const UserPost = ({post, userProfile, home}) => {
  const toast = useToast();
  const { colorMode } = useColorMode();
  const [isLiked, setIsLiked] = useState(false);
  const navigate= useNavigate();

  const handleCopyPost = (link) => {
    console.log(link);
    navigator.clipboard.writeText(`${window.location.origin}${link}`).then(() => {
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
    <Link to={`/${userProfile?.username}/post/${post._id}`}>
      <Flex mt={8}>
        <Flex
          flexDirection="column"
          alignItems="center"
          minW={{ base: 12, sm: 20 }}
        >
          <Avatar name={userProfile?.name} size="md" src={userProfile?.profilePic} />
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
        <Flex flexDirection="column" ml={home ? { base: 3, md: 3 } : { base: 2, md: 6 }} mr={home && { base:0, md: 6 }} gap={4}>
          <Flex justifyContent="space-between">
            <Flex alignItems="center" gap={1}>
                <Text fontWeight="bold" onClick={(e) => {
                  e.preventDefault();
                  navigate(`/${userProfile?.username}`)
                }}>{userProfile?.username}</Text>
                <Image src="/verified.png" w={4} h={4} />
            </Flex>
            <Flex alignItems="center" gap={4}>
              <Text color="gray.light" fontSize={{base: "sm", md: "md"}}>{formatDistanceToNow( new Date(post.createdAt), {includeSeconds: true, addSuffix: true} )}</Text>
              <Box onClick={(e) => e.preventDefault()}>
                <Menu>
                  <MenuButton bg={colorMode === "dark" ? "gray.dark": "gray.200"} p={2} borderRadius="50%">
                    <BsThreeDots />
                  </MenuButton>
                  <MenuList bg={colorMode === "dark" ? "gray.dark": "gray.200"}>
                    <MenuItem
                      bg={colorMode === "dark" ? "gray.dark": "gray.200"}
                      onClick={() => handleCopyPost(`/${userProfile?.username}/post/${post._id}`)}
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
                base: "md",
                md: "lg",
              }}
            >
              {post?.text}
            </Text>
            {post?.img && <Image src={post?.img} borderRadius={4} w={440}/>}
          </Flex>
          <Actions post={post}/>
          <Flex mb={8} gap={3} alignItems="center">
            <Text color="gray.light">{post?.replies?.length} replies</Text>
            <Box w={1} h={1} bg="gray.light" borderRadius="full"></Box>
            <Text color="gray.light">{post?.likes?.length + (isLiked ? 1 : 0)} likes</Text>
          </Flex>
        </Flex>
      </Flex>
    </Link>
  );
};

export default UserPost;
