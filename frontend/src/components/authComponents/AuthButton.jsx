import { Button, Stack } from "@chakra-ui/react";
import React from "react";

const AuthButton = ({text}) => {
  return (
    <Stack spacing={10} pt={4}>
      <Button
        loadingText="Submitting"
        bg="gray.800"
        color="white"
        _hover={{
          bg: "teal.500",
        }}
      >
        {text}
      </Button>
    </Stack>
  );
};

export default AuthButton;
