import { Container } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { Layout } from "./components";

const App = () => {
  return (
    <Container maxW={{
      base: "sm",
      sm: "lg",
      md: "2xl"
    }}>
      <Layout>
        <Outlet/>
      </Layout>
    </Container>
  )
}

export default App