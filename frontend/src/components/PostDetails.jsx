import { Box, Flex, Menu, MenuButton, MenuItem, MenuList, Text, Image, useColorMode, Avatar, Divider, Button, useToast } from '@chakra-ui/react';
import { BsThreeDots } from 'react-icons/bs';
import Actions from './Actions';
import { useState } from 'react';
import { Reply } from '.';

const PostDetails = () => {

  const {colorMode} = useColorMode();
  const [isLiked, setIsLiked] = useState(false);
  const toast = useToast();

  const handleCopyPost = () => {
    const currentPostLink = window.location.href;

    navigator.clipboard.writeText(currentPostLink).then(() => {
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
    <Flex flexDirection="column" gap={4} mt={8}>
          <Flex justifyContent="space-between" mb={2}>
            <Flex alignItems="center" gap={1}>
              <Avatar src="/zuck-avatar.png" size="md" mr={1.5}/>
              <Text fontWeight="bold">markzuckerberg</Text>
              <Image src="/verified.png" w={4} h={4} />
            </Flex>
            <Flex alignItems="center" gap={4}>
              <Text color="gray.light">1d</Text>
              <Box onClick={(e) => e.preventDefault()}>
                <Menu>
                  <MenuButton bg={colorMode === "dark" ? "gray.dark" :"gray.200"} p={2} borderRadius="50%">
                    <BsThreeDots />
                  </MenuButton>
                  <MenuList bg={colorMode === "dark" ? "gray.dark" : "gray.200"}>
                    <MenuItem
                      bg={colorMode === "dark" ? "gray.dark" : "gray.200"}
                      onClick={() => handleCopyPost()}
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
              Introducing Threads the new generation social media platform
            </Text>
            {<Image src={"/post1.png"} w={550} borderRadius={4} />}
          </Flex>

          <Actions isLiked={isLiked} setIsLiked={setIsLiked}/>

          <Flex gap={3} alignItems="center">
            <Text color="gray.light">{0} replies</Text>
            <Box w={1} h={1} bg="gray.light" borderRadius="full"></Box>
            <Text color="gray.light">{10 + (isLiked ? 1 : 0)} likes</Text>
          </Flex>

          <Divider/>

          <Flex alignItems="center" justifyContent="space-between">
            <Flex gap={4} alignItems="center">
            <Text fontSize="2xl">👋</Text>
            <Text color="gray.light">Get the app for like, reply and post</Text>
            </Flex>
            <Button>Get</Button>
          </Flex>

          <Reply comment={"Cool Post"} image={"https://bit.ly/ryan-florence"} username={"ryan456"} likes={4}/>
          <Reply comment={"This guy is an alien!!!"} image={"https://bit.ly/prosper-baba"} username={"propser"} likes={101}/>
          <Reply comment={"When is your fight?"} image={"https://bit.ly/dan-abramov"} username={"dantheman"} likes={81}/>
        </Flex>
  )
}

export default PostDetails;