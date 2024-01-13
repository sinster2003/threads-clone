import { useParams } from "react-router-dom";
import { UserHeader, UserPost } from "../components"
import { useEffect, useState } from "react";
import axios from "axios";

const UserPage = () => {
  const { username } = useParams();
  const [userProfile, setUserProfile] = useState({
    name: "",
    username: "",
    img: "",
    bio: "",
    followers: "",
    posts: []
  });

  useEffect(() => {
    axios.get(`/api/users/profile/${username}`)
    .then(response => response.data)
    .then(result => setUserProfile({
        name: result?.name,
        username: result?.username,
        img: result?.profilePic,
        bio: result?.bio,
        followers: result?.followers,
        posts: result?.posts
    }))
  }, []);

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