import {
  Button,
  useColorModeValue,
  useToast,
  Link,
  MenuButton,
  Menu,
  Portal,
  MenuList,
  MenuItem,
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";
import followUser from "../../utils/features/followUser";
import { useRecoilState } from "recoil";
import userAtom from "../../atoms/userAtom";
import { BsInstagram } from "react-icons/bs";
import { CgMoreO } from "react-icons/cg";
import { useEffect, useState } from "react";

const FollowBtn = ({ userProfile }) => {
  const toast = useToast();
  const [userData, setUserData] = useRecoilState(userAtom);
  
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
    <Box w="full">
      <Button
        bg={useColorModeValue("gray.800", "whiteAlpha.900")}
        color={useColorModeValue("whiteAlpha.900", "gray.dark")}
        _hover={{
          bg: useColorModeValue("gray.700", "whiteAlpha.800"),
          color: useColorModeValue("whiteAlpha.900", "gray.dark"),
        }}
        width={150}
        mb={1}
        onClick={() => {
          const status = followUser(userProfile?._id, toast, setUserData);
          status ? setIsFollowing("followed") : setIsFollowing("unfollowed");
        }}
      >
        {userData?.following?.includes(userProfile?._id)
          ? "Unfollow"
          : "Follow"}
      </Button>
      <Flex justifyContent="space-between" alignItems="center" w="full">
        <Flex alignItems="center" gap={2}>
          <Text color="gray.light">
            {userProfile?.followers?.length} follower(s)
          </Text>
          <Box w={1} h={1} bg="gray.light" borderRadius="full"></Box>
          <Link href="https://instagram.com" color="gray.light" target="_blank">
            instagram.com
          </Link>
        </Flex>
        <Flex alignItems="center">
          <Box
            className="icon-container"
            _hover={{ bg: useColorModeValue("gray.100", "#1e1e1e") }}
          >
            <BsInstagram size={20} />
          </Box>
          <Box
            className="icon-container"
            _hover={{ bg: useColorModeValue("gray.100", "#1e1e1e") }}
          >
            <Menu>
              <MenuButton>
                <CgMoreO size={20} />
              </MenuButton>
              <Portal>
                <MenuList bg={useColorModeValue("gray.300", "gray.dark")}>
                  <MenuItem
                    bg={useColorModeValue("gray.300", "gray.dark")}
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
    </Box>
  );
};

export default FollowBtn;
