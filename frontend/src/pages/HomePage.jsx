import { Button, Flex } from '@chakra-ui/react'
import { useEffect } from 'react'
import { Link, redirect, useNavigate } from 'react-router-dom'
import userAtom from '../atoms/userAtom';
import { useRecoilValue } from 'recoil';

const HomePage = () => {

  const user = useRecoilValue(userAtom);
  const navigate = useNavigate();

  useEffect(() => {
    if(!user) {
      navigate("/login");
    }
  }, [user]);

  return (
    <Flex justifyContent="center" alignItems="center" mt={10}>
        <Link to="sinster123">
            <Button>Visit Profile</Button>
        </Link>
    </Flex>
  )
}

export default HomePage