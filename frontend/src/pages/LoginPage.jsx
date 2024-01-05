import {
  Stack,
  Flex,
} from "@chakra-ui/react";
import { AuthAsk, AuthButton, AuthHeader, AuthInput, AuthPassword } from "../components";

const LoginPage = () => {
  return (
    <Flex
      w="full"
      direction="column"
      mt={10}
      gap={10}
      alignItems="center"
      justifyContent="center"
    >
      <AuthHeader header="Login" description="Welcome to a new era of networking ✌️"/>
      <Stack direction="column" w="80%">
        <AuthInput label="Username" type="text"/>
        <AuthPassword/>
        <AuthButton text="Login"/>
        <AuthAsk ques="Do not have an account?" linkText="Signup" link="/signup"/>
      </Stack>
    </Flex>
  );
};

export default LoginPage;
