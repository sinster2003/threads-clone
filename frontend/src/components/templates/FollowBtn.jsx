import {
  Button,
  useToast
} from "@chakra-ui/react";
import followUser from "../../utils/features/followUser";
import { useRecoilState } from "recoil";
import userAtom from "../../atoms/userAtom";
import { useState } from "react";

const FollowBtn = ({ userProfile, followersCount, setFollowersCount }) => {
  const toast = useToast();
  const [userData, setUserData] = useRecoilState(userAtom);
  const [isLoading, setIsLoading] = useState(false);
  const isFollowing = userData?.following?.includes(userProfile._id);
  
  return (
      <Button
        mb={-2}
        onClick={async () => {
          await followUser(userProfile._id, toast, setUserData, setIsLoading);
          isFollowing ?
          setFollowersCount(followersCount - 1):
          setFollowersCount(followersCount + 1);
          setIsLoading(false);
        }}
        isLoading={isLoading}
      >
        { isFollowing 
          ? "Unfollow"
          : "Follow"}
      </Button>
  );
};

export default FollowBtn;
