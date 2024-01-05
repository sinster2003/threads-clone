import { ViewIcon } from "@chakra-ui/icons";
import { Box, Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, useColorModeValue } from "@chakra-ui/react";

const AuthPassword = () => {
  return (
    <Box>
      <FormControl isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            type="password"
            borderColor={useColorModeValue("gray.400")}
            variant={useColorModeValue("outline", "filled")}
            focusBorderColor={useColorModeValue("gray.600", "teal.400")}
          />
          <InputRightElement>
            <Button variant="ghost">
              <ViewIcon />
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
    </Box>
  );
};

export default AuthPassword;
