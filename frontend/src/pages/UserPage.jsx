import { Link, useNavigate, useParams } from "react-router-dom";
import { UserHeader, UserPost } from "../components"
import { useEffect, useState } from "react";
import axios from "axios";
import { useRecoilValue } from "recoil";
import userAtom from "../atoms/userAtom";
import { Button, Flex, useToast } from "@chakra-ui/react";

const UserPage = () => {
  const { username } = useParams();
  const [userProfile, setUserProfile] = useState({});
  const user = useRecoilValue(userAtom);
  const navigate = useNavigate();
  const toast = useToast();

  useEffect(() => {
    if(!user) {
      navigate("/login");
    }
  }, [user]);

  useEffect(() => {
    axios.get(`/api/users/profile/${username}`)
    .then(response => response.data)
    .then(result => setUserProfile(result))
    .catch(error => {
      toast({
        title: "Error",
        description: error?.response?.data?.message || "Something went wrong",
        status: "error",
        duration: 3000,
        isClosable: true
      })
      setUserProfile(null);
    })
  }, []);

  if(!userProfile) {
    return (
      <Flex w="full" justifyContent="center" mt={10}>
        <Link to="/">
          <Button>Back to Safety</Button>
        </Link>
      </Flex>
    );
  }

  return (
    <>
      <UserHeader userProfile={userProfile}/>
      {
        userProfile?.posts?.map((post) =><UserPost key={post._id} post={post} userProfile={userProfile}/>)
      }

      {/*
      <UserPost text={"Introducing Threads the new generation social media platform"} image={"post1.png"} likes={10} replies={0}/>
      <UserPost text={"The Goat 🐐"} image={"post2.jpg"} likes={100} replies={23}/>
      <UserPost text={"Be ready to die"} image={"post3.png"} likes={20} replies={192}/>
      <UserPost text={"Remember the name: Mark Zuckerberg"} likes={127} replies={11} />
     */}
      </>
  )
}

export default UserPage