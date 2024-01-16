import { Button, Flex, Spinner, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import userAtom from "../atoms/userAtom";
import { useRecoilValue } from "recoil";
import axios from "axios";
import { UserPost } from "../components";

const HomePage = () => {
  const userLoggedInData = useRecoilValue(userAtom);
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!userLoggedInData) {
      navigate("/login");
    }

    const getFeed = async () => {
      try {
        const response = await axios.get("/api/posts/feed");
        const feedPosts = await response.data;
        setPosts(feedPosts);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    getFeed();
  }, [userLoggedInData]);

  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      mt={10}
      w="full"
    >
      <Link to={`/${userLoggedInData?.username}`}>
        <Button>Visit Profile</Button>
      </Link>
      
      {isLoading && (
        <Flex justifyContent="center" alignItems="center" my={10}>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="gray.light"
            size="xl"
          />
        </Flex>
      )}

      {(!isLoading && posts?.length) === 0 && (
        <Text color="gray.light" fontSize="lg" textAlign="center" my={10}>
          Follow People To Light Your Feed Up🤗
        </Text>
      )}

      {!isLoading &&
        posts?.map((post) => (
          <UserPost
            key={post._id}
            post={post}
            userProfile={post.postedBy}
            home="home"
          />
        ))}
    </Flex>
  );
};

export default HomePage;
