import { Flex, IconButton, Image, useColorMode, Tooltip } from "@chakra-ui/react";
import { MdLogout } from "react-icons/md";
import { FaHouse } from "react-icons/fa6";
import { useRecoilState } from "recoil";
import userAtom from "../atoms/userAtom";
import axios from "axios";

const Navbar = () => {

  /* color mode hook provided by chakra ui to toggle customised color mode */
  const {colorMode, toggleColorMode} = useColorMode();
  const [user, setUserData] = useRecoilState(userAtom);

  const handleLogout = async () => {
    try {
      const response = await axios.post("http://localhost:3001/api/users/logout");
      console.log(response.data.message);
      localStorage.removeItem("user");
      setUserData(null);
    }
    catch(error) {
      console.log(error.response?.data?.message);
    }

  }

  return (
    <Flex mt={10} justifyContent="center" alignItems="center" position="relative">
      {user && (<IconButton position="absolute" left={0}>
        <FaHouse/>
      </IconButton>)}
      <Image 
        src={colorMode === "dark" ? "/light-logo.svg" : "/dark-logo.svg"} 
        alt="logo"
        onClick={toggleColorMode}
        cursor="pointer"
        w={8}
      />
      {user && (
        <Tooltip hasArrow label="logout" fontSize="medium">
          <IconButton position="absolute" right={0}>
            <MdLogout onClick={handleLogout}/>
          </IconButton>
        </Tooltip>)
      }
    </Flex>
  )
}

export default Navbar