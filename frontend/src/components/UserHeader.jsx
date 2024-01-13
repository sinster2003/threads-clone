import {
  Avatar,
  Box,
  Flex,
  VStack,
  Text,
  useToast,
  useColorMode,
} from "@chakra-ui/react";
import FollowBtn from "./templates/FollowBtn";

const UserHeader = ({userProfile}) => {
  const toast = useToast();
  const { colorMode } = useColorMode();

  return (
    <VStack mt="60px" alignItems="start" spacing={3.5}>
      <Flex justifyContent="space-between" w="100%">
        <Box>
          <Text fontSize="2xl" fontWeight="bold" mb={1}>
            {userProfile?.name}
          </Text>
          <Flex alignItems="center" gap={3}>
            <Text fontSize="md">@{userProfile?.username}</Text>
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
            name={userProfile?.name}
            src={userProfile?.profilePic}
            size={{ base: "lg", md: "xl" }}
          />
        </Box>
      </Flex>
      <Text>{userProfile?.bio}</Text>
      <FollowBtn userProfile={userProfile}/>

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
