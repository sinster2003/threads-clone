import { useEffect, useState } from "react";
import { PostDetails, ReplyModal } from "../components";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Flex, Spinner, useDisclosure } from "@chakra-ui/react";

const PostPage = () => {
  const { pid, username } = useParams();
  const [postDetails, setPostDetails] = useState(null);
  const { onOpen, isOpen, onClose} = useDisclosure();

  useEffect(() => {
    axios.get(`http://localhost:3001/api/posts/${pid}`)
    .then(response => response.data)
    .then(result => setPostDetails(result))
  }, [pid]);

  if(!postDetails) {
    return (<Flex justifyContent="center" alignItems="center" my={10}>
      <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='gray.light'
        size='xl'
      />
      </Flex>
    );
  }

  return (
    <>
    <PostDetails postDetails={postDetails} onOpen={onOpen}/>
    <ReplyModal post={postDetails} userProfile={username} isOpen={isOpen} onClose={onClose} setPostDetails={setPostDetails}/>
    </>
  )
}

export default PostPage