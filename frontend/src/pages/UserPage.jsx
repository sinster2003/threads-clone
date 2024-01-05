import { UserHeader, UserPost } from "../components"

const UserPage = () => {
  return (
    <>
      <UserHeader/>
      <UserPost text={"Introducing Threads the new generation social media platform"} image={"post1.png"} likes={10} replies={0}/>
      <UserPost text={"The Goat 🐐"} image={"post2.jpg"} likes={100} replies={23}/>
      <UserPost text={"Be ready to die"} image={"post3.png"} likes={20} replies={192}/>
      <UserPost text={"Remember the name: Mark Zuckerberg"} likes={127} replies={11} />
    </>
  )
}

export default UserPage