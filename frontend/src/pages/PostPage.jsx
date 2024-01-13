import { useEffect, useState } from "react";
import { PostDetails } from "../components";
import axios from "axios";
import { useParams } from "react-router-dom";

const PostPage = () => {
  const { pid } = useParams();
  const [postDetails, setPostDetails] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:3001/api/posts/${pid}`)
    .then(response => response.data)
    .then(result => setPostDetails(result))
  }, []);

  return (
    <PostDetails postDetails={postDetails}/>
  )
}

export default PostPage