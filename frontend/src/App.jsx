import { Container } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { CreatePost, Layout, Logout } from "./components";
import userAtom from "./atoms/userAtom";
import { useRecoilValue } from "recoil";

const App = () => {
  const userLoggedIn = useRecoilValue(userAtom);
  return (
    <>
    {userLoggedIn ? <Logout/>: null} 
    <Container minH="100vh" maxW={{
      base: "md",
      sm: "lg",
      lg: "xl",
    }} display="flex" flexDirection="column" justifyContent="space-around">
      <Layout>
        <Outlet/>
      </Layout>
    </Container>
    {/* if user logged only then creates post button */}
    {userLoggedIn ? <CreatePost/>: null} 
    </>
  )
}

export default App