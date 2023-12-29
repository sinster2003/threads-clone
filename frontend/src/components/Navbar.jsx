import { Flex, Image, useColorMode } from "@chakra-ui/react"

const Navbar = () => {

  /* color mode hook provided by chakra ui to toggle customised color mode */
  const {colorMode, toggleColorMode} = useColorMode();

  return (
    <Flex mt={10} justifyContent="center" alignItems="center">
      <Image 
        src={colorMode === "dark" ? "/light-logo.svg" : "/dark-logo.svg"} 
        alt="logo"
        onClick={toggleColorMode}
        cursor="pointer"
        w={8}
      />
    </Flex>
  )
}

export default Navbar