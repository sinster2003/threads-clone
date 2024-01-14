import { Container } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { CreatePost, Layout } from "./components";
import userAtom from "./atoms/userAtom";
import { useRecoilValue } from "recoil";

const App = () => {
  const userLoggedIn = useRecoilValue(userAtom);
  return (
    <>
    <Container minH="100vh" maxW={{
      base: "md",
      sm: "lg",
      lg: "xl",
    }} display="flex" flexDirection="column" justifyContent="space-around">
      <Layout>
        <Outlet/>
      </Layout>
    </Container>
      {userLoggedIn ? <CreatePost/>: null}
    </>
  )
}

export default App