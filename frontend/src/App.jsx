import { Container } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { Layout } from "./components";

const App = () => {
  return (
    <Container>
      <Layout>
        <Outlet/>
      </Layout>
    </Container>
  )
}

export default App