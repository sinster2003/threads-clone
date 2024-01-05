import { Button, Flex } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <Flex justifyContent="center" alignItems="center" mt={10}>
        <Link to="/mark">
            <Button>Visit Profile</Button>
        </Link>
    </Flex>
  )
}

export default HomePage