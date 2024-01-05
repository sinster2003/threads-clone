import { Container } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { Layout } from "./components";

const App = () => {
  return (
    <Container minH="100vh" maxW={{
      base: "md",
      sm: "lg",
      lg: "xl",
    }} display="flex" flexDirection="column" justifyContent="space-around">
      <Layout>
        <Outlet/>
      </Layout>
    </Container>
  )
}

export default App