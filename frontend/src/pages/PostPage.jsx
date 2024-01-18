import { useEffect, useState } from "react";
import { PostDetails, ReplyModal } from "../components";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDisclosure } from "@chakra-ui/react";
import likeAtom from "../atoms/likeAtom";
import { useRecoilValue } from "recoil";

const PostPage = () => {
  const { pid, username } = useParams();
  const [postDetails, setPostDetails] = useState({});
  const { onOpen, isOpen, onClose} = useDisclosure();
  const likesState = useRecoilValue(likeAtom);

  useEffect(() => {
    axios.get(`http://localhost:3001/api/posts/${pid}`)
    .then(response => response.data)
    .then(result => setPostDetails(result))
  }, [pid, likesState]);

  return (
    <>
    <PostDetails postDetails={postDetails} onOpen={onOpen}/>
    <ReplyModal post={postDetails} userProfile={username} isOpen={isOpen} onClose={onClose} setPostDetails={setPostDetails}/>
    </>
  )
}

export default PostPage