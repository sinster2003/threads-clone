import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import PostHeader from "./templates/PostHeader";
import { Actions } from ".";

const Reply = ({comment, image, likes, username}) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <Flex flexDirection="column">
      <Divider />
      <PostHeader image={image} comment={comment} username={username}/>
      <Flex flexDirection="column" ml={10}>
        <Text mb={3} fontSize={{
          base: "sm",
          lg: "md"
        }}>{comment}</Text>
        <Actions isLiked={isLiked} setIsLiked={setIsLiked} />
        <Flex gap={3} alignItems="center" mt={1}>
          <Text color="gray.light">{likes + (isLiked ? 1 : 0)} likes</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Reply;
