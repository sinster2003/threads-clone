import { Flex } from "@chakra-ui/react";
import { Like, Comment, Repost, Share } from "./";

const Actions = ({post}) => {

  return (
    <Flex gap={4} pb={2} onClick={(e) => e.preventDefault()}>
      <Like post={post}/>
      <Comment/>
      <Repost/>
      <Share/>
    </Flex>
  );
};

export default Actions;
