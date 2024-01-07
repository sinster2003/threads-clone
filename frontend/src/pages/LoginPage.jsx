import {
  Stack,
  Flex,
  useToast,
} from "@chakra-ui/react";
import { AuthAsk, AuthButton, AuthHeader, AuthInput, AuthPassword } from "../components";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import loginSchema from "../utils/zodSchema/loginZod";
import axios from "axios";
import { useRecoilState } from "recoil";
import userAtom from "../atoms/userAtom";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });
  const toast = useToast();
  const navigate = useNavigate();
  const [user, setUserData] = useRecoilState(userAtom);

  useEffect(() => {
    if(user) {
      navigate("/");
    }

    if(Object.keys(errors).length) {
      toast({
        title: `Error in field ${Object.keys(errors)[0]}`,
        description: `${Object.values(errors)[0].message}`,
        status: "error",
        duration: 3000,
        isClosable: true,
      })
    }
  }, [errors, user])

  const onSubmit = async (data) => {
    console.log(data);

    const loginBody = {
      username: data.Username,
      password: data.Password
    }

    try {
      const response = await axios.post("http://localhost:3001/api/users/login", loginBody);
      localStorage.setItem("user", JSON.stringify(response.data));
      setUserData(response.data);
    }
    catch(error) {
      console.log(error.response?.data?.message);
    } 

  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
        <AuthInput label="Username" type="text" register={register}/>
        <AuthPassword register={register}/>
        <AuthButton text="Login"/>
        <AuthAsk ques="Do not have an account?" linkText="Signup" link="/signup"/>
      </Stack>
    </Flex>
    </form>
  );
};

export default LoginPage;
