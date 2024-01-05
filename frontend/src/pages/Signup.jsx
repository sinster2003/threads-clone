import {
  HStack,
  Stack,
  Flex,
} from "@chakra-ui/react";
import { AuthAsk, AuthButton, AuthHeader, AuthInput, AuthPassword } from "../components";

const Signup = () => {
  return (
    <Flex
      w="full"
      direction="column"
      mt={10}
      gap={10}
      alignItems="center"
      justifyContent="center"
    >
      <AuthHeader header="Sign Up" description="to communicate and network ✌️"/>
      <Stack direction="column">
        <HStack justifyContent="space-between">
          <AuthInput label="Full Name" type="text"/>
          <AuthInput label="Username" type="text"/>
        </HStack>
        <AuthInput label="Email" type="email"/>
        <AuthPassword/>
        <AuthButton text="Sign up"/>
        <AuthAsk ques="Already a user?" linkText="Login" link="/login"/>
      </Stack>
    </Flex>
  );
};

export default Signup;
