import { useNavigate, useParams } from "react-router-dom";
import { UserHeader, UserPost } from "../components"
import { useEffect, useState } from "react";
import axios from "axios";
import { useRecoilValue } from "recoil";
import userAtom from "../atoms/userAtom";

const UserPage = () => {
  const { username } = useParams();
  const [userProfile, setUserProfile] = useState({});
  const user = useRecoilValue(userAtom);
  const navigate = useNavigate();

  useEffect(() => {
    if(!user) {
      navigate("/login");
    }
  }, [user]);

  useEffect(() => {
    axios.get(`/api/users/profile/${username}`)
    .then(response => response.data)
    .then(result => setUserProfile(result))
    .catch(error => console.log(error))
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