import {
  Avatar,
  Box,
  Flex,
  VStack,
  Text,
  Link,
  MenuButton,
  Menu,
  Portal,
  MenuList,
  MenuItem,
  useToast,
  useColorMode,
} from "@chakra-ui/react";
import { BsInstagram } from "react-icons/bs";
import { CgMoreO } from "react-icons/cg";

const UserHeader = () => {
  const toast = useToast();
  const { colorMode } = useColorMode();

  const handleCopy = () => {
    const userURL = window.location.href;
    navigator.clipboard.writeText(userURL).then(() => {
      toast({
        title: "Copied To Clipboard",
        description: "Use Ctrl + V to access the profile URL",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    });
  };

  return (
    <VStack mt={10} alignItems="start" spacing={3.5}>
      <Flex justifyContent="space-between" w="100%">
        <Box>
          <Text fontSize="2xl" fontWeight="bold" mb={1}>
            Mark Zuckerberg
          </Text>
          <Flex alignItems="center" gap={3}>
            <Text fontSize="md">@zuckerberg</Text>
            <Text
              fontSize="xs"
              w={20}
              textAlign="center"
              color={colorMode === "dark" ? "gray.light" : "gray.dark"}
              bg={colorMode === "dark" ? "gray.dark" : "gray.200"}
              p={2}
              borderRadius="full"
            >
              threads.net
            </Text>
          </Flex>
        </Box>
        <Box>
          <Avatar
            name="Mark Zuckerberg"
            src="zuck-avatar.png"
            size={{ base: "lg", md: "xl" }}
          />
        </Box>
      </Flex>
      <Text>Co Founder, Executive Chairman and CEO of Meta Platforms.</Text>
      <Flex justifyContent="space-between" alignItems="center" w="full">
        <Flex alignItems="center" gap={2}>
          <Text color="gray.light">100k followers</Text>
          <Box w={1} h={1} bg="gray.light" borderRadius="full"></Box>
          <Link href="https://instagram.com" color="gray.light" target="_blank">
            instagram.com
          </Link>
        </Flex>
        <Flex alignItems="center">
          <Box
            className="icon-container"
            _hover={{ bg: colorMode === "dark" ? "#1e1e1e" : "gray.100" }}
          >
            <BsInstagram size={20} />
          </Box>
          <Box
            className="icon-container"
            _hover={{ bg: colorMode === "dark" ? "#1e1e1e" : "gray.100" }}
          >
            <Menu>
              <MenuButton>
                <CgMoreO size={20} />
              </MenuButton>
              <Portal>
                <MenuList bg={colorMode === "dark" ? "gray.dark" : "gray.300"}>
                  <MenuItem
                    bg={colorMode === "dark" ? "gray.dark" : "gray.300"}
                    onClick={handleCopy}
                  >
                    Copy Link
                  </MenuItem>
                </MenuList>
              </Portal>
            </Menu>
          </Box>
        </Flex>
      </Flex>

      <Flex justifyContent="space-between" w="full">
        <Flex
          flex={1}
          borderBottom={`1px solid ${colorMode === "dark" ? "white" : "black"}`}
          color={colorMode === "dark" ? "whiteAlpha.900" : "gray.dark"}
          justifyContent="center"
          alignItems="center"
        >
          <Text p={3} fontWeight="bold">
            Threads
          </Text>
        </Flex>
        <Flex
          flex={1}
          borderBottom="1px solid gray"
          color="gray.light"
          justifyContent="center"
          alignItems="center"
        >
          <Text p={3} fontWeight="bold">
            Replies
          </Text>
        </Flex>
      </Flex>
    </VStack>
  );
};

export default UserHeader;
